import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ITodoItem} from "../../interfaces/ITodoItem";
import {parseTodosData} from "../../utils/http-utils";
import {ITodoSearchParams} from "../../interfaces/ITodoSearchParams";

const PAGE_LIMIT: number = 15;

@Component({
    selector: 'app-todos-page',
    templateUrl: './todos-page.component.html',
    styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {
    constructor(
        private _dataService: DataService
    ) {
    }

    ngOnInit(): void {
    }
}
