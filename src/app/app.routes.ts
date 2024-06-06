import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
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

export const routes: Routes = [
  { path: 'composant1', component: Composant1Component },
  { path: 'ecran2', component: Ecran2Component },
  { path: 'ecran3', component: Ecran3Component },
  { path: 'ecran4', component: Ecran4Component },
  { path: 'ecran5', component: Ecran5Component },
  { path: 'ecran6', component: Ecran6Component },
  { path: 'ecran7', component: Ecran7Component },
  { path: 'ecran8', component: Ecran8Component },
  { path: 'ecran9', component: Ecran9Component },
  { path: 'ecran10', component: Ecran10Component },
  { path: 'ecran11', component: Ecran11Component },
  { path: 'ecran12', component: Ecran12Component },
  { path: 'ecran13', component: Ecran13Component },
  { path: '', redirectTo: '/page1', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

