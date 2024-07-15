import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainMenuComponent, AlertMessageComponent, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  errorMessage = '';
  @ViewChild(MainMenuComponent) mainMenuComponent!: MainMenuComponent;

  ngAfterContentChecked(): void {
    if (typeof window !== 'undefined' && this.mainMenuComponent !== undefined) {
      this.errorMessage = this.mainMenuComponent.errorMessage
    }
  }

}
