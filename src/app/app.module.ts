import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NumberComponent } from './number/number.component';
import { CountryItemComponent } from './country-item/country-item.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    AboutComponent,
    NumberComponent,
    CountryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
