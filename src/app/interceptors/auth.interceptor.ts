import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<unknown>) {
    console.log(request.url);

    if (request.url.startsWith(environment.JSON_SERVER_BASE_URL)) {

      console.log("HTTP BLOG");

      const u = this.authService.getLoggedUser();

      if (u != null) {
        return request.clone({
          setHeaders: {
            Authorization: "Bearer " + u.accessToken
          }
        });
      } else {
        return request;
      }
    }
    else {
      return request;
    }
  }
}
