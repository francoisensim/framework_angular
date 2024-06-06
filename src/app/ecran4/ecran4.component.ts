import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Composant1ecran4Component  } from '../composant1ecran4/composant1ecran4.component';
import { Composant2ecran4Component  } from '../composant2ecran4/composant2ecran4.component';
import { Composant3ecran4Component  } from '../composant3ecran4/composant3ecran4.component';
import { Composant4ecran4Component  } from '../composant4ecran4/composant4ecran4.component';

@Component({
  selector: 'app-ecran4',
  standalone: true,
  imports: [CommonModule, Composant1ecran4Component,Composant2ecran4Component,Composant3ecran4Component ,Composant4ecran4Component],
  templateUrl: './ecran4.component.html',
  styleUrl: './ecran4.component.css'
})

export class Ecran4Component {

}
