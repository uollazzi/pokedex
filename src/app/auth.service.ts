import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedUser, LoginDto, RegisterDto } from './models/user';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: RegisterDto): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(environment.JSON_SERVER_BASE_URL + "register", user);
  }

  login(user: LoginDto): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(environment.JSON_SERVER_BASE_URL + "login", user);
  }

  logout() {
    localStorage.removeItem("user");
  }

  setLoggedUser(user: LoggedUser) {
    // scrive LoggedUser nel Local Storage
    localStorage.setItem("user", JSON.stringify(user));
  }

  getLoggedUser(): LoggedUser | null {
    let userStorage = localStorage.getItem("user");

    if (userStorage != null) {
      let u: LoggedUser = JSON.parse(userStorage);
      return u;
    } else {
      return null;
    }
  }

  get isUserLogged() {
    return this.getLoggedUser() != null;
  }
}
