import { Component, Input } from '@angular/core';
import { peopleList } from '../../../interfaces/person';
import { LoadingViewComponent } from '../../loading-view/loading-view.component';
import { country } from '../../../interfaces/country';

@Component({
  selector: 'app-header-child',
  standalone: true,
  templateUrl: './header-child.component.html',
  styleUrl: './header-child.component.scss',
  imports: [LoadingViewComponent]
})
export class HeaderChildComponent extends LoadingViewComponent {
  @Input() user!: peopleList | undefined;
  @Input() countrySearch!: country[] | undefined;
  private moonIcon!: HTMLElement;
  private sunIcon!: HTMLElement;
  private headerChild!: HTMLElement;
  private search!: HTMLInputElement;
  private countriesSelection!: NodeListOf<HTMLInputElement>;
  private containerCountries!: HTMLElement;
  private title!: HTMLElement;
  private alert!: HTMLElement;
  public voidSearch: boolean = false;

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
      this.containerCountries = document.querySelector(".container-countries") as HTMLElement;
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
    this.hiddenOptionCountries();
  }

  changeSearchInput() {
    this.headerChild.classList.add("search-complete");
  }

  hideBackArrow() {
    this.headerChild.classList.remove("search-complete");
  }

  private fixeHeader(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 250) {
          if (this.headerChild && this.title) {
            this.headerChild.classList.add('fixed-header');
            this.headerChild.classList.remove('scroll-out');
            this.title.classList.add('visible-title');
            if (this.alert != null) {
              this.alert.classList.add('scroll-alert')
            }
          }
        } else {
          if (this.headerChild && this.title) {
            this.headerChild.classList.remove('fixed-header');
            this.headerChild.classList.add('scroll-out');
            this.title.classList.remove('visible-title');
            if (this.alert != null) {
              this.alert.classList.remove('scroll-alert')
            }
          }
        }
      });
    }
  }

  public displayOptionCountries() {
    this.containerCountries.classList.remove('hidden-element');
  }
  public hiddenOptionCountries() {
    this.containerCountries.classList.add('hidden-element');
  }
  public toggleOptionCountries() {
    this.containerCountries.classList.toggle('hidden-element');
  }


  public searchCountryByName() {
    this.countriesSelection = document.querySelectorAll(".country-search") as NodeListOf<HTMLInputElement>;
    this.search = document.querySelector("#search-selection > .search") as HTMLInputElement;

    let searchValue = this.search.value.toLowerCase();

    if (searchValue != "") {
      this.countriesSelection.forEach((country) => {
        let itemCountry = country.querySelector("span")?.textContent?.toLowerCase();

        if (itemCountry && itemCountry.includes(searchValue)) {
          country.classList.remove("hidden-element")
        } else {
          country.classList.add("hidden-element")
        }
      });
      this.resizeContainerCountries(Array.from(this.countriesSelection))
    }
  }

  public resizeContainerCountries(countriesSelection: any) {
    let countriesSearching = countriesSelection.filter((selection: { classList: { contains: (arg0: string) => any; }; }) =>
      !selection.classList.contains('hidden-element'));

    let totalHeightOption = 0;
    countriesSearching.forEach((heightCountriesSelection: any) => {
      totalHeightOption += heightCountriesSelection.offsetHeight;
    });

    this.containerCountries.style.height = totalHeightOption + 'px';

    if (countriesSearching == 0) {
      this.voidSearch = true;
    } else {
      this.voidSearch = false;
    }
  }

  public searchCountrySelection(event: any) {
    this.search = document.querySelector("#search-selection > .search") as HTMLInputElement;

    this.search.value = event.target.textContent;
    this.hiddenOptionCountries();
  }



}




