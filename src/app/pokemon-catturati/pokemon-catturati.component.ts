import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonCatturato } from '../models/pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-catturati',
  templateUrl: './pokemon-catturati.component.html',
  styleUrls: ['./pokemon-catturati.component.css']
})
export class PokemonCatturatiComponent implements OnInit {
  pokemons: PokemonCatturato[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {

  }

  ngOnInit(): void {
    this.getCatturati();
  }

  getCatturati() {
    this.pokemonService.getCatturati().subscribe(data => {
      this.pokemons = data;
    });
  }

  ricaricaDopoLiberazione() {
    this.pokemonService.getCatturati().subscribe(data => {
      if (data.length == 0) {
        this.router.navigate(["pokemons"]);
      } else {
        this.pokemons = data;
      }
    })
  }
}
