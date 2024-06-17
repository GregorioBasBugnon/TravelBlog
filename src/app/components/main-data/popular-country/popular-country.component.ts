import { Component, Input } from '@angular/core';
import { country } from '../../../interfaces/country';
import { KeyValuePipe } from '@angular/common';
import { photo } from '../../../interfaces/photo';
import { LoadingViewComponent } from '../../loading-view/loading-view.component';

@Component({
  selector: 'app-popular-country',
  standalone: true,
  imports: [LoadingViewComponent],
  templateUrl: './popular-country.component.html',
  styleUrl: './popular-country.component.scss',
  providers: [KeyValuePipe]
})
export class PopularCountryComponent extends LoadingViewComponent {
  @Input() countryItem!: country | undefined;
  @Input() photoItem!: photo | undefined;

  ngOnInit(): void {
    this.loadView(this.countryItem);
  }
}
