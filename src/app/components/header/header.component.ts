import { Component, Input } from '@angular/core';
import { HeaderChildComponent } from "./header-child/header-child.component";
import { Observable } from 'rxjs';
import { photo, photoList } from '../../interfaces/photo';
import { AsyncPipe } from '@angular/common';
import { peopleList, person } from '../../interfaces/person';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [AsyncPipe, HeaderChildComponent]
})
export class HeaderComponent {
  @Input() photoTitleResult!: Observable<photo>;
  @Input() personProfileResult!: Observable<peopleList>
  personVoid: peopleList | undefined;
}

