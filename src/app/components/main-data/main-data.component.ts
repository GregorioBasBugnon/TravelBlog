import { Component } from '@angular/core';
import { PopularCountriesComponent } from './popular-countries/popular-countries.component';
import { TravelReviewsComponent } from './travel-reviews/travel-reviews.component';
import { CollagePictureComponent } from "./collage-picture/collage-picture.component";

@Component({
    selector: 'app-main-data',
    standalone: true,
    templateUrl: './main-data.component.html',
    styleUrl: './main-data.component.scss',
    imports: [PopularCountriesComponent, TravelReviewsComponent, CollagePictureComponent]
})
export class MainDataComponent {

}
