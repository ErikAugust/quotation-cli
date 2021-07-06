import * as inquirer from 'inquirer';

export function addQuotationPrompt() {
    const questions = [
      {
        name: 'quote',
        type: 'input',
        message: 'Enter the quotation:',
        validate: function( value: any ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the quotation.';
          }
        }
      },
      {
        name: 'attributed',
        type: 'input',
        message: 'Enter to whom the quotation is attributed:',
      },
      {
        name: 'source',
        type: 'input',
        message: 'Enter the source (book) of the quotation:',
      },
      {
        name: 'page',
        type: 'number',
        message: 'Enter the page number of the source:',
      },
      {
        name: 'year',
        type: 'number',
        message: 'Enter the year of the quotation:',
      },
      {
        name: 'url',
        type: 'input',
        message: 'Enter a URL for the quotation:',
      },
      {
        name: 'subject',
        type: 'input',
        message: 'Enter subject of the quotation:',
      },
      {
        name: 'tags',
        type: 'input',
        filter: function( value: any) {
            if (value) {
                return value.split(',');
            }
        },
        message: 'Enter comma separated tags for the quotation:',
      },
    ];
    return inquirer.prompt(questions);
}