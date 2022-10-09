import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataApiService} from "../../../services/data-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-todos-subpage-page',
    templateUrl: './todos-page.component.html',
    styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit, OnDestroy {

    constructor(
        private _dataService: DataApiService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
    }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public goToTodos() {
        this._router.navigate(['todos'], { relativeTo: this._route });
    }

    public goToFilter() {
        this._router.navigate(['filter-form'], { relativeTo: this._route });
    }

    public goToFiltered() {
        this._router.navigate(['filtered'], { relativeTo: this._route });
    }
}
