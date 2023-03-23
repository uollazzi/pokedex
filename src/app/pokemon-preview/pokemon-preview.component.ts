import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.css']
})
export class PokemonPreviewComponent {
  @Input()
  pokemon?: Pokemon;
}
