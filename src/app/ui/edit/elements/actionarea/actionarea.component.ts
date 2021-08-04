import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actionarea',
  templateUrl: './actionarea.component.html',
  styleUrls: ['./actionarea.component.scss']
})
export class ActionareaComponent implements OnInit {

  @Input()disableSend: boolean = false

  positions = ['left', 'center', 'right']

  buttonsConfig = [
      {
        label: 'Left',
        color: 'warn',
        position: 'left',
        result: 'cancel',
        send: false
      },
      {
        label: 'Center',
        color: 'info',
        position: 'center',
        result: 'send',
        send: true
      },
      {
        label: 'Right',
        color: 'primary',
        position: 'right',
        result: 'send',
        send: true
      },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
