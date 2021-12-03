import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { MobileShellModule } from '@nx-ionic/mobile/shell/feature';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicModule.forRoot(), MobileShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
