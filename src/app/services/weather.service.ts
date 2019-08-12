import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  
  apiKey:string = environment.apiKey;
  constructor(private http:HttpClient) { }

  // getWeather(city:string){
  //  return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+"&units=metric"+"&appid="+'be0ea45dda9de40737dbad5fe32e3f99');
  // }

  getWeather(cityName:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.apiKey}`);
  }

  // getting quotes
  getQuotes(){
    return this.http.get("https://thesimpsonsquoteapi.glitch.me/quotes");
    }

}
