import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PokemonPreviewComponent } from './pokemon-preview/pokemon-preview.component';
import { PokemonAttackComponent } from './pokemon-attack/pokemon-attack.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    MenuComponent,
    HomeComponent,
    CategoriaComponent,
    PokemonPreviewComponent,
    PokemonAttackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
