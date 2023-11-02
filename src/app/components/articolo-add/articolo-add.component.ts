import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { NuovoArticoloDto } from 'src/app/models/articolo';
import { Pokemon } from 'src/app/models/pokemon';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-articolo-add',
  templateUrl: './articolo-add.component.html',
  styleUrls: ['./articolo-add.component.css']
})
export class ArticoloAddComponent implements OnInit {
  model?: NuovoArticoloDto;
  errorMessage = "";
  pokemons: Pokemon[] = [];

  constructor(
    private authService: AuthService,
    private bs: BlogService,
    private router: Router,
    private ps: PokemonsService
  ) {

  }

  ngOnInit(): void {
    if (this.authService.isUserLogged) {
      this.model = new NuovoArticoloDto(this.authService.getLoggedUser()!.user.id);

      this.ps.search(10).subscribe(pokemons => {
        this.pokemons = pokemons.data;
      })
    }
  }

  aggiungiArticolo() {
    this.bs.nuovoArticolo(this.model!)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status == 401) {
            this.errorMessage = "Non si dispone delle autorizzazioni necessarie per aggiunger l'articolo: " + err.error;
          } else {
            this.errorMessage = "Errore nell'aggiunta dell'articolo";
          }

          return of(undefined);
        })
      )
      .subscribe(articolo => {
        if (articolo) {
          this.router.navigate(["/", "blog"]);
        }
      })
  }
}
