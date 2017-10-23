import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './cities/city/city.component';
import { CityDetailsComponent } from './cities/city-details/city-details.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { ActivityListEditComponent } from './activities/activity-list-edit/activity-list-edit.component';
import { ActivityComponent } from './activities/activity/activity.component';
import { CityListComponent } from './cities/city-list/city-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CitiesComponent,
    CityComponent,
    CityDetailsComponent,
    ActivitiesComponent,
    ActivityListComponent,
    ActivityListEditComponent,
    ActivityComponent,
    CityListComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
