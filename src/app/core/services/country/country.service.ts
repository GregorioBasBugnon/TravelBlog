import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environmentCountries } from '../../../../environments/environment.development';
import { country } from '../../../interfaces/country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountrie(countryId: string): Observable<country> {
    return this.http.get<country>(`${environmentCountries.urlBase}name/${countryId}?fullText=true`);
  }
  getCountries(): Observable<country[]> {
    return this.http.get<country[]>(`${environmentCountries.urlBase}all?fields=translations`);
  }

  getCountrieEspecify(countryId: string): Observable<country> {
    return this.http.get<country>(`${environmentCountries.urlBase}name/${countryId}?fields=
    name,tld,capital,currencies,region,subregion,languages,translations,timezones,continents,flags,coatOfArms`);
  }
  getCountriesEspecify(): Observable<country[]> {
    return this.http.get<country[]>(`${environmentCountries.urlBase}all?fields=
    name,capital,currencies,region,languages,translations,timezones,continents,flags,coatOfArms`);
  }
}
