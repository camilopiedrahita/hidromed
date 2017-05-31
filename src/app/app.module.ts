import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { MisGraficosModule } from './mis-graficos/mis-graficos.module';
import { TableroRapidoModule } from './tablero-rapido/tablero-rapido.module';
import { AppRoutingModule } from './app-routing.module';

import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PerfilComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    MisGraficosModule,
    TableroRapidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
