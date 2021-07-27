import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {L10N_LOCALE, L10nLocale} from "angular-l10n";
import {NavigationEnd, Router} from "@angular/router";
import {distinctUntilChanged, filter} from "rxjs/operators";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
 })
export class MainComponent implements AfterViewInit, OnInit {

  @Input()currPage!: string

  config: {[link: string]: string[]} = {
    welcome: [`<h3>Some nice title</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada gravida orci vitae hendrerit. Cras vel augue porttitor, placerat lectus at, dignissim leo. Nulla sit amet egestas nulla. Ut et sem sit amet orci mattis rutrum. Cras quam dui, porta in pretium ut, egestas eget velit. Nam eu purus magna. Maecenas aliquam varius commodo.</p>
<p>Suspendisse massa mauris, luctus eu efficitur nec, vulputate non est. Nunc vitae neque id diam ultrices pellentesque. Integer lorem eros, venenatis nec arcu varius, luctus pretium nulla. Sed in eleifend enim, vel ornare erat. Morbi vel lectus vehicula, mollis quam a, hendrerit risus. Etiam blandit magna nulla, vel auctor mauris scelerisque vel. Proin scelerisque, dui et dictum eleifend, sem leo aliquet tellus, vitae viverra turpis elit vel lorem.</p>`
    ],
 appinfo: [
    `<h3>App info</h3>
     <h4>About something</h4>
     <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque pharetra felis mi, in volutpat velit convallis posuere. Proin suscipit scelerisque lectus sit amet auctor. Proin vel consectetur lacus. Ut ullamcorper auctor ex, sed porta orci convallis ac. Suspendisse potenti. Aliquam erat volutpat. Vivamus dictum commodo enim pellentesque placerat. Nullam consequat sollicitudin urna at dignissim. Duis aliquet lacinia leo, ut sagittis dui maximus vitae. Ut molestie quam vulputate nunc aliquam pharetra quis non odio. Etiam scelerisque diam placerat, volutpat metus quis, ultrices nibh.</p>
     `,
`<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque pharetra felis mi, in volutpat velit convallis posuere. Proin suscipit scelerisque lectus sit amet auctor. Proin vel consectetur lacus. Ut ullamcorper auctor ex, sed porta orci convallis ac. Suspendisse potenti. Aliquam erat volutpat. Vivamus dictum commodo enim pellentesque placerat. Nullam consequat sollicitudin urna at dignissim. Duis aliquet lacinia leo, ut sagittis dui maximus vitae. Ut molestie quam vulputate nunc aliquam pharetra quis non odio. Etiam scelerisque diam placerat, volutpat metus quis, ultrices nibh.</p>`,
`<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque pharetra felis mi, in volutpat velit convallis posuere. Proin suscipit scelerisque lectus sit amet auctor. Proin vel consectetur lacus. Ut ullamcorper auctor ex, sed porta orci convallis ac. Suspendisse potenti. Aliquam erat volutpat. Vivamus dictum commodo enim pellentesque placerat. Nullam consequat sollicitudin urna at dignissim. Duis aliquet lacinia leo, ut sagittis dui maximus vitae. Ut molestie quam vulputate nunc aliquam pharetra quis non odio. Etiam scelerisque diam placerat, volutpat metus quis, ultrices nibh.</p>
     <p>Der Erstkontakt mit einem potenziellen Verkäufer entsteht oft durch eine kostenlose und unverbindliche Immobilienbewertung und eine aktuelle Markteinschätzung. Sie dient dem Eigentümer als wichtige Entscheidungsgrundlage für die Zukunft. Der Makler hingegen erfährt die aktuelle Situation und die Wünsche des Eigentümers - auch bezüglich einer neuen Immobiliensuche. Er erkennt, wer wo passen könnte und kontaktiert die Parteien proaktiv mit der notwendigen Diskretion.</p>`,
]
  }


  htmlText!: string[]

  constructor( @Inject(L10N_LOCALE) public locale: L10nLocale ,
               private _router: Router,
               private _change: ChangeDetectorRef,
              ) { }

  ngOnInit() {
    this.currPage = this._router.url
    this.currPage =  this._router.url.split('/').splice(-1, 1)[0]
    this.currPage = this.currPage? this.currPage : 'welcome'
    console.log('main curr page', this.currPage)
    this.htmlText = [...this.config[this.currPage]]
  }

  ngAfterViewInit(): void {

  }

}
