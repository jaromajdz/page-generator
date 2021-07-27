import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {EditModule} from "./edit/edit.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    EditModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    EditModule,
    MainComponent
  ]
})
export class UiModule { }
