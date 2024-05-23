import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopularCountryComponent } from './popular-country/popular-country.component';
import { TravelReviewComponent } from './travel-review/travel-review.component';
import { CollagePictureComponent } from "./collage-picture/collage-picture.component";
import { peopleList, person } from '../../interfaces/person';
import { photo, photoList } from '../../interfaces/photo';
import { country } from '../../interfaces/country';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-data',
  standalone: true,
  templateUrl: './main-data.component.html',
  styleUrl: './main-data.component.scss',
  imports: [CommonModule, AsyncPipe, PopularCountryComponent, TravelReviewComponent, CollagePictureComponent]
})
export class MainDataComponent {
  @Input() personComentsResult!: Observable<peopleList>;
  @Input() photosResult!: Observable<photoList>;
  @Input() countryPopularResult!: Observable<country[]>;
  @Input() photoByCountrieResult!: Observable<photoList>;
  countryVoid: country | undefined;
  photoVoid: photo | undefined;
  personVoid: person | undefined;
  sizeCountry = [0, 1, 2, 3, 4];
  sizePhoto = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

}


