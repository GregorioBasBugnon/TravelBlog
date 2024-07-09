import { Component, ElementRef, AfterViewInit, Input, ViewChild, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  @Input() navIcon!: string;
  @Input() navText!: string;
  @Input() navState!: boolean;
  @Input() navItemOut!: boolean;
  private navMenuItem!: NodeListOf<HTMLElement>;

  ngAfterViewChecked(): void {
    this.initializeHeaderElements();
  }

  private initializeHeaderElements(): void {
    if (typeof window !== 'undefined') {
      this.navMenuItem = document.querySelectorAll('.nav-item') as NodeListOf<HTMLElement>;
    }
  }
  ngOnChanges(changes: ChangeDetectionStrategy): void {
    if (typeof window !== 'undefined' && this.navItemOut != undefined && this.navMenuItem != undefined) {
      this.navMenuItem.forEach((e, index) => {
        if (e != undefined) {
          if (this.navItemOut) {
            e.classList.add("nav-item-out");
          } else {
            e.classList.remove("nav-item-out");
          }
        }
      });
    }
  }
}
