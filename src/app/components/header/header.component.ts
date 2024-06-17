import { Component, Input } from '@angular/core';
import { HeaderChildComponent } from "./header-child/header-child.component";
import { Observable } from 'rxjs';
import { photo } from '../../interfaces/photo';
import { AsyncPipe } from '@angular/common';
import { peopleList } from '../../interfaces/person';
import { LoadingViewComponent } from '../loading-view/loading-view.component';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [AsyncPipe, HeaderChildComponent, LoadingViewComponent]
})
export class HeaderComponent extends LoadingViewComponent{
  @Input() photoTitleResult!: Observable<photo>;
  @Input() personProfileResult!: Observable<peopleList>
  personVoid: peopleList | undefined;

  ngOnInit(): void {
    this.loadView(this.photoTitleResult);
  }
}

