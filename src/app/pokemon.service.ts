import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Lista } from './models/lista';
import { Pokemon, PokemonCatturato, PokemonDetailResponse, PokemonSearchResponse } from './models/pokemon';
import { environment } from "src/environments/environment";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "X-Api-Key": environment.POKEMON_API_KEY
    })
  };

  search(): Observable<PokemonSearchResponse> {
    return this.http.get<PokemonSearchResponse>(environment.POKEMON_API_BASE_URL + "cards?pageSize=10", this.httpOptions)
      .pipe(
        catchError(this.handleError<PokemonSearchResponse>("search", undefined))
      );
  }

  getById(id: string): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(environment.POKEMON_API_BASE_URL + "cards/" + id, this.httpOptions)
      .pipe(
        tap(r => console.log("Arrivato un nuovo dato dell'observable: " + r.data.name)),
        catchError(this.handleError<PokemonDetailResponse>("getById", undefined))
      );
  }

  getCatturati(): Observable<PokemonCatturato[]> {
    let loggedUser = this.authService.getLoggedUser();

    if (loggedUser != null) {
      return this.http.get<PokemonCatturato[]>(environment.JSON_SERVER_BASE_URL + "pokemons?userId=" + loggedUser.user.id);
    } else {
      return of([]);
    }
  }

  cattura(pokemon: Pokemon) {
    let loggedUser = this.authService.getLoggedUser();

    if (loggedUser != null) {

      let pokemonCatturato: PokemonCatturato = {
        userId: loggedUser.user.id,
        pokemon: pokemon
      };

      return this.http.post<PokemonCatturato>(environment.JSON_SERVER_BASE_URL + "pokemons", pokemonCatturato);
    }

    return null;
  }

  libera(id: number) {
    let loggedUser = this.authService.getLoggedUser();

    if (loggedUser != null) {
      return this.http.delete<any>(environment.JSON_SERVER_BASE_URL + "pokemons/" + id);
    }

    return null;
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {

      console.log(operation, error);

      if (error.status == 401) {
        this.router.navigate(["/login"]);
      }

      return of(result as T);
    }
  }
}

