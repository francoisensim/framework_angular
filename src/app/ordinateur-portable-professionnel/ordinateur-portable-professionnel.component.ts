import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Composant3Component } from '../composant3/composant3.component';


@Component({
  selector: 'app-ordinateur-portable-professionnel',
  standalone: true,
  imports: [CommonModule,Composant3Component],
  templateUrl: './ordinateur-portable-professionnel.component.html',
  styleUrl: './ordinateur-portable-professionnel.component.css'
})
export class OrdinateurPortableProfessionnelComponent {
  
}
