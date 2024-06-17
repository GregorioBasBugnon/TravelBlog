import { Component, Input, OnInit } from '@angular/core';
import { photo } from '../../../interfaces/photo';
import { LoadingViewComponent } from '../../loading-view/loading-view.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-collage-picture',
  standalone: true,
  imports: [LoadingViewComponent],
  templateUrl: './collage-picture.component.html',
  styleUrl: './collage-picture.component.scss'
})
export class CollagePictureComponent extends LoadingViewComponent implements OnInit {

  @Input() photo!: photo | undefined;

  ngOnInit(): void {
    this.loadView(this.photo);
  }
}
