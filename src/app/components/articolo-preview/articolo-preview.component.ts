import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articolo } from 'src/app/models/articolo';

@Component({
  selector: 'app-articolo-preview',
  templateUrl: './articolo-preview.component.html',
  styleUrls: ['./articolo-preview.component.css']
})
export class ArticoloPreviewComponent {
  @Input()
  articolo?: Articolo;

  @Output()
  onRichiestaCancellazione = new EventEmitter<number>();

  @Output()
  onRichiestaPubblicazione = new EventEmitter<number>();

  elimina() {
    if (confirm("Sei sicuro di voler eliminare l'articolo?")) {
      this.onRichiestaCancellazione.emit(this.articolo!.id);
    }
  }

  pubblica() {
    if (confirm("Sei sicuro di voler pubblicare l'articolo?")) {
      this.onRichiestaPubblicazione.emit(this.articolo!.id);
    }
  }
}
