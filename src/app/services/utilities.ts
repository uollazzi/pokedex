import { HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";

export function gestisciErrore<T>(operazione: string, risultato?: T) {
  return (error: HttpErrorResponse): Observable<T> => {
    console.log("*** " + operazione + " ***");
    console.log(error.error);
    console.log(error.message);
    console.log("*** " + operazione + " ***");

    return of(risultato as T);
  }
}

export function handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // Errore lato client
    console.error('Errore lato client:', error.error.message);
  } else {
    // Errore lato server
    console.error(`Codice di errore: ${error.status}, Messaggio: ${error.message}`);
  }

  // Restituisci un observable con un messaggio di errore
  return of(new Error('Si è verificato un errore. Si prega di riprovare più tardi.'));
}
