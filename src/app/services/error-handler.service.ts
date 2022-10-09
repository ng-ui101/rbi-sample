import {Injectable} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {
    constructor(
        private _authService: AuthService
    ) {
    }

    public handle(err: HttpErrorResponse) {
        switch (err.status) {
            case 400:
                // do something
                throw new Error('Bad request!');
            case 401:
                this._authService.logout();
                throw new Error('Authentication error!');
                // etc.
            default:
                throw new Error(err.message);
        }
    }
}
