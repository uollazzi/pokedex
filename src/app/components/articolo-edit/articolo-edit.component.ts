import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articolo, ModificaArticoloDto } from 'src/app/models/articolo';
import { Pokemon } from 'src/app/models/pokemon';
import { BlogService } from 'src/app/services/blog.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-articolo-edit',
  templateUrl: './articolo-edit.component.html',
  styleUrls: ['./articolo-edit.component.css']
})
export class ArticoloEditComponent {
  model?: ModificaArticoloDto;
  errorMessage = "";
  pokemons: Pokemon[] = [];

  constructor(
    private bs: BlogService,
    private ps: PokemonsService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.ps.search(10).subscribe(dati => {
      this.pokemons = dati.data;

      this.bs.getArticoloEditById(id).subscribe(articolo => {
        this.model = articolo;
      });
    });

  }

  modificaArticolo() {
    this.bs.editArticoloById(this.model!.id, this.model!).subscribe(articolo => {
      this.router.navigate(["/blog"]);
    });
  }
}
