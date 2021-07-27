import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: {[key: string]: any}, ...args: unknown[]): unknown {
    return Object.keys(value).map(key=>({key: key, value: value[key]}));
  }

}
