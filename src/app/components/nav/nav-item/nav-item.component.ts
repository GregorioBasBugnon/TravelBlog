import { Component, ElementRef, AfterViewInit, Input } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  @Input() navIcon!: string;
  @Input() navText!: string;
  @Input() navState!: boolean;
}
