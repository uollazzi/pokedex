import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError, ignoreElements, of } from 'rxjs';
import { Articolo } from '../models/articolo';
import { BlogService } from '../blog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-posts-list-async',
  templateUrl: './posts-list-async.component.html',
  styleUrls: ['./posts-list-async.component.css']
})
export class PostsListAsyncComponent {
  articoli$?: Observable<Articolo[]>;
  articoliError$?: Observable<any>;
  errorMessage = "";

  constructor(private bs: BlogService, private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.getArticoli();
  }

  getArticoli() {
    this.articoli$ = this.bs.getArticoliConErrore()
    this.articoliError$ = this.articoli$
      .pipe(
        ignoreElements(),
        catchError(err => of(err))
      )
  }

  elimina(id: number) {
    this.bs.deleteArticoloById(id).subscribe(articolo => {
      this.snackBar.open("Articolo eliminato con successo", "OK");
      this.getArticoli();
    });
  }
}
