import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { catchError, EMPTY, forkJoin, Observable } from 'rxjs';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MainDataComponent } from '../../components/main-data/main-data.component';
import { NavComponent } from '../../components/nav/nav.component';
import { peopleList } from '../../interfaces/person';
import { photo, photoList } from '../../interfaces/photo';

import { PersonService } from '../../core/services/person/person.service';
import { MediaService } from '../../core/services/media/media.service';
import { CountryService } from '../../core/services/country/country.service';
import { WeatherService } from '../../core/services/weather/weather.service';
import { country } from '../../interfaces/country';
import { weather } from '../../interfaces/weather';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [AsyncPipe, DashboardComponent, HeaderComponent, MainDataComponent, NavComponent, FooterComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent implements OnInit {
  public city!: string;
  public personComentsResult$!: Observable<peopleList>
  public photosResult$!: Observable<photoList>
  public countryPopularResult$!: Observable<country[]>;
  public photoByCountrieResult$!: Observable<photoList>
  public photoTitleResult$!: Observable<photo>
  public personContactResult$!: Observable<peopleList>
  public personProfileResult$!: Observable<peopleList>
  public weatherTodayResult$!: Observable<weather>
  @Output() errorMessage!: string;

  constructor(private personService: PersonService, private mediaService: MediaService,
    private countryService: CountryService, private weatherService: WeatherService) { }


  ngOnInit(): void {
    this.photosResult$ = this.mediaService.getPhotosEspec("square", "medium", 9, 10).pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    })),

      this.personComentsResult$ = this.personService.getPerson(3).pipe(catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })),

      this.countryPopularResult$ = this.countryService.getCountriesEspecify().pipe(catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })),

      this.photoByCountrieResult$ = this.mediaService.getPhotosEspec("portrait", "small", 4, 5).pipe(catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })),

      // background red theme, this.photoTitleResult$ = this.mediaService.getPhotosById(22717472).pipe(catchError((error: string) => {
      // background blue theme, this.photoTitleResult$ = this.mediaService.getPhotosById(22702771).pipe(catchError((error: string) => {
      this.photoTitleResult$ = this.mediaService.getPhotosById(21967469).pipe(catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })),

      this.personContactResult$ = this.personService.getPeopleList(4, 8).pipe(catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })),

      this.personProfileResult$ = this.personService.getPeopleSpecify(3, 1, "female", "rkn").pipe(catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })),

      this.city = "Santa Cruz de Tenerife";
    this.weatherTodayResult$ = this.weatherService.getWeatherToday(this.city, "current").pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }))
  }
}







