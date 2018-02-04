import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationSearchComponent } from './components/location-search/location-search.component';
import { CurrentConditionsDisplayComponent } from './components/current-conditions-display/current-conditions-display.component';
import { FiveDayDisplayComponent } from './components/five-day-display/five-day-display.component';
import { TwelveHourDisplayComponent } from './components/twelve-hour-display/twelve-hour-display.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationSearchComponent,
    CurrentConditionsDisplayComponent,
    FiveDayDisplayComponent,
    TwelveHourDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
