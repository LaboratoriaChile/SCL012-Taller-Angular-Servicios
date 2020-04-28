import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { SumComponent } from './sum/sum.component';
import { SubsComponent } from './subs/subs.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SumComponent,
    SubsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
