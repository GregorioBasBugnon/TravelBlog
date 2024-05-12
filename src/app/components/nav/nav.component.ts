import { Component } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  navList = [
    {id: 1, icon:"house", navText: "Menu Principal", active: true},
    {id: 2, icon:"user", navText: "Perfil", active: false},
    {id: 3, icon:"calendar-check", navText: "Agenda", active: false},
    {id: 4, icon:"person-running", navText: "Actividades", active: false},
    {id: 5, icon:"sliders", navText: "Configuración", active: false}
  ];
}
