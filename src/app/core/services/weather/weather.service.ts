import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentWeather } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { weather } from '../../../interfaces/weather';
import { city } from '../../../interfaces/city';

const city = 'buenos aires';
const citySearch = 'bue';
const timetable = 'current';

function createDash(city:string) {
  return  city = city.replace(/\s/g, '-');
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }
  getWeatherToday(): Observable<weather> {
    return this.http.get<weather>(`${environmentWeather.urlBase}point?place_id=${createDash(city)}&sections=${timetable}&timezone=UTC&language=en&units=metric&key=${environmentWeather.key}`);
  }

  getCity(): Observable<city> {
    return this.http.get<city>(`${environmentWeather.urlBase}find_places_prefix?text=${createDash(citySearch)}&key=${environmentWeather.key}`);
  }
}



