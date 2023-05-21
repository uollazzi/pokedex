import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {

  }

  loading: boolean = true;

  pokemons: Pokemon[] = []

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.loading = true;
    this.pokemonService.search().subscribe(res => {
      if (res != undefined) {
        this.pokemons = res.data;
      }

      this.loading = false;
    });
  }

  // categorie: Categoria[] = [
  //   { id: 1, nome: "Viaggi" },
  //   { id: 2, nome: "Cucina" },
  //   { id: 3, nome: "Sport" }
  // ];


}
