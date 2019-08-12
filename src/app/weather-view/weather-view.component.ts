import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {
  weathercityName:string;
  weatherData:any;
  loader:boolean= false;
  myQuoteData:any={};
  date:object= new Date();

  constructor(private weatherService:WeatherService) { }

 ngOnInit() {
    this.weathercityName = localStorage.getItem('cityName');
    console.log(this.weathercityName);
    this.loader = true;
   this.weatherData = this.weatherService.getWeather(this.weathercityName)
   .subscribe( response =>{
    this.loader = false;
     this.weatherData = response;
     console.log(this.weatherData);
    
   })

  //  get quotes
   this.weatherService.getQuotes()
   .subscribe(response =>{
     this.myQuoteData = response;
     console.log(this.myQuoteData);
   })

  }
  


}
