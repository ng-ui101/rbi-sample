import {Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ITodoSearchParams} from "../../../../interfaces/ITodoSearchParams";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-filtered-subpage',
    templateUrl: './filtered-subpage.component.html',
    styleUrls: ['./filtered-subpage.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FilteredSubpageComponent implements OnInit, OnDestroy {
    @HostBinding('class.todos-filtered') private _filtered = true;

    public inputParams: ITodoSearchParams = null;

    private _sub: Subscription = Subscription.EMPTY;

    constructor(
        private _activateRoute: ActivatedRoute
    ) {

    }

    public ngOnInit(): void {
        this._sub = this._activateRoute.queryParams.subscribe((params) => {
            this.inputParams = {};

            if (params['completed'] === 'true') {
                this.inputParams.completed = true;
            }

            if (!!params['title']) {
                this.inputParams.title = params['title'];
            }
        });
    }

    public ngOnDestroy(): void {
        this._sub.unsubscribe();
    }

}
