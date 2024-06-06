import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Composant3Component } from '../composant3/composant3.component';

@Component({
  selector: 'app-composant4',
  standalone: true,
  imports: [CommonModule,Composant3Component],
  templateUrl: './composant4.component.html',
  styleUrl: './composant4.component.css'
})
export class Composant4Component {
  
}
