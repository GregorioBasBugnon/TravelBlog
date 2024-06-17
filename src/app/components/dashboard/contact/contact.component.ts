import { Component, Input } from '@angular/core';
import { person } from '../../../interfaces/person';
import { LoadingViewComponent } from "../../loading-view/loading-view.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [LoadingViewComponent]
})
export class ContactComponent extends LoadingViewComponent {
  @Input() contact!: person | undefined;
  ngOnInit(): void {
    this.loadView(this.contact);
  }
}
