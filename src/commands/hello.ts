import {Command, flags} from '@oclif/command';
import Quotations from '../models/quotations';

export default class Hello extends Command {
  static description = 'describe the command here';

  async run() {
    const {args, flags} = this.parse(Hello);

    const quotes = new Quotations();
    console.log(quotes.list);
  }
}
