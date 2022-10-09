import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private _authService: AuthService
    ) {
    }

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        request = request.clone({
            headers: request.headers.set('authorization', this._authService.token),
        });

        return next.handle(request).pipe(
            tap(
                () => console.log('Server response'),
                (error) => {
                    if (error instanceof HttpErrorResponse && error.status == 401)
                        console.warn('Unauthorized!')
                }
            )
        );
    }
}
