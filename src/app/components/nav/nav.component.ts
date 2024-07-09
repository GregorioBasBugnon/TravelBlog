import { Component, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';

interface NavItem {
  id: number;
  icon: string;
  navText: string;
  active: boolean;
}
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  private mainMenu!: HTMLElement;
  private arrowShrink!: HTMLElement;
  private bodyMain!: HTMLElement;
  public navItemOut!: boolean;

  navList = [
    { id: 1, icon: "bxs-home", navText: "Menú", active: true },
    { id: 2, icon: "bxs-contact", navText: "Perfil", active: false },
    { id: 3, icon: "bxs-calendar", navText: "Agenda", active: false },
    { id: 4, icon: "bx-run", navText: "Actividades", active: false },
    { id: 5, icon: "bx-slider", navText: "Ajustes", active: false }
  ];

  ngOnInit(): void {
    this.initializeHeaderElements();
  }

  private initializeHeaderElements(): void {
    if (typeof window !== 'undefined') {
      this.mainMenu = document.querySelector(".main-menu") as HTMLElement;
      this.arrowShrink = document.querySelector(".arrow-shrink>i") as HTMLElement;
      this.bodyMain = document.querySelector(".body-main") as HTMLElement;
    }
  }

  public navSelected(selectedNavItem: NavItem): void {
    this.navList.forEach(navItem => {
      navItem.active = false;
    });
    selectedNavItem.active = true;
  }

  dropOnNav() {
    this.mainMenu.classList.toggle("drop-nav");
    this.bodyMain.classList.toggle("hide-nav");
    if (this.arrowShrink.classList.value == "bx bx-left-top-arrow-circle") {
      this.arrowShrink.classList.remove("bx-left-top-arrow-circle");
      this.arrowShrink.classList.add("bx-right-down-arrow-circle");
      this.navItemOut = true;
    } else if (this.arrowShrink.classList.value == "bx bx-right-down-arrow-circle") {
      this.arrowShrink.classList.remove("bx-right-down-arrow-circle");
      this.arrowShrink.classList.add("bx-left-top-arrow-circle");
      this.navItemOut = false;
    }
  }
}
