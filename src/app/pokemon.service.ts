import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Lista } from './models/lista';
import { Pokemon, PokemonCatturato, PokemonDetailResponse, PokemonSearchResponse } from './models/pokemon';
import { environment } from "src/environments/environment";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient, private authService: AuthService) { }

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
    console.log(loggedUser);

    if (loggedUser != null) {
      return this.http.get<PokemonCatturato[]>(environment.USER_API_BASE_URL + "pokemons?userId=" + loggedUser.user.id, {
        headers: new HttpHeaders({
          "Authorization": "Bearer " + loggedUser.accessToken
        })
      });
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

      return this.http.post<PokemonCatturato>(environment.USER_API_BASE_URL + "pokemons", pokemonCatturato, {
        headers: new HttpHeaders({
          "Authorization": "Bearer " + loggedUser.accessToken
        })
      });
    }

    return null;
  }

  libera(id: number) {
    let loggedUser = this.authService.getLoggedUser();

    if (loggedUser != null) {
      return this.http.delete<any>(environment.USER_API_BASE_URL + "pokemons/" + id, {
        headers: new HttpHeaders({
          "Authorization": "Bearer " + loggedUser.accessToken
        })
      });
    }

    return null;
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {

      console.log(operation, error);

      return of(result as T);
    }
  }
}

