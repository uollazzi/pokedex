import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export const loggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  if (!authService.isUserLogged) {
    router.navigate(['/login']);
    snackBar.open("La visualizzazione del Blog richiede l'autenticazione.", "OK");
    return false;
  }

  return true;



  // una riga!
  // return inject(AuthService).isUserLogged;
};
