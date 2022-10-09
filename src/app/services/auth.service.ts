import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {AuthApiService} from "./auth-api.service";
import {HttpResponse} from "@angular/common/http";
import {StorageService} from "./storage.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isLoggedIn$ = new BehaviorSubject<boolean>(false);

    get token(): string {
        return this._storageService.getAuthToken();
    }

    constructor(
        protected _authApiService: AuthApiService,
        protected _storageService: StorageService
    ) {
        this.isLoggedIn$.next(!!this.token);
    }

    login(username: string, password: string): Observable<any> {
        return this._authApiService.login(username, password).pipe(
            tap((response: any) => {
                this.isLoggedIn$.next(true);
                this._storageService.setAuthToken(response.token);
            })
        );
    }

    logout(): void {
        this._storageService.removeAuthToken();
        this.isLoggedIn$.next(false);
    }
}

export class FakeAuthService extends AuthService {
    private readonly _fakeTokenValue = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    public override login(username: string, password: string): Observable<any> {
        this.isLoggedIn$.next(true);
        this._storageService.setAuthToken(this._fakeTokenValue);

        return of(new HttpResponse());
    }
}
