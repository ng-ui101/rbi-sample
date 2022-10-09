import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-filter-subpage',
    templateUrl: './filter-subpage.component.html',
    styleUrls: ['./filter-subpage.component.scss']
})
export class FilterSubpageComponent implements OnInit {

    public searchForm = this._formBuilder.group({
        title: '',
        isCompleted: false
    });

    constructor(
        private _formBuilder: FormBuilder
    ) {
    }

    ngOnInit(): void {
    }

    public confirm() {

    }
}
