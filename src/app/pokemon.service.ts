import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetailResponse, PokemonSearchResponse } from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  search(): Observable<PokemonSearchResponse> {
    return this.http.get<PokemonSearchResponse>("https://api.pokemontcg.io/v2/cards?pageSize=10");
  }

  getById(id: string): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>("https://api.pokemontcg.io/v2/cards/" + id);
  }
}
