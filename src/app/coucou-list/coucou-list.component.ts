import { Component, OnInit } from '@angular/core';
import coucouJson from '../assets/coucou.json';


@Component({
  selector: 'app-coucou-list',
  templateUrl: './coucou-list.component.html',
  styleUrls: ['./coucou-list.component.scss']
})
export class CoucouListComponent {

  constructor() { 
    this.showPeerHelloAnimal();

  }


  showPeerHelloAnimal() { 
    console.log('Reading local json files');
    const keys = Object.keys(coucouJson);
    const values = Object.values(coucouJson);
    console.log('keys ' + keys);
    console.log('values ' + values);

    const numberOfElements = Object.keys(coucouJson).length;
    if (numberOfElements > 0) {
      const hello = Math.floor(Math.random() * numberOfElements);
      console.log("Le numéro de bonjour est: ", hello)
      console.log("C'est le mot ", Object.keys(coucouJson)[hello])

      const animaux = values[hello];
      console.log("Les animaux de ", hello, " sont: ", animaux)

      const animal = Math.floor(Math.random() * animaux.length);
      console.log("Le numéro de l'animal est : ", animal)
      console.log("C'est l'animal ", animaux[animal])

      console.log('Résultat ', Object.keys(coucouJson)[hello], " ", animaux[animal],".");

    }
  }
}
