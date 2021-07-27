import { Pipe, PipeTransform } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Pipe({
  name: 'isNested'
})
export class IsNestedPipe implements PipeTransform {

  transform(form: FormGroup, nested: boolean, groupTitle: string, ...args: unknown[]): FormGroup {
    return nested? <FormGroup>form.get(groupTitle) : form ;
  }

}
