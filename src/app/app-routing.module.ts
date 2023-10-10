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
import { BlogComponent } from './blog/blog.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  {
    path: 'blog', component: BlogComponent,
    children: [
      { path: '', component: PostsListComponent },
      { path: 'add', component: PostAddComponent }
    ]
  },
  {
    path: 'pokemons', component: PokemonsComponent,
    children: [
      { path: '', component: PokemonListComponent },
      { path: 'catturati', component: PokemonCatturatiComponent, canActivate: [LoggedGuard] },
      { path: ':id', component: PokemonDetailComponent },
    ]
  },
  { path: 'categorie/:id', component: CategoriaComponent },
  // { path: 'pokemons/catturati', component: PokemonCatturatiComponent, canActivate: [LoggedGuard] },
  // { path: 'pokemons/:id', component: PokemonDetailComponent },
  // { path: 'pokemons', component: PokemonListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
