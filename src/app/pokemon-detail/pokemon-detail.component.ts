import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService) {

  }

  pokemon?: Pokemon;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    // TODO: ! nullable
    this.pokemonService.getById(id!).subscribe(res => {
      this.pokemon = res.data;
    });
  }
}
