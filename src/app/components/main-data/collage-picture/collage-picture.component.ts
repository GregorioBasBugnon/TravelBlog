import { Component, Input } from '@angular/core';
import { photo } from '../../../interfaces/photo';

@Component({
  selector: 'app-collage-picture',
  standalone: true,
  imports: [],
  templateUrl: './collage-picture.component.html',
  styleUrl: './collage-picture.component.scss'
})
export class CollagePictureComponent {
  @Input() photo!: photo | undefined;

}
