import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { countries } from '../../../interfaces/countries';
import { environmentCountries } from '../../../../environments/environment.development';

const countrieId = 'new zealand';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { countrieId }

  getCountrie(): Observable<countries> {
    return this.http.get<countries>(`${environmentCountries.urlBase}name/${countrieId}?fullText=true`);
  }
  getCountries(): Observable<countries> {
    return this.http.get<countries>(`${environmentCountries.urlBase}all?fields=translations`);
  }

  getCountrieEspecify(): Observable<countries> {
    return this.http.get<countries>(`${environmentCountries.urlBase}name/${countrieId}?fields=
    name,tld,capital,currencies, altSpellings,region,subregion,languages,translations,timezones,continents,flags,coatOfArms`);
  }
  getCountriesEspecify(): Observable<countries> {
    return this.http.get<countries>(`${environmentCountries.urlBase}all?fields=
    name,capital,currencies,region,languages,translations,timezones,continents,flags,coatOfArms`);
  }
}
