import { Pipe, PipeTransform } from '@angular/core';
import {checkNested} from "./check.nested";
import {L10nTranslationService} from "angular-l10n";
import {i18nAsset} from "../../../i18n";


@Pipe({
  name: 'translateArray'
})
export class TranslateArrayPipe implements PipeTransform {

  constructor(private _translation: L10nTranslationService) {
  }

  transform(value: string[], prefix: string, lang: string , options: {label: string, value: any, filter?: string, state?: boolean}[]): string {
    console.log('TranslateArrayPipe value', value, 'prefix', prefix)
    if(value.length){
      const valTemp = [...value]
      if(typeof(value[0])==="number"){
        value = valTemp.map(val=>{
          const found = options.find(opt=>opt.value===val)
          return found? found.label : val
        })
      }
    }
    return value.map(item=>{
     let res: string
     if(checkNested(i18nAsset, lang, prefix,item)){
       res = this._translation.translate(`${prefix}.${item}`, lang)
     }else{
       if(checkNested(i18nAsset, lang, 'registration-step', item)){
         res = this._translation.translate(`registration-step.${item}`, lang)
       }else{
         res = item
       }
     }
     return res
   }).join(', ')

  }

}
