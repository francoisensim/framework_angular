import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Ecran3composant3Component } from '../ecran3composant3/ecran3composant3.component';
import {  Ecran3composant2Component } from '../ecran3composant2/ecran3composant2.component';
import {  Ecran3composant1Component } from '../ecran3composant1/ecran3composant1.component';

@Component({
  selector: 'app-ecran3',
  standalone: true,
  imports: [CommonModule, Ecran3composant3Component,Ecran3composant2Component,Ecran3composant1Component],
  templateUrl: './ecran3.component.html',
  styleUrl: './ecran3.component.css'
})
export class Ecran3Component {
imageurl1: string = 'https://th.bing.com/th/id/OIP.ADjoUOy8GMryL7mgRCfvnwHaE3?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7';
imageurl2: string = 'https://i5.walmartimages.com/asr/6b4ca70b-efd7-4cf2-92ad-6d53dc820b30.020666921ab79b85f24f8903ab77adb0.jpeg';
bouton1: string = 'ordinateur portable';
buton2: string ='ordinateur fixe';
}
