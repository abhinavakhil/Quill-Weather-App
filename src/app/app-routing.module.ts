import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {path:'', component:HomeComponent},
   {path:'home', component:HomeComponent},
   {path:'weather-details', component:WeatherViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
