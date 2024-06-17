import { Component, Input } from '@angular/core';
import { peopleList } from '../../../interfaces/person';
import { LoadingViewComponent } from '../../loading-view/loading-view.component';

@Component({
    selector: 'app-header-child',
    standalone: true,
    templateUrl: './header-child.component.html',
    styleUrl: './header-child.component.scss',
    imports: [LoadingViewComponent]
})
export class HeaderChildComponent extends LoadingViewComponent {
  @Input() user!: peopleList | undefined;
  private moonIcon!: HTMLElement;
  private sunIcon!: HTMLElement;
  private headerChild!: HTMLElement;
  private title!: HTMLElement;
  private alert!: HTMLElement;

  ngOnInit(): void {
    this.fixeHeader();
    this.initializeHeaderElements();
    this.loadView(this.user);
  }


  private initializeHeaderElements(): void {
    if (typeof window !== 'undefined') {
      this.moonIcon = document.querySelector(".moon") as HTMLElement;
      this.sunIcon = document.querySelector(".sun") as HTMLElement;
      this.headerChild = document.querySelector('.header-child') as HTMLElement;
      this.title = document.querySelector('.header-child .title h1') as HTMLElement;
      this.alert = document.querySelector(".alert") as HTMLElement;
    }
  }

  switchTheme() {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
      this.sunIcon.classList.remove("hidden");
      this.moonIcon.classList.add("hidden");
      localStorage.setItem("theme", "dark");
    } else {
      this.sunIcon.classList.add("hidden");
      this.moonIcon.classList.remove("hidden");
      localStorage.setItem("theme", "light");
    }
  }

  changeSearchComplete() {
    this.headerChild.classList.toggle("search-complete");
  }

  changeSearchInput() {
    this.headerChild.classList.add("search-complete");
  }

  private fixeHeader(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 250) {
          if (this.headerChild && this.title) {
            this.headerChild.classList.add('fixed-header');
            this.headerChild.classList.remove('scroll-out');
            this.title.classList.add('visible-title');
            this.alert.classList.add('scroll-alert')
          }
        } else {
          if (this.headerChild && this.title) {
            this.headerChild.classList.remove('fixed-header');
            this.headerChild.classList.add('scroll-out');
            this.title.classList.remove('visible-title');
            this.alert.classList.remove('scroll-alert')
          }
        }
      });
    }
  }
}




