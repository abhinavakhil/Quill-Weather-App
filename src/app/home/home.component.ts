import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cityName:string;
  weatherData:any;
  constructor(private weatherService:WeatherService,
              private router:Router) {
          
              }

  ngOnInit() {
  }

 getWeatherdata(){
  if(this.cityName.length > 1){
    localStorage.setItem('cityName',this.cityName);
    this.router.navigate(['/weather-details']);
     }
     else if(this.cityName.length === 0 || this.cityName.length === 1 ){
      alert('please enter valid city Name (:');
     }
  }

}
