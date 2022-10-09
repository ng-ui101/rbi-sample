import {Injectable} from '@angular/core';

const AUTH_TOKEN_NAME = 'auth_token'

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    public getAuthToken(): string {
        return localStorage.getItem(AUTH_TOKEN_NAME);
    }

    public setAuthToken(value: string): void {
        localStorage.setItem(AUTH_TOKEN_NAME, value);
    }

    public removeAuthToken(): void {
        localStorage.removeItem(AUTH_TOKEN_NAME);
    }
}
