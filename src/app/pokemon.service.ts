import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Lista } from './models/lista';
import { PokemonDetailResponse, PokemonSearchResponse } from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  search(): Observable<PokemonSearchResponse> {
    return this.http.get<PokemonSearchResponse>("https://api.pokemontcg.io/v2/cards?pageSize=10")
      .pipe(
        catchError(this.handleError<PokemonSearchResponse>("search", undefined))
      );
  }

  getById(id: string): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>("https://api.pokemontcg.io/v2/cards/" + id)
      .pipe(
        tap(r => console.log("Arrivato un nuovo dato dell'observable: " + r.data.name)),
        catchError(this.handleError<PokemonDetailResponse>("getById", undefined))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {

      console.log(operation, error);

      return of(result as T);
    }
  }
}

