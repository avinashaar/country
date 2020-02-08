import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import {CountriesComponent} from './countries/countries.component';
import {AboutComponent} from './about/about.component';
import {NumberComponent} from './number/number.component';


const routes: Routes = [
  { path: '' , component: CountriesComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'country/:number', component: NumberComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
