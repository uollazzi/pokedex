import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

import { MenuComponent } from './components/menu/menu.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonAttackComponent } from './components/pokemon-attack/pokemon-attack.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticoliListComponent } from './components/articoli-list/articoli-list.component';
import { ArticoloPreviewComponent } from './components/articolo-preview/articolo-preview.component';
import { ArticoloDetailComponent } from './components/articolo-detail/articolo-detail.component';
import { ArticoloAddComponent } from './components/articolo-add/articolo-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { InizialiPipe } from './pipes/iniziali.pipe';
import { StartsWithPipe } from './pipes/starts-with.pipe';
import { ArticoloEditComponent } from './components/articolo-edit/articolo-edit.component';
import { TitleEditorComponent } from './components/title-editor/title-editor.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { ProfileEditorBuilderComponent } from './components/profile-editor-builder/profile-editor-builder.component';
import { LoginReactiveComponent } from './components/login-reactive/login-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PokemonsListComponent,
    PokemonDetailComponent,
    PokemonAttackComponent,
    PokemonsComponent,
    BlogComponent,
    ArticoliListComponent,
    ArticoloPreviewComponent,
    ArticoloDetailComponent,
    ArticoloAddComponent,
    LoginComponent,
    RegisterComponent,
    InizialiPipe,
    StartsWithPipe,
    ArticoloEditComponent,
    TitleEditorComponent,
    ProfileEditorComponent,
    ProfileEditorBuilderComponent,
    LoginReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2000 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
