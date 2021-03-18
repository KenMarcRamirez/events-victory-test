import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comboBoxTranslator'
})
export class ComboBoxTranslatorPipe implements PipeTransform {

  transform(dataToSort = [], columnNameToSort: string, stringToSort: string): any[] {
    let sortedData: any[] = [];
    sortedData = [];

    for (var i = 0; i < dataToSort.length; ++i) {
      if (dataToSort[i][columnNameToSort].toLowerCase().includes(stringToSort.toLowerCase())) sortedData.push(dataToSort[i]);
    }

    return sortedData;
  }

}
