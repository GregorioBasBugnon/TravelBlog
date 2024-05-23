import { Component, Input } from '@angular/core';
import { weather } from '../../../interfaces/weather';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-city-weather',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './city-weather.component.html',
  styleUrl: './city-weather.component.scss'
})
export class CityWeatherComponent {
  @Input() weather!: weather | undefined;;
  @Input() cityName!: string;
  weatherSpanish = "";
  imgWeather = "";

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
}
