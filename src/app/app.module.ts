import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PokemonPreviewComponent } from './pokemon-preview/pokemon-preview.component';
import { PokemonAttackComponent } from './pokemon-attack/pokemon-attack.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PokemonCatturatiComponent } from './pokemon-catturati/pokemon-catturati.component';
import { StartsWithPipe } from './pipes/starts-with.pipe';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { BlogComponent } from './blog/blog.component';
import { PokemonsComponent } from './pokemons/pokemons.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    MenuComponent,
    HomeComponent,
    CategoriaComponent,
    PokemonPreviewComponent,
    PokemonAttackComponent,
    RegisterComponent,
    LoginComponent,
    PokemonCatturatiComponent,
    StartsWithPipe,
    LoginReactiveComponent,
    PostsListComponent,
    PostAddComponent,
    BlogComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
