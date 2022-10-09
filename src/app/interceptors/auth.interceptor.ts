import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {ErrorHandlerService} from "../services/error-handler.service";
import {StorageService} from "../services/storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private _storageService: StorageService,
        private _errorHandlerService: ErrorHandlerService
    ) {
    }

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        request = request.clone({
            headers: request.headers.set('authorization', this._storageService.getAuthToken()),
        });

        return next.handle(request).pipe(
            tap({
                error: (error) => {
                    if (error instanceof HttpErrorResponse) {
                        this._errorHandlerService.handle(error);
                    }
                }
            })
        );
    }
}
