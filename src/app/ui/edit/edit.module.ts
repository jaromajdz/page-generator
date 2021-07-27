import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateArrayPipe} from "./helpers/translate-array.pipe";
import {TransPipe} from "./helpers/trans.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NiceDropdownComponent } from './elements/nice-dropdown/nice-dropdown.component';



@NgModule({
  declarations: [
    TranslateArrayPipe,
    TransPipe,
    NiceDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    TranslateArrayPipe,
    TransPipe,
    NiceDropdownComponent
  ]
})
export class EditModule { }
