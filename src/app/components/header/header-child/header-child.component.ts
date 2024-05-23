import { Component, Input } from '@angular/core';
import { peopleList } from '../../../interfaces/person';

@Component({
  selector: 'app-header-child',
  standalone: true,
  imports: [],
  templateUrl: './header-child.component.html',
  styleUrl: './header-child.component.scss'
})
export class HeaderChildComponent {
  @Input() user!: peopleList | undefined;

  ngOnInit(): void {
    this.fixeHeader();
  }

  switchTheme() {
    const moonIcon = document.querySelector(".moon") as HTMLElement;
    const sunIcon = document.querySelector(".sun") as HTMLElement;
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
      localStorage.setItem("theme", "dark");
    } else {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
      localStorage.setItem("theme", "light");
    }
  }
  private fixeHeader(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 300) {
          const headerChild = document.querySelector('.header-child') as HTMLElement;
          const title = document.querySelector('.header-child .title h1') as HTMLElement;
          if (headerChild && title) {
            headerChild.classList.add('fixed-header');
            title.classList.add('visible-title');
          }
        } else {
          const headerChild = document.querySelector('.header-child') as HTMLElement;
          const title = document.querySelector('.header-child .title h1') as HTMLElement;
          if (headerChild && title) {
            headerChild.classList.remove('fixed-header');
            title.classList.remove('visible-title');
          }
        }
      });
    }
  }
}




