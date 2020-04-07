import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxFilterBuilderModule } from 'devextreme-angular/ui/filter-builder';
import { DxListModule } from 'devextreme-angular/ui/list';

import {AppModule} from './app.module';
import {RulesComponent} from './rules.component';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    DxListModule,
    DxButtonModule,
    DxTagBoxModule,
    DxFilterBuilderModule
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [RulesComponent],
})
export class AppServerModule {}
