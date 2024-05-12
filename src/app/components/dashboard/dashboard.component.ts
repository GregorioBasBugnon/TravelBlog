import { Component, Input } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { CityWeatherComponent } from "./city-weather/city-weather.component";
import { Observable } from 'rxjs';
import { peopleList } from '../../interfaces/person';
import { AsyncPipe } from '@angular/common';
import { weather } from '../../interfaces/weather';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [AsyncPipe, ContactComponent, CityWeatherComponent]
})
export class DashboardComponent {
  @Input() personContactResult!: Observable<peopleList>;
  @Input() weatherTodayResult!: Observable<weather>;
  @Input() cityName!: string;
  weatherVoid: weather | undefined;
}
