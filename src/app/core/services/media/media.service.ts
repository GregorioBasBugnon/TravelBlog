import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentMedia } from '../../../../environments/environment.development';
import { photo } from '../../../interfaces/photo';
import { video } from '../../../interfaces/video';

const page = '1';
const perPage = '1';
const orientation = 'landscape';
const size = 'medium';

const httpHeader = {
  headers: new HttpHeaders(
    `${environmentMedia.Authorization}`
  )
}
@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getPhoto(): Observable<photo> {
    return this.http.get<photo>(`${environmentMedia.urlBasePhoto}?page=${page}&per_page=${perPage}`, httpHeader);
  }
  getPhotos(): Observable<photo> {
    return this.http.get<photo>(`${environmentMedia.urlBasePhoto}?page=${page}`, httpHeader);
  }

  getPhotoEspec(): Observable<photo> {
    return this.http.get<photo>(`${environmentMedia.urlBasePhoto}search/?orientation=
    ${orientation}&size=${size}&page=${page}&per_page=${perPage}`, httpHeader);
  }

  getVideo(): Observable<video> {
    return this.http.get<video>(`${environmentMedia.urlBaseVideo}popular?page=${page}&per_page=${perPage}`, httpHeader);
  }
}
