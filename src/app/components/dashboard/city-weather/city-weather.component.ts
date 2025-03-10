import { weather } from '../../../interfaces/weather';
import { LoadingViewComponent } from '../../loading-view/loading-view.component';
import { city } from '../../../interfaces/city';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherService } from '../../../core/services/weather/weather.service';

@Component({
  selector: 'app-city-weather',
  standalone: true,
  templateUrl: './city-weather.component.html',
  styleUrl: './city-weather.component.scss',
  imports: [LoadingViewComponent]
})
export class CityWeatherComponent extends LoadingViewComponent implements OnInit {

  @Input() weather!: weather | undefined;
  @Input() cityName!: string;
  // @Output() cityWritted = new EventEmitter<string>();
  private searchWeatherCity!: HTMLInputElement;
  private containerCities!: HTMLElement;

  public voidSearch: boolean = false;
  public weatherSpanish = "";
  public imgWeather = "";
  public cityWanted: city[] | undefined;

  constructor(private weatherService: WeatherService) {
    super();
  }

  ngOnInit(): void {
    this.initializeHeaderElements();
    this.loadView(this.cityName);
  }

  private initializeHeaderElements(): void {
    if (typeof window !== 'undefined') {
      this.containerCities = document.querySelector(".container-cities-name") as HTMLElement;
      this.searchWeatherCity = document.querySelector("#search-city-selection > .search") as HTMLInputElement;
    }
  }

  ngAfterViewInit(): void {
    Promise.resolve().then(() => {
      if (this.weather != undefined) {

        switch (this.weather.current.summary) {
          case 'Not available':
            this.weatherSpanish = 'No disponible';
            this.imgWeather = 'error';
            break;
          case 'Sunny':
            this.weatherSpanish = 'Soleado';
            this.imgWeather = 'sunny';
            break;
          case 'Mostly sunny':
            this.weatherSpanish = 'Mayormente soleado';
            this.imgWeather = 'mostly-cloudy';
            break;
          case 'Partly sunny':
            this.weatherSpanish = 'Parcialmente soleado';
            this.imgWeather = 'partly-sunny';
            break;
          case 'Partly clear':
            this.weatherSpanish = 'Parcialmente despejado';
            this.imgWeather = 'partly-sunny';
            break;
          case 'Mostly cloudy':
            this.weatherSpanish = 'Mayormente nublado';
            this.imgWeather = 'overcasted';
            break;
          case 'Cloudy':
            this.weatherSpanish = 'Nublado';
            this.imgWeather = 'overcasted';
            break;
          case 'Overcast':
            this.weatherSpanish = 'Nublado';
            this.imgWeather = 'overcasted';
            break;
          case 'Overcast with low clouds':
            this.weatherSpanish = 'Nublado con nubes bajas';
            this.imgWeather = 'mostly-cloudy';
            break;
          case 'Fog':
            this.weatherSpanish = 'Niebla';
            this.imgWeather = 'fog';
            break;
          case 'Light rain':
            this.weatherSpanish = 'Lluvia ligera';
            this.imgWeather = 'rain';
            break;
          case 'Rain':
            this.weatherSpanish = 'Lluvia';
            this.imgWeather = 'lght-rain';
            break;
          case 'Possible rain':
            this.weatherSpanish = 'Posible lluvia';
            this.imgWeather = 'rain';
            break;
          case 'Rain shower':
            this.weatherSpanish = 'Aguacero';
            this.imgWeather = 'rain-shower';
            break;
          case 'Thunderstorm':
            this.weatherSpanish = 'Tormenta eléctrica';
            this.imgWeather = 'thunderstorm';
            break;
          case 'Local thunderstorms':
            this.weatherSpanish = 'Tormentas eléctricas locales';
            this.imgWeather = 'thunderstorm';
            break;
          case 'Light snow':
            this.weatherSpanish = 'Nieve ligera';
            this.imgWeather = 'snow';
            break;
          case 'Snow':
            this.weatherSpanish = 'Nieve';
            this.imgWeather = 'heavy-snow';
            break;
          case 'Possible snow':
            this.weatherSpanish = 'Posible nieve';
            this.imgWeather = 'snow';
            break;
          case 'Rain and snow':
            this.weatherSpanish = 'Lluvia y nieve';
            this.imgWeather = 'snow';
            break;
          case 'Possible rain and snow':
            this.weatherSpanish = 'Posible lluvia y nieve';
            this.imgWeather = 'rain-and-snow';
            break;
          case 'Freezing rain':
            this.weatherSpanish = 'Lluvia helada';
            this.imgWeather = 'rain-and-snow';
            break;
          case 'Hail':
            this.weatherSpanish = 'Granizo';
            this.imgWeather = 'freezing-rain';
            break;
          case 'Clear':
            this.weatherSpanish = 'Despejado (noche)';
            this.imgWeather = 'moon';
            break;
          case 'Mostly clear':
            this.weatherSpanish = 'Mayormente despejado (noche)';
            this.imgWeather = 'moon';
            break;
          case 'Snow shower':
            this.weatherSpanish = 'Chubasco de nieve (noche)';
            this.imgWeather = 'snow';
            break;
          case 'Possible freezing rain':
            this.weatherSpanish = 'Posible lluvia helada (noche)';
            this.imgWeather = 'freezing-rain';
            break;
          default:
            this.weatherSpanish = 'No se encontró el timepo';
            this.imgWeather = 'error';
            break;
        }
      }

    });
  }

  public displayOptionCountries() {
    this.initializeHeaderElements();
    if (this.searchWeatherCity && this.searchWeatherCity.value != "") {
      this.containerCities.classList.remove('hidden-searching');
    }
  }
  public hiddenOptionCountries() {
    this.initializeHeaderElements();
    this.containerCities.classList.add('hidden-searching');
  }
  public toggleOptionCountries() {
    this.containerCities.classList.toggle('hidden-searching');
  }


  // public searchCountryByName() {
  //   this.countriesSelection = document.querySelectorAll(".country-city-search") as NodeListOf<HTMLInputElement>;
  //   this.initializeHeaderElements();

  //   let searchValue = this.searchWeatherCity.value.toLowerCase();

  //   if (searchValue != "") {
  //     this.countriesSelection.forEach((country) => {
  //       let itemCountry = country.querySelector("span")?.textContent?.toLowerCase();

  //       if (itemCountry && itemCountry.includes(searchValue)) {
  //         country.classList.remove("hidden-searching")
  //       } else {
  //         country.classList.add("hidden-searching")
  //       }
  //     });
  //     this.resizeContainerCountries(Array.from(this.countriesSelection))
  //   }
  // }

  public resizeContainerCountries(countriesSelection: any) {
    // let countriesSearching = countriesSelection.filter((selection: { classList: { contains: (arg0: string) => any; }; }) =>
    //   !selection.classList.contains('hidden-searching'));

    // let totalHeightOption = 0;
    // countriesSearching.forEach((heightCountriesSelection: any) => {
    //   totalHeightOption += heightCountriesSelection.offsetHeight;
    // });

    // this.containerCities.style.height = totalHeightOption + 'px';

    if (countriesSelection == 0) {
      this.voidSearch = true;
      const childrenArray = Array.from(this.containerCities.children);
      childrenArray[childrenArray.length - 1].classList.remove('hidden-searching');

    } else {
      this.voidSearch = false;
    }
  }

  public searchCountrySelection(event: any) {

    this.searchWeatherCity.value = event.currentTarget.textContent;
    this.hiddenOptionCountries();
  }

  public cityToSearch(event: Event) {
    this.initializeHeaderElements();
    this.displayOptionCountries();
    try {

      this.weatherService.getCityWanted(this.getCityName(event)).subscribe({
        next: (response) => {
          this.cityWanted = response;
        },
        complete: () => {
          // this.searchCountryByName();
          this.resizeContainerCountries(this.cityWanted)
        }
      });

    } catch (error) {
      throw new Error(`Error processing city search: ${error}`);
    }

  }
  public async weatherCityToSearch(): Promise<void> {
    if (this.searchWeatherCity.value && this.searchWeatherCity.value != "") {
      try {
        this.weatherService.getWeatherToday(this.searchWeatherCity.value, "current").subscribe({
          next: (response) => {
            this.weather = response;
            console.log(this.weather);

          },
          error: (err) => {
            this.weather == undefined;
          },
          complete: () => {
            this.searchWeatherCity.textContent = "";
          }
        });
      } catch (error) {
        throw new Error(`Error processing weather of city search: ${error}`);
      }
    }
  }

  public getCityName(event: Event) {
    let citySearch = event.target as HTMLInputElement;
    let cityName = citySearch.value;

    return cityName;
  }
}
