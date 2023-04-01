import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.css']
})
export class PokemonPreviewComponent {
  @Input()
  pokemon?: Pokemon;

  @Input()
  catturato = false;

  @Input()
  idPokemonCatturato?: number;

  @Output()
  onPokemonLiberato = new EventEmitter<Pokemon>();

  constructor(private ps: PokemonService, private router: Router) {

  }

  cattura() {
    this.ps.cattura(this.pokemon!)?.subscribe(p => {
      console.log(p);

      this.router.navigate(["pokemons", "catturati"]);
    })
  }

  libera() {
    this.ps.libera(this.idPokemonCatturato!)?.subscribe(p => {
      this.onPokemonLiberato.emit(this.pokemon);
    });
  }
}
