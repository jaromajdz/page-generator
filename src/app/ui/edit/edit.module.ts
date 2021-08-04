import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateArrayPipe} from "./helpers/translate-array.pipe";
import {TransPipe} from "./helpers/trans.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NiceDropdownComponent } from './elements/nice-dropdown/nice-dropdown.component';
import { EditComponent } from './edit/edit.component';
import { ActionareaComponent } from './elements/actionarea/actionarea.component';
import { ButtonComponent } from './elements/button/button.component';



@NgModule({
  declarations: [
    TranslateArrayPipe,
    TransPipe,
    NiceDropdownComponent,
    EditComponent,
    ActionareaComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    TranslateArrayPipe,
    TransPipe,
    NiceDropdownComponent,
    ButtonComponent
  ]
})
export class EditModule { }
