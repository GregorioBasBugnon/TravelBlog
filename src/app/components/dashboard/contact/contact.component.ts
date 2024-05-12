import { Component, Input } from '@angular/core';
import { person } from '../../../interfaces/person';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() contact!: person;
}
