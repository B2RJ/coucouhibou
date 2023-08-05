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


  /**
   * Print a peer Hello/Animal
   */
  showPeerHelloAnimal() { 
    const keys = Object.keys(coucouJson);
    const values = Object.values(coucouJson);

    const numberOfElements = Object.keys(coucouJson).length;
    if (numberOfElements > 0) {
      let hello = Math.floor(Math.random() * numberOfElements);
      const first_hello = hello

      while (Object.keys(coucouJson)[hello] === "all") {
        hello = Math.floor(Math.random() * numberOfElements);
      }

      const animaux = values[first_hello];

      const animal = Math.floor(Math.random() * animaux.length);

      this.helloAnimal = Object.keys(coucouJson)[hello] + " " + animaux[animal];

    }
  }
}
