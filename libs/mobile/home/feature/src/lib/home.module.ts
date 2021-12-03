import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home.page';

import { HomePageComponentRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageComponentRoutingModule,
  ],
  declarations: [HomePageComponent],
})
export class HomePageComponentModule {}
