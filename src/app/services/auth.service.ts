import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {AuthApiService} from "./auth-api.service";
import {HttpResponse} from "@angular/common/http";

const TOKEN_NAME = 'auth_token'
const FAKE_TOKEN_VALUE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isLoggedIn$ = new BehaviorSubject<boolean>(false);

    get token(): string {
        return localStorage.getItem(TOKEN_NAME);
    }

    constructor(
        private _authApiService: AuthApiService
    ) {
        this.isLoggedIn$.next(!!this.token);
    }

    login(username: string, password: string): Observable<any> {
        return this._authApiService.login(username, password).pipe(
            tap((response: any) => {
                this.isLoggedIn$.next(true);
                localStorage.setItem(TOKEN_NAME, response.token);
            })
        );
    }

    logout(): void {
        localStorage.removeItem(TOKEN_NAME);
        this.isLoggedIn$.next(false);
    }
}

export class FakeAuthService extends AuthService {
    public override login(username: string, password: string): Observable<any> {
        this.isLoggedIn$.next(true);
        localStorage.setItem(TOKEN_NAME, FAKE_TOKEN_VALUE);

        return of(new HttpResponse());
    }
}
