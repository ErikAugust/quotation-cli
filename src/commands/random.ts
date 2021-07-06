import {Command} from '@oclif/command'
import Quotations from '../models/quotations';
import chalk from 'chalk';
import { displayAsciiArt } from '../misc/ascii';

export default class Random extends Command {
  static description = 'displays a random quotation';
  static aliases = ['r'];

  async run() {
    const {args} = this.parse(Random);
    const quotes = new Quotations();
    const quote = quotes.getRandom();

    await displayAsciiArt('Quote');
    
    this.log(
      `\n${chalk.blue.bold.italic(`"${quote.quote}"`)}\n`
    );
    
    if (quote.attributed) {
      this.log(`- ${quote.attributed}\n`)
    }
  }
}
