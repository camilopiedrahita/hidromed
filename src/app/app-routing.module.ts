import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  MisGraficosComponent } from './mis-graficos/mis-graficos.component';
import {  TableroRapidoComponent } from './tablero-rapido/tablero-rapido.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'characters', },
  { path: 'mis-graficos', component: MisGraficosComponent },
  { path: 'tablero-rapido', component:  TableroRapidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  MisGraficosComponent,
  TableroRapidoComponent
];
