import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  // apiKey:"be0ea45dda9de40737dbad5fe32e3f99";
  // url:"";
  constructor(private http:HttpClient) { }

  getWeather(city:string){
   return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+"&units=metric"+"&appid="+'be0ea45dda9de40737dbad5fe32e3f99');
  }
}
