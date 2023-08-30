import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AthleteCardComponent } from './athlete-card/athlete-card.component';
import { AthletePageComponent } from './athlete-page/athlete-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AthleteCardComponent,
    AthletePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
