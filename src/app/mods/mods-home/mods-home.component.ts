import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
modalOpen = false;

  items = [
    { title: "Quali sono i benefici di una dieta equilibrata?",
      content: "Migliora la salute cardiovascolare, aiuta a mantenere un peso sano, aumenta l'energia, rafforza il sistema immunitario e migliora la digestione."
    },
    { title: "Che cosa è l'energia rinnovabile?",
    content: "È l'energia proveniente da fonti naturali che si rigenerano rapidamente, come il sole, il vento, l'acqua, il calore terrestre e la biomassa."
    },
    { title: "Quali sono i vantaggi dell'apprendimento online?",
    content: "Offre flessibilità, accessibilità globale, una varietà di risorse, costi ridotti e percorsi di apprendimento personalizzati."
    }
  ];

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
