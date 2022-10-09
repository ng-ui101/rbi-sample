import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ITodoSearchParams} from "../../../../interfaces/ITodoSearchParams";

@Component({
    selector: 'app-filter-subpage',
    templateUrl: './filter-subpage.component.html',
    styleUrls: ['./filter-subpage.component.scss']
})
export class FilterSubpageComponent implements OnInit {

    public searchForm = this._formBuilder.group({
        title: '',
        completed: false
    });

    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
    }

    public confirm() {
        const params: ITodoSearchParams = {
            ...this.searchForm.value
        }

        this._goToFiltered(params);
    }

    private _goToFiltered(params: ITodoSearchParams) {
        this._router.navigate(['../filtered'], {
            relativeTo: this._route,
            queryParams: params
        });
    }
}
