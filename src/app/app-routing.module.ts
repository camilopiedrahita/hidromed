import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisGraficosComponent } from './mis-graficos/mis-graficos.component';
import { TableroRapidoComponent } from './tablero-rapido/tablero-rapido.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tablero-rapido', },
  { path: 'tablero-rapido', component:  TableroRapidoComponent },
  { path: 'mis-graficos', component: MisGraficosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
