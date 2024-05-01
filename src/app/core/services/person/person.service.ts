import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentPerson } from '../../../../environments/environment.development';
import { peopleList } from '../../../interfaces/person';
import { Observable } from 'rxjs';


const results = '3';

const httpHeader = {
  headers: new HttpHeaders({
    Authorization: `${environmentPerson.Authorization}`
  })
}
@Injectable({
  providedIn: 'root'
})

export class PersonService {
  getCountriesEspecify() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getPerson(maxContact: number): Observable<peopleList> {
    return this.http.get<peopleList>(`${environmentPerson.urlBase}?results=${maxContact}`, httpHeader);
  };

  getPeopleList(page: number, maxContact: number): Observable<peopleList> {
    return this.http.get<peopleList>(`${environmentPerson.urlBase}?page=${page}&results=${maxContact}`, httpHeader);
  };

  getPeopleSpecify(page: number, maxContact: number, gender: string, seed: string): Observable<peopleList> {
    return this.http.get<peopleList>(`${environmentPerson.urlBase}?page=${page}&results=${maxContact}
    &gender=${gender}&seed=${seed}`, httpHeader);
  };
}
