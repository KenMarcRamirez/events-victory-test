import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datalistTranslator'
})
export class DatalistTranslatorPipe implements PipeTransform {

  transform(name: any, arrayForm: any, type: any) {


    const filter = arrayForm.find(data => {
      if (name === data[type]) return data;
    })

    console.log(filter);
    
    return filter;
  }

}
