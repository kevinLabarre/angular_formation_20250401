import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs'


// AVEC CLASS, ANCIENNE METHODE, N'EST PAS APPLIQUEE SUR CE PROJET

@Injectable()
export class Interceptor {
  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("INTERCEPTOR !!!")
    return this.handleRequest(request, next)
  }

  private handleRequest(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => this.handleRequestError(err))
    )
  }

  // En cas d'erreur 401 ou 403 -> redirection vers la page /login
  private handleRequestError(err: HttpErrorResponse): Observable<never> {
    if (err.status === 401 || err.status === 403) {
      this.router.navigate(['/login'])
    }
    return throwError(() => err)
  }

}
