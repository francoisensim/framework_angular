import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Composant1Component } from './composant1/composant1.component';
import { Composant2Component } from './composant2/composant2.component';
import { Composant2Component } from './composant3/composant3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Composant1Component, Composant2Component,, Composant3Component ] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'SABAPP';

}