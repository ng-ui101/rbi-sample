import {Component, OnDestroy} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    constructor(
        private _authService: AuthService,
    ) {
        // FAKE LOGIN:
        this._authService.login('', '').subscribe();
    }

    public ngOnDestroy(): void {
        // FAKE LOGOUT:
        this._authService.logout();
    }
}
