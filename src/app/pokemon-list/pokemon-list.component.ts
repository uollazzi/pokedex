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

  pokemons: Pokemon[] = []

  ngOnInit(): void {
    this.pokemonService.search().subscribe(res => {
      this.pokemons = res.data;
    });
  }

  // categorie: Categoria[] = [
  //   { id: 1, nome: "Viaggi" },
  //   { id: 2, nome: "Cucina" },
  //   { id: 3, nome: "Sport" }
  // ];


}
