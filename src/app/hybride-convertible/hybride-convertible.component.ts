import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Composant3Component } from '../composant3/composant3.component';

@Component({
  selector: 'app-hybride-convertible',
  standalone: true,
  imports: [CommonModule,Composant3Component],
  templateUrl: './hybride-convertible.component.html',
  styleUrl: './hybride-convertible.component.css'
})
export class HybrideConvertibleComponent {
}
