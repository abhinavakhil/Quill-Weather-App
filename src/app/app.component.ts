import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  cityName;
  cityWeather:any;
  searching:boolean=false;
  date:object= new Date();
  image="assets/2.png";

  // icon=this.cityWeather.weather[0].icon;
  // imageUrl:string="http://openweathermap.org/img/w/"+this.icon+".png"
   constructor(private weatherService:WeatherService){}

  searchWeather(city:string){
    this.searching=true;
 this.weatherService.getWeather(city)
  .subscribe(
    (response)=> {
      this.cityWeather =  response;
      console.log(response);
    },
    (error)=>console.log(error)
  );
 // alert("wait showing details about"+" "+city);
  
  }

  
}
