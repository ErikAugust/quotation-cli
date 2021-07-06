import {config} from 'dotenv';
import { readFileSync, writeFileSync } from 'fs';
import { Quotation, QuotationDto } from './quotation';

config();

export const PATH: string | undefined = process.env.QUOTATIONS_PATH;

console.log(PATH);

export default class Quotations {
  path: string | undefined;
  file!: Buffer;
  list: Quotation[];

  constructor(path?: string) {
    this.path = path || PATH;
    const quotations = this.load();
    this.list = quotations.list.map((quotation: QuotationDto) => new Quotation(quotation));
  }

  /**
   * Finds quotations by attribution (author)
  */  
  public findByAttribution(attributed: string): Quotation[] {
    return this.list.filter((quotation: Quotation) => quotation.attributed === attributed);
  }

  public getRandom(): Quotation {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }

  private load() {
    this.file = readFileSync(this.path as string);
    return JSON.parse(this.file.toString());
  }

  /**
   * Saves the current Todo nstance to the Todo JSON file
   */
   public save(): void {
    const quotations = {
      list: this.list,
      config: {}
    };
    writeFileSync(this.path as string, JSON.stringify(quotations, null, 2));
  }
}