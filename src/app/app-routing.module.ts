import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticoliListComponent } from './components/articoli-list/articoli-list.component';
import { ArticoloDetailComponent } from './components/articolo-detail/articolo-detail.component';
import { ArticoloAddComponent } from './components/articolo-add/articolo-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { loggedGuard } from './guards/logged.guard';
import { ArticoloEditComponent } from './components/articolo-edit/articolo-edit.component';
import { TitleEditorComponent } from './components/title-editor/title-editor.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { ProfileEditorBuilderComponent } from './components/profile-editor-builder/profile-editor-builder.component';
import { LoginReactiveComponent } from './components/login-reactive/login-reactive.component';

const routes: Routes = [
  // {
  //   path: "pokemons",
  //   component: PokemonsListComponent
  // },
  // {
  //   path: "pokemons/:codice",
  //   component: PokemonDetailComponent
  // },
  {
    path: "login", component: LoginReactiveComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "title-editor", component: TitleEditorComponent
  },
  {
    path: "profile-editor", component: ProfileEditorComponent
  },
  {
    path: "profile-editor-builder", component: ProfileEditorBuilderComponent
  },
  {
    path: "pokemons",
    component: PokemonsComponent,
    children: [
      { path: "", component: PokemonsListComponent },
      { path: ":codice", component: PokemonDetailComponent }
    ]
  },
  {
    path: "blog",
    component: BlogComponent,
    children: [
      {
        path: "", component: ArticoliListComponent
      },
      {
        path: "nuovo", component: ArticoloAddComponent
      },
      {
        path: ":id", component: ArticoloDetailComponent
      },
      {
        path: "modifica/:id", component: ArticoloEditComponent
      },
    ],
    canActivate: [loggedGuard]
  },
  {
    path: "",
    redirectTo: "/pokemons",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
