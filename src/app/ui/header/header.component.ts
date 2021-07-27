import {AfterViewInit, Component, Inject, Input, NgZone, OnDestroy, OnInit} from '@angular/core';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from "angular-l10n";
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {l10nConfig} from "../../ln10Config";
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {appConfig} from "../../app.config";
import {AuthService} from "../../services/authService";
import {headerConfigT, toolbarConfigT} from "../types/types";
import {debounceTime, filter, tap} from "rxjs/operators";

interface toolbarConfigExtT extends toolbarConfigT{
  curr: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy{

  @Input()actionArea: boolean =  true

  languages = l10nConfig.schema.map(item=>({label: item.locale.language, value:  item.locale.language}))//item.locale}))

  localeForm = new FormGroup({
    language: new FormControl()
  })

  lang = 'en-US'

  private _sub = new Subscription()
  currPage: string = ''
  config!: headerConfigT
  private _auth: boolean = false


  @Input()defaultHeader: string = 'welcome'


  constructor( private _translation: L10nTranslationService,
               @Inject(L10N_LOCALE) public locale: L10nLocale,
               private _ngZone: NgZone,
               private _router: Router,
               private _authService: AuthService,
              ) {
    this.lang =  locale.language
  }

  logout(){
    this._authService.logout()
    this._auth = false
    this.toolbarSettings()
  }

  ngOnInit() {

    let sub$ = this._router.events.pipe(
      //debounceTime(300),
      filter((re: any)=>re instanceof NavigationEnd),
      tap((ev: NavigationEnd)=>{

         this.currPage = ev.url.split('/').splice(-1, 1)[0];
         console.log('straszna dupa', this.currPage)
         this.currPage =  this.currPage!==undefined?  this.currPage : 'welcome'
         console.log('straszna dupa 1', this.currPage)
         this.toolbarSettings()

      })
    ).subscribe()
    this._sub.add(sub$)

    this.localeForm.controls['language'].patchValue(this._translation.getLocale().language)

     sub$ = this._authService.checkIsLoggedIn().subscribe(
      val=>{
          this._auth =  val
          this.toolbarSettings()
         }
        )
    this._sub.add(sub$)

    this.localeForm.controls['language'].valueChanges.subscribe(
      (lang: L10nLocale)=>{
         const locale = l10nConfig.schema.find(item=>item.locale.language===this.lang)
         locale? this.setLocale(locale.locale) : null
      }
    )
    this._sub.add(sub$)
  }

  toolbarSettings(val: boolean =  false){

    this.localeForm.controls['language'].patchValue(this._translation.getLocale().language)

    console.log('header setup currpage', this.currPage )

    let configIdx = appConfig.findIndex(item=>item.instancename===this.currPage)
    configIdx =  configIdx>-1? configIdx : appConfig.findIndex(item=>item.instancename===this.defaultHeader)
    const headerConfig =  appConfig[configIdx].config.headerConfig

    if(headerConfig!==undefined){
      if(this._auth){
        this.config = {
          ...headerConfig,
          toolbarConfig: headerConfig.toolbarIfLoggedIn? [...headerConfig.toolbarIfLoggedIn] : [],
        }
      }else{
        this.config = {
          ...headerConfig,
          toolbarConfig: headerConfig.toolbarConfig? [...headerConfig.toolbarConfig] : [],
        }
      }
    }

  }

  setLocale(locale: L10nLocale): void{
    this._translation.setLocale(locale)
  }

  homeNavigate() {
    console.log('picture link', this.config.logoPictureLink)
    this.config?.logoPictureLink? this._router.navigate([this.config.logoPictureLink]) : null;
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe()
  }
}
