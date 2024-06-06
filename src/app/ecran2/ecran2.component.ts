import { Component } from '@angular/core';
import { OrdinateurPortableProfessionnelComponent } from '../ordinateur-portable-professionnel/ordinateur-portable-professionnel.component';
import { Composant4Component } from '../composant4/composant4.component';
import { HybrideConvertibleComponent } from '../hybride-convertible/hybride-convertible.component';
import { RouterOutlet } from '@angular/router';

@Component ({
  selector: 'app-ecran2',
  standalone: true,
  imports:[RouterOutlet, OrdinateurPortableProfessionnelComponent, Composant4Component,HybrideConvertibleComponent],
  templateUrl: './ecran2.component.html',
  styleUrl: './ecran2.component.css'
})
export class Ecran2Component {

}


