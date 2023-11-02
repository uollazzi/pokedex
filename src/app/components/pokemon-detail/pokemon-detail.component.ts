import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CardResponse, Pokemon } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  pokemon?: Pokemon;
  subscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private ps: PokemonsService
  ) {

  }

  ngOnInit(): void {
    const codice = this.route.snapshot.paramMap.get("codice");

    if (codice) {
      this.subscription = this.ps.getById(codice).subscribe(dati => {
        this.pokemon = dati.data;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  somma(n: number, m: number) {
    return n + m;
  }
}
