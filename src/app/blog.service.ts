import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Articolo, NuovoArticoloDto } from './models/articolo';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  // getArticoli(): Observable<Articolo[]> {
  //   return this.http.get<Articolo[]>(environment.JSON_SERVER_BASE_URL + "/articoli", this.httpOptions)
  //     .pipe(
  //       catchError(gestisciErrore<Articolo[]>("get articoli", []))
  //     )
  // }

  // getArticoli(): Observable<Articolo[] | Error> {
  //   return this.http.get<Articolo[]>(environment.JSON_SERVER_BASE_URL + "/articoli", this.httpOptions)
  //     .pipe(
  //       catchError(handleError)
  //     )
  // }

  getArticoli(): Observable<Articolo[]> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Authorization": "Bearer " + this.authService.getLoggedUser()?.accessToken
    //   })
    // }

    return this.http.get<Articolo[]>(environment.JSON_SERVER_BASE_URL + "articoli")
      .pipe(
        // tap(articoli => console.log(articoli.length + " articoli ricevuti dal server.")),
        tap({
          next: (articoli => console.log(articoli.length + " articoli ricevuti dal server.")),
          error: (e: HttpErrorResponse) => console.error("SERVIZIO:", e.message),
        }),
        delay(2000)
      )
  }

  getArticoliConErrore(): Observable<Articolo[]> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Authorization": "Bearer " + this.authService.getLoggedUser()?.accessToken
    //   })
    // }

    return this.getArticoli()
      .pipe(
        tap(() => {
          throw new Error("Errore simulato");
        })
      )
  }

  nuovoArticolo(model: NuovoArticoloDto): Observable<Articolo> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Authorization": "Bearer " + this.authService.getLoggedUser()?.accessToken
    //   })
    // }

    return this.http.post<Articolo>(environment.JSON_SERVER_BASE_URL + "articoli", model);
  }

  getArticoloById(id: number): Observable<Articolo> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Authorization": "Bearer " + this.authService.getLoggedUser()?.accessToken
    //   })
    // }

    return this.http.get<Articolo>(environment.JSON_SERVER_BASE_URL + "articoli/" + id).pipe(delay(2000));
  }

  deleteArticoloById(id: number): Observable<Articolo> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Authorization": "Bearer " + this.authService.getLoggedUser()?.accessToken
    //   })
    // }

    return this.http.delete<Articolo>(environment.JSON_SERVER_BASE_URL + "articoli/" + id);
  }
}
