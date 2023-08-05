import { Component, OnInit } from '@angular/core';
import coucouJson from '../assets/coucou.json';


@Component({
  selector: 'app-coucou-list',
  templateUrl: './coucou-list.component.html',
  styleUrls: ['./coucou-list.component.scss']
})
export class CoucouListComponent {
  helloAnimal: any;

  constructor() { 
    this.showPeerHelloAnimal();

  }


  showPeerHelloAnimal() { 
    const keys = Object.keys(coucouJson);
    const values = Object.values(coucouJson);

    const numberOfElements = Object.keys(coucouJson).length;
    if (numberOfElements > 0) {
      const hello = Math.floor(Math.random() * numberOfElements);

      const animaux = values[hello];

      const animal = Math.floor(Math.random() * animaux.length);

      this.helloAnimal = "Résultat " + Object.keys(coucouJson)[hello] + " " + animaux[animal] + ".";

    }
  }
}
