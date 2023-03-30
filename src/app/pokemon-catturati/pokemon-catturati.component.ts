import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-catturati',
  templateUrl: './pokemon-catturati.component.html',
  styleUrls: ['./pokemon-catturati.component.css']
})
export class PokemonCatturatiComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit(): void {
    this.pokemonService.getCatturati().subscribe(data => {
      this.pokemons = data;
    })
  }
}
