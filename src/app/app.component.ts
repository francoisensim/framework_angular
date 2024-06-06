import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Composant1Component } from './composant1/composant1.component';
import { Composant2Component } from './composant2/composant2.component';
import { Composant4Component } from './composant4/composant4.component';
import {  Ecran2Component } from './ecran2/ecran2.component';
import {  Ecran3Component } from './ecran3/ecran3.component';
import {  Ecran4Component } from './ecran4/ecran4.component';
import {  Ecran5Component } from './ecran5/ecran5.component';
import {  Ecran6Component } from './ecran6/ecran6.component';
import {  Ecran7Component } from './ecran7/ecran7.component';
import {  Ecran8Component } from './ecran8/ecran8.component';
import {  Ecran9Component } from './ecran9/ecran9.component';
import {  Ecran10Component } from './ecran10/ecran10.component';
import {  Ecran11Component } from './ecran11/ecran11.component';
import {  Ecran12Component } from './ecran12/ecran12.component';
import {  Ecran13Component } from './ecran13/ecran13.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Composant1Component, Composant2Component, Composant4Component, Ecran2Component, Ecran3Component, Ecran4Component, Ecran5Component, Ecran6Component, Ecran7Component, Ecran8Component, Ecran9Component, Ecran10Component, Ecran11Component, Ecran12Component, Ecran13Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})


export class AppComponent {
  title = 'SABAPP';
}

