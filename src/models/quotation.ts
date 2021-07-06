import { v4 } from 'uuid';

/**
 * @interface QuotationDto
 * @author Erik August Johnson <erik@eaj.io> 
 */ 
export interface QuotationDto {
  uuid?: string;
  quote: string;
  attributed?: string;
  subject?: string;
  source?: string;
  year?: number;
  page?: number;
  url?: string;
  tags?: string[];
}

/**
 * @class Quotation
 * @author Erik August Johnson <erik@eaj.io>
 */
export class Quotation {
  public uuid: string;
  public quote: string;
  public attributed?: string;
  public subject?: string;
  public source?: string;
  public page?: number;
  public url?: string;
  public alternate?: string;
  public year?: number;
  public tags?: string[];


  constructor(quotation: any) {
    this.uuid = quotation.uuid || v4();
    this.quote = quotation.quote;
    this.attributed = quotation.attributed;
    this.subject = quotation.subject;
    this.source = quotation.source;
    this.alternate = quotation.alternate;
    this.url = quotation.url;
    this.page = quotation.page;
    this.year = quotation.year;
    this.tags = quotation.tags || [];
  }
}
  