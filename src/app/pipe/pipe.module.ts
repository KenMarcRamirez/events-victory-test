import { NgModule } from '@angular/core';
import { DatalistTranslatorPipe } from './datalist-translator/datalist-translator.pipe';
import { ComboBoxTranslatorPipe } from './combo-box-translator/combo-box-translator.pipe'


@NgModule({
  declarations: [
   DatalistTranslatorPipe,
   ComboBoxTranslatorPipe
  ],
  imports: [],
  exports: [
    DatalistTranslatorPipe,
    ComboBoxTranslatorPipe
  ]
})
export class PipesModule { }
