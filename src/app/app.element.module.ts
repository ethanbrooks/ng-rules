
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import {RulesComponent} from './rules.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxFilterBuilderModule } from 'devextreme-angular/ui/filter-builder';
import { DxListModule } from 'devextreme-angular/ui/list';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: RulesComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    DxListModule,
    DxFilterBuilderModule,
    DxButtonModule,
    DxTagBoxModule,
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  entryComponents: [RulesComponent],
//  bootstrap: [RulesComponent]
})

export class AppElementModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(RulesComponent, { injector });
    customElements.define('app-rules', myElement);
  }
  ngDoBootstrap() {}
}


