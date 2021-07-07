import {Command} from '@oclif/command';
import {addQuotationPrompt} from '../prompts/add';
import {Quotation, QuotationDto, Quotations} from '../models/index';
import {displayAsciiArt} from '../misc/ascii';
import chalk from 'chalk';

export default class Add extends Command {
  static description = 'adds a quotation';
  static aliases = ['new'];

  async run() {
    const {args} = this.parse(Add);
    this.log('\n');
    
    // Prompt and save quotation:
    const quote: QuotationDto = await addQuotationPrompt();
    const quotations = new Quotations();
    const quotation = new Quotation(quote);
    quotations.list.push(quotation);
    quotations.save();

    await displayAsciiArt('Quote');
    this.log(
      `\n${chalk.yellow.bold(`"${quote.quote}"`)}\n`
    );
    
    if (quote.attributed) {
      this.log(`- ${quote.attributed}\n`)
    }

    this.log('Quotation added.');


  }
}
