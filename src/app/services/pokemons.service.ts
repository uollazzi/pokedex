import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CardResponse, Pokemon, SearchResponse } from '../models/pokemon';
import { environment } from 'src/environments/environment';
import { gestisciErrore } from './utilities';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private baseURL = environment.POKEMON_SERVER_BASE_URL;

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "X-Api-Key": environment.POKEMON_SERVER_API_KEY,
    })
  };

  search(pageSize: number = environment.POKEMON_SEARCH_DEFAULT_PAGE_SIZE, page: number = 1): Observable<SearchResponse> {
    // GET https://api.pokemontcg.io/v2/cards?pageSize=20
    return this.http.get<SearchResponse>(`${this.baseURL}/cards?pageSize=${pageSize}&page=${page}`, this.httpOptions)
      .pipe(
        catchError(gestisciErrore<SearchResponse>("search pokemons:", undefined))
      );
  }

  getById(codice: string): Observable<CardResponse> {
    // GET https://api.pokemontcg.io/v2/cards/dp3-1
    return this.http.get<CardResponse>(`${this.baseURL}/cards/${codice}`, this.httpOptions)
      .pipe(
        catchError(gestisciErrore<CardResponse>("getById pokemons:", undefined))
      );
  }
}
