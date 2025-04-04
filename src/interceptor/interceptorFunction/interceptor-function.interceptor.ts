import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

export function interceptorFunctionInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log("my interceptor !!");

  // Utilisez `inject` car pas de constructeur dans les functions (dans les class, nous injectons
  //via les contructeurs)
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Vérifier si le statut de l'erreur est 401 ou 403
      if (error.status === 401 || error.status === 403) {
        // Rediriger vers la page de connexion
        router.navigate(['/login']);
      }
      // Propager l'erreur (pour qu'elle l'err puisse etre récup dans les services / composants)
      return throwError(() => error);
    })
  );
}
