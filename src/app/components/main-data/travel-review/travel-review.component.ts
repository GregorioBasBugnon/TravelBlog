import { Component, Input } from '@angular/core';
import { person } from '../../../interfaces/person';

let countrieGived: number[] = [];

@Component({
  selector: 'app-travel-review',
  standalone: true,
  imports: [],
  templateUrl: './travel-review.component.html',
  styleUrl: './travel-review.component.scss'
})
export class TravelReviewComponent {
  @Input() contact!: person;
  descriptionOption = [
    { id: 1, country: "Italia", timeWriter: "Hace 1 hora", appreciation: 3.5, description: "Italia es un país lleno de historia, cultura y belleza.Desde las antiguas ruinas de Roma hasta los canales de Venecia, ofrece una experiencia única en cada rincón.Su cocina es renombrada mundialmente, con delicias como pizzas, pastas y gelatos.Las vistas panorámicas de la costa amalfitana y los Alpes son impresionantes.Cada región tiene su propia personalidad y atractivos, desde la Toscana hasta Sicilia.En resumen, Italia es un destino que cautiva con su encanto, gastronomía y paisajes inolvidables." },
    { id: 2, country: "Japón", timeWriter: "Hace unos pocos minutos", appreciation: 5.0, description: "¡Qué experiencia tan asombrosa tuve en mi viaje a Japón! Este país tiene una forma única de combinar la tradición con la modernidad, creando una atmósfera verdaderamente cautivadora. Desde las bulliciosas calles de Tokio hasta los serenos templos de Kyoto, cada momento fue una aventura inolvidable." },
    { id: 2, country: "Canadá", timeWriter: "Hace 4 horas", appreciation: 4.5, description: "Desde la belleza natural de las Montañas Rocosas hasta la modernidad de ciudades como Toronto y Vancouver, cada momento fue una aventura emocionante llena de descubrimientos. Lo que más me impresionó fue la impresionante diversidad natural de Canadá. Explorar los parques nacionales como Banff y Jasper me dejó sin aliento, con sus majestuosos picos nevados, lagos cristalinos y bosques exuberantes. Además, la amabilidad y la hospitalidad de los canadienses hicieron que mi viaje fuera aún más especial. La comida canadiense también fue una grata sorpresa. Desde los famosos jarabes de arce hasta los deliciosos platos de poutine y salmón ahumado, cada bocado fue una delicia para el paladar. Además, la escena cultural de Canadá, con su diversidad de festivales, galerías de arte y espectáculos, añadió una dimensión única a mi experiencia. En resumen, Canadá es un destino que ofrece una combinación perfecta de naturaleza, cultura y hospitalidad. ¡Sin duda, volveré para seguir explorando este increíble país en el futuro!" },
    { id: 3, country: "Australia", timeWriter: "Hace 7 horas", appreciation: 4.0, description: "¡Australia es simplemente espectacular! Recientemente tuve la oportunidad de explorar este fascinante país y quedé impresionado por su belleza natural y su vibrante cultura. Desde las impresionantes playas de la Costa Dorada hasta los emocionantes encuentros con la vida silvestre en el Parque Nacional Kakadu, cada momento fue una aventura inolvidable." },
    { id: 5, country: "España", timeWriter: "Hace 1 día", appreciation: 4.5, description: "Desde la vibrante ciudad de Barcelona hasta los pintorescos pueblos blancos de Andalucía, cada lugar que visité tenía su propio encanto único. Lo que más me sorprendió fue la riqueza de la historia y la cultura española. Recorrer el impresionante Palacio de la Alhambra en Granada y pasear por las estrechas calles del Barrio Gótico de Barcelona me transportó a épocas pasadas. Además, la pasión por la vida y la calidez de la gente española hicieron que mi viaje fuera aún más memorable. La gastronomía española también merece una mención especial. Desde las tapas y paellas hasta los exquisitos vinos y quesos, cada comida fue una experiencia gastronómica inolvidable. Y por supuesto, no puedo olvidar mencionar la animada vida nocturna, donde el flamenco y la música en vivo llenaban las calles de energía y emoción." },
    { id: 6, country: "Islandia", timeWriter: "Hace 12 horas", appreciation: 3, description: "Hablemos de Islandia. Islandia es un país de paisajes épicos y naturaleza virgen, que ofrece una experiencia única en cada rincón. Desde las impresionantes cascadas como la de Gullfoss hasta los géiseres que lanzan agua caliente al cielo, el país está lleno de maravillas naturales. La famosa Laguna Azul es un oasis de aguas termales en medio de un paisaje volcánico surrealista. Además, durante los meses de invierno, Islandia es uno de los mejores lugares del mundo para presenciar las auroras boreales bailando en el cielo. Los pueblos pintorescos y la cultura vikinga añaden un toque único a la experiencia islandesa. En resumen, Islandia es un destino mágico que promete aventuras inolvidables para los amantes de la naturaleza y la exploración." },
    { id: 7, country: "Marruecos", timeWriter: "Hace unos pocos segundos", appreciation: 4.5, description: "¡Marruecos es simplemente mágico! Recientemente tuve la oportunidad de visitar este fascinante país y quedé completamente enamorado de su encanto. Desde perderme en las estrechas callejuelas de la medina de Marrakech hasta contemplar el impresionante atardecer en el desierto del Sahara, cada momento fue una aventura inolvidable." },
    { id: 8, country: "Argentina", timeWriter: "Hace 3 horas", appreciation: 5.0, description: "¡Mi viaje a Argentina fue una experiencia inolvidable! Este país tiene tanto que ofrecer, desde la vibrante energía de Buenos Aires hasta la majestuosidad de los paisajes patagónicos. Cada momento de mi viaje fue una aventura emocionante. Lo que más me impactó fue la pasión y la calidez de la gente argentina. Desde compartir mate con lugareños hasta aprender a bailar tango en las calles de Buenos Aires, siempre me sentí bienvenido y parte de la cultura. La gastronomía argentina también merece una mención especial. Los asados, las empanadas y el delicioso vino malbec fueron solo algunas de las delicias culinarias que disfruté durante mi estancia. Y no puedo olvidar mencionar los paisajes impresionantes, desde las cataratas del Iguazú hasta los glaciares de la Patagonia." }
  ];
  countrySelec = 0;
  country = this.randomSelectCountry();
  description = this.randomSelectDescription();
  timeWriter = this.randomSelectTimeWriter();
  appreciation = this.randomSelectAppreciation();

  randomSelectCountry(): string {
    let country = "";

    this.countrySelec = Math.floor(Math.random() * (this.descriptionOption.length));

    while (countrieGived.includes(this.descriptionOption[this.countrySelec].id)) {
      this.countrySelec = Math.floor(Math.random() * (this.descriptionOption.length));
    }
    if (countrieGived.length <= 3) {
      countrieGived.push(this.descriptionOption[this.countrySelec].id);
    }
    country = this.descriptionOption[this.countrySelec].country;
    return country;
  }

  randomSelectDescription(): string {
    let description = this.descriptionOption[this.countrySelec].description;
    return description;
  }

  randomSelectTimeWriter(): string {
    let timeWriter = this.descriptionOption[this.countrySelec].timeWriter;
    return timeWriter;
  }

  randomSelectAppreciation(): string[] {
    let appreciation = this.descriptionOption[this.countrySelec].appreciation;
    let starFull = "bxs-star";
    let starHalf = "bxs-star-half";
    let starVoid = "bx-star";
    let appreciationStar: string[] = [];

    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(appreciation)) {
        appreciationStar.push(starFull);
      } else if (i < Math.ceil(appreciation)) {
        appreciationStar.push(starHalf);
      } else {
        appreciationStar.push(starVoid);
      }
    }
    return appreciationStar;
  }
}
