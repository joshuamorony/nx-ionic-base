import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { MobileShellRoutingModule } from './mobile-shell-routing.module';

import { IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  imports: [BrowserModule, MobileShellRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class MobileShellModule {}
