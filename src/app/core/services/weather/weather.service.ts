import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentWeather } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { weather } from '../../../interfaces/weather';
import { city } from '../../../interfaces/city';


function createDash(city: string) {
  city = city.replace(/(?<=\b\w+)\s(?=\w+\b)/g, '-');
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }
  getWeatherToday(cityName: string, timetable: string): Observable<weather> {
    return this.http.get<any>(`${environmentWeather.urlBase}point?place_id=${createDash(cityName)}&sections=${timetable}&timezone=UTC&language=en&units=metric&key=${environmentWeather.key}`);
  }

  getCityWanted(citySearch: string): Observable<city[]> {
    return this.http.get<city[]>(`${environmentWeather.urlBase}find_places_prefix?text=${createDash(citySearch)}&key=${environmentWeather.key}`);
  }
}



