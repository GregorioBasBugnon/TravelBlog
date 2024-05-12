import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentMedia } from '../../../../environments/environment.development';
import { photo, photoList } from '../../../interfaces/photo';
import { video } from '../../../interfaces/video';

const page = '1';
const perPage = '1';
const orientation = 'landscape';
const size = 'medium';

const httpHeaderMedia = {
  headers: new HttpHeaders({
    Authorization: `${environmentMedia.Authorization}`
  })
}
@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getPhoto(page: number, perPage: number): Observable<photoList> {
    return this.http.get<photoList>(`${environmentMedia.urlBasePhoto}curated/?page=${page}&per_page=${perPage}`, httpHeaderMedia);
  }

  getPhotos(): Observable<photoList> {
    return this.http.get<photoList>(`${environmentMedia.urlBasePhoto}curated/?page=${page}`, httpHeaderMedia);
  }

  getPhotosEspec(orientation: string, size: string, page: number, perPage: number): Observable<photoList> {
    return this.http.get<photoList>(`${environmentMedia.urlBasePhoto}curated/?orientation=
    ${orientation}&size=${size}&page=${page}&per_page=${perPage}`, httpHeaderMedia);
  }

  getPhotosById(id: number): Observable<photo> {
    return this.http.get<photo>(`${environmentMedia.urlBasePhoto}photos/${id}`, httpHeaderMedia);
  }

  getVideo(): Observable<video> {
    return this.http.get<video>(`${environmentMedia.urlBaseVideo}popular?page=${page}&per_page=${perPage}`, httpHeaderMedia);
  }
}
