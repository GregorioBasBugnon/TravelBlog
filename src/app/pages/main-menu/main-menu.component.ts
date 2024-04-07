import { Component } from '@angular/core';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MainDataComponent } from '../../components/main-data/main-data.component';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [DashboardComponent, FooterComponent, HeaderComponent, MainDataComponent, NavComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {

}
