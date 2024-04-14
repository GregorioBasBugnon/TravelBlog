import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentPeople } from '../../../../environments/environment.development';
import { people } from '../../../interfaces/people';
import { Observable } from 'rxjs';

const httpHeader = {
  headers: new HttpHeaders(
    `${environmentPeople.Authorization}`
  )
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<people> {
    return this.http.get<people>(`${environmentPeople.urlBase}`, httpHeader);
  }
}
