import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataApiService} from "../../services/data-api.service";
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-todos-page',
    templateUrl: './todos-page.component.html',
    styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit, OnDestroy {
    public isLoggedIn$: Observable<boolean> = new Observable<boolean>();

    constructor(
        private _dataService: DataApiService,
        private _authService: AuthService
    ) {
        this.isLoggedIn$ = this._authService.isLoggedIn$.asObservable();
        // FAKE LOGIN:
        this._authService.login('', '').subscribe();
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        // FAKE LOGOUT:
        this._authService.logout();
    }
}
