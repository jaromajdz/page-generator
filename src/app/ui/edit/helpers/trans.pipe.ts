import { Pipe, PipeTransform } from '@angular/core';
import {L10nTranslationService} from "angular-l10n";
import {checkNested} from "./check.nested";
import {i18nAsset} from "../../../i18n";

@Pipe({
  name: 'trans'
})
export class TransPipe implements PipeTransform {

  constructor(private _translation: L10nTranslationService) {
  }

  transform(value: string = "", prefix: string, lang: string, nested: boolean = false, groupTitle: string = ''): string {

    let res: string

    prefix =  nested? groupTitle : prefix

    if(checkNested(i18nAsset, lang, prefix,value)){
       res = this._translation.translate(`${prefix}.${value}`, lang)
    }else{
      if(checkNested(i18nAsset, lang, 'universal', value)){
        res = this._translation.translate(`universal.${value}`, lang)
      }else{
        res = value
      }
    }
    return res
  }

}
