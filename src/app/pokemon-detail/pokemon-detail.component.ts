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
  errorMessage?: string;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    // alternativa 1 (con !)
    // this.pokemonService.getById(id!).subscribe(res => {
    //   this.pokemon = res.data;
    // });

    // alternativa 2 (con if)
    // truethy
    // if (id == null)
    if (id != null) {
      this.pokemonService.getById(id).subscribe(res => {
        this.pokemon = res.data;
      });

      this.errorMessage = undefined;
    } else {
      this.errorMessage = "Parametro id non trovato";
      this.pokemon = undefined;
    }



  }
}
