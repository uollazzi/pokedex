import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PokemonCatturatiComponent } from './pokemon-catturati/pokemon-catturati.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RegisterComponent } from './register/register.component';
import { LoggedGuard } from './guards/logged.guard';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';

const routes: Routes = [
  { path: 'pokemons/catturati', component: PokemonCatturatiComponent, canActivate: [LoggedGuard] },
  { path: 'categorie/:id', component: CategoriaComponent },
  { path: 'pokemons/:id', component: PokemonDetailComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginReactiveComponent },
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
