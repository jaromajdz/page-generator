import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {dropdownOptionsT} from "../../../types/types";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-nice-dropdown',
  templateUrl: './nice-dropdown.component.html',
  styleUrls: ['./nice-dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NiceDropdownComponent),
    multi: true
  }]
})
export class NiceDropdownComponent implements OnInit, ControlValueAccessor {

  private _onChange!: (_: any) => void
  private _onTouched!: () => void

  @Input()options: dropdownOptionsT[] = []
  @Input()lang!: string
  @Input()prefix!: string

  selectedItem: any
  show: boolean = false

  constructor() { }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  writeValue(value: any): void{
    console.log('valud', value)
    this.selectedItem =  value
  }

  ngOnInit(): void {
  }

  select(item: any){
    console.log('selected', item['target']['value'])
    this.selectedItem = item['target']['value']
    this._onChange(this.selectedItem)
    this._onTouched()
    this.show = false
  }

  selectItem(ev: any, item: any){
    ev.stopPropagation()
    this.selectedItem = item
    this._onChange(this.selectedItem)
    this._onTouched()
    this.show = false
  }

}
