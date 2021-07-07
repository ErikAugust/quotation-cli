import {Command} from '@oclif/command';
import {Quotations} from '../models/index';
import {displayAsciiArt} from '../misc/ascii';
import chalk from 'chalk';

export default class Attributed extends Command {
  static description = 'displays all quotes for attribution by name';
  static aliases = ['a'];

  static args = [
    {
      name: 'attributed',
      description: 'name of the attributed'
    }
  ];

  async run() {
    const {args, flags} = this.parse(Attributed);
    const attributed = args.attributed;
    const quotes = new Quotations();

    const list = quotes.findByAttribution(attributed);

    await displayAsciiArt('Quote');

    if (!list.length) {
      this.log(`No quotes found for ${attributed}.`);
      process.exit(0);
    }

    this.log(`\nFound ${list.length} quotations for ${chalk.bold(attributed)}:\n`);
    list.forEach(quote => {
      this.log(`\n${chalk.yellow.bold(`"${quote.quote}"`)}\n`);
    });

  }
}
