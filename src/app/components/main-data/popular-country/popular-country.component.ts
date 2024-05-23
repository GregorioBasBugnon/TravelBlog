import { Component, Input } from '@angular/core';
import { country } from '../../../interfaces/country';
import { KeyValuePipe } from '@angular/common';
import { photo } from '../../../interfaces/photo';

@Component({
  selector: 'app-popular-country',
  standalone: true,
  imports: [],
  templateUrl: './popular-country.component.html',
  styleUrl: './popular-country.component.scss',
  providers: [KeyValuePipe]
})
export class PopularCountryComponent{
  @Input() countryItem!: country | undefined;
  @Input() photoItem!: photo | undefined;

}
