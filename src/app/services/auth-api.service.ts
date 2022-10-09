import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvironmentService} from "./environment.service";

@Injectable({
    providedIn: 'root'
})
export class AuthApiService {
    private readonly _url: string = null;

    constructor(
        private _http: HttpClient,
        private _environmentService: EnvironmentService,
    ) {
        this._url = this._environmentService.getValue('apiAuthUrl');
    }

    public login(username: string, password: string) {
        return this._http.post(this._url, { username, password });
    }
}
