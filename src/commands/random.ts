import {Command, flags} from '@oclif/command'
import Quotations from '../models/quotations';
import chalk from 'chalk';
import { displayAsciiArt } from '../misc/ascii';

export default class Random extends Command {
  static description = 'displays a random quotation';
  static aliases = ['r'];
  static flags = {
    attributed: flags.string({
      char: 'a',
      multiple: false,
      description: 'finds quotations by attribution'
    })
  }

  async run() {
    const {args,flags} = this.parse(Random);
    const quotes = new Quotations();
    const quote = getRandomQuote(quotes, flags.attributed);

    await displayAsciiArt('Quote');

    if (!quote) {
      this.log('No quotes found.');
      process.exit(0);
    }

    this.log(
      `\n${chalk.yellow.bold(`"${quote.quote}"`)}\n`
    );
    
    if (quote.attributed) {
      this.log(`- ${quote.attributed}\n`)
    }
  }
}

function getRandomQuote(quotes: Quotations, attributed: any) {
  if (attributed) {
    const quotations = quotes.findByAttribution(attributed);
    return quotations[Math.floor(Math.random() * quotations.length)];
  } else {
    return quotes.getRandom();
  }
}