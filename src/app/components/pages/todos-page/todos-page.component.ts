import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataApiService} from "../../../services/data-api.service";

@Component({
    selector: 'app-todos-subpage-page',
    templateUrl: './todos-page.component.html',
    styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit, OnDestroy {

    constructor(
        private _dataService: DataApiService,
    ) {
    }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
    }
}
