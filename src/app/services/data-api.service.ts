import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {EnvironmentService} from "./environment.service";
import {Observable} from "rxjs";
import {ITodoSearchParams} from "../interfaces/ITodoSearchParams";
import {setTodosFilterParams} from "../utils/http-utils";

@Injectable({
    providedIn: 'root'
})
export class DataApiService {
    private readonly _url: string = null;

    constructor(
        private _http: HttpClient,
        private _environmentService: EnvironmentService,
    ) {
        this._url = this._environmentService.getValue('apiUrl');
    }

    public getTodos(params: ITodoSearchParams): Observable<HttpResponse<any>> {
        return this._http.get(`${this._url}/todos`, {
            params: setTodosFilterParams(params),
            observe: 'response'
        });
    }
}
