import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedUser, LoginDTO, RegisterDTO } from '../models/auth';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { gestisciErrore } from './utilities';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(model: LoginDTO): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(environment.JSON_SERVER_BASE_URL + "/login", model)
    // .pipe(
    //   catchError(gestisciErrore<LoggedUser>("login", undefined))
    // );
  }

  register(model: RegisterDTO): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(environment.JSON_SERVER_BASE_URL + "/register", model)
    // .pipe(
    //   catchError(gestisciErrore<LoggedUser>("register", undefined))
    // );
  }

  setLoggedUser(user: LoggedUser) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getLoggedUser(): LoggedUser | null {
    let userStorage = localStorage.getItem("user");

    if (userStorage != null) {
      let u: LoggedUser = JSON.parse(userStorage);
      return u;
    }

    return null;
  }

  get isUserLogged(): boolean {
    return this.getLoggedUser() != null;
  }

  logout() {
    localStorage.removeItem("user");
  }
}
