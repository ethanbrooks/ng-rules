import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {RulesComponent} from './rules.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxFilterBuilderModule } from 'devextreme-angular/ui/filter-builder';
import { DxListModule } from 'devextreme-angular/ui/list';


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
    DxButtonModule,
    DxTagBoxModule,
    DxFilterBuilderModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [RulesComponent]
})
export class AppModule { }
