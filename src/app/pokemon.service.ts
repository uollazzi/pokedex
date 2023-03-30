import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Lista } from './models/lista';
import { Pokemon, PokemonDetailResponse, PokemonSearchResponse } from './models/pokemon';
import { environment } from "src/environments/environment";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  search(): Observable<PokemonSearchResponse> {
    return this.http.get<PokemonSearchResponse>(environment.POKEMON_API_BASE_URL + "cards?pageSize=10", {
      headers: new HttpHeaders({
        "Authorization": "Beaer xxx"
      })
    })
      .pipe(
        catchError(this.handleError<PokemonSearchResponse>("search", undefined))
      );
  }

  getById(id: string): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(environment.POKEMON_API_BASE_URL + "cards/" + id)
      .pipe(
        tap(r => console.log("Arrivato un nuovo dato dell'observable: " + r.data.name)),
        catchError(this.handleError<PokemonDetailResponse>("getById", undefined))
      );
  }

  getCatturati(): Observable<Pokemon[]> {
    let loggedUser = this.authService.getLoggedUser();
    console.log(loggedUser);

    if (loggedUser != null) {
      return this.http.get<Pokemon[]>(environment.USER_API_BASE_URL + "pokemons", {
        headers: new HttpHeaders({
          "Authorization": "Bearer " + loggedUser.accessToken
        })
      });
    } else {
      return of([]);
    }
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {

      console.log(operation, error);

      return of(result as T);
    }
  }
}

