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

  backdrop!: any
  selectedItem!: any
  show: boolean = false

  constructor() {
    this.backdrop = document.createElement('div')
    this.backdrop.style.cssText = `position: absolute; left: 0; top: 0; width: 100%; height: 100%; background-color: #000000; opacity: 0.0;z-index: 999;`
    this.backdrop.setAttribute('id', 'backdrop')
   }

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
    let elem = document.getElementById('backdrop')
    elem? document.body.removeChild(elem) : null
  }


  showItems(): void{
    const dismiss = (ev: MouseEvent) =>{
      console.log('clicked')
      let el = document.getElementById('backdrop')
      el? document.body.removeChild(el) : null
      this.show = false
    }

    document.body.appendChild(this.backdrop)
    let elem = document.getElementById('backdrop')
      elem? elem.addEventListener('click', dismiss) : null
    this.show = true
  }



}
