import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  navList = [
    { id: 1, icon: "house", navText: "Menú", active: true },
    { id: 2, icon: "user", navText: "Perfil", active: false },
    { id: 3, icon: "calendar-check", navText: "Agenda", active: false },
    { id: 4, icon: "person-running", navText: "Actividades", active: false },
    { id: 5, icon: "sliders", navText: "Ajustes", active: false }
  ];

  public navSelected(selectedNavItem: NavItem): void {
    this.navList.forEach(navItem => {
      navItem.active = false;
    });
    selectedNavItem.active = true;
  }

}
