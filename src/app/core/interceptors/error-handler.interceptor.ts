import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    let errorMessage;

    error.error instanceof ErrorEvent ? errorMessage = `Error: ${error.message}, type of error:${error.type}`
      : errorMessage = `Error code: ${error.status}, Status: ${error.statusText}, Description: ${error.message}`;

    return throwError(() => errorMessage);
  }));
};
