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

  private load() {
    this.file = readFileSync(this.path as string);
    return JSON.parse(this.file.toString());
  }

  public getRandom(): Quotation {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}