import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  Ecran3Component } from '../ecran3/ecran3.component';
import {  Ecran4Component } from '../ecran4/ecran4.component';
import {  Ecran5Component } from '../ecran5/ecran5.component';

@Component({
  selector: 'app-composant1',
  standalone: true,
  imports: [CommonModule, Ecran3Component, Ecran4Component, Ecran5Component],
  templateUrl: './composant1.component.html',
  styleUrl: './composant1.component.css'
  
})
export class Composant1Component {
  constructor(private router: Router) { }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  
}
