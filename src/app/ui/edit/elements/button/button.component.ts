import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  down = false;

  @Input()color: string = 'primary'
  @Input()result: string = 'click'

  @Output()action = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
