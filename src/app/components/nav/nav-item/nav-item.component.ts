import { Component, ElementRef, AfterViewInit, Input } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent implements AfterViewInit {

  constructor( private el: ElementRef) { }

  @Input() navIcon!: string;
  @Input() navText!: string;
  @Input() navState!: boolean;

  ngAfterViewInit(): void {
    let navItems = this.el.nativeElement.querySelectorAll('.nav-item') as NodeListOf<HTMLElement>;

    navItems.forEach((navItem, i) => {
      navItem.addEventListener('click', () => {
        navItems.forEach((item, j) => {
          item.classList.remove('active');
        });
        navItem.classList.add('active');
      });
    });
  }
}
