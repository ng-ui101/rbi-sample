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
    public disableNext: boolean = false;
    public disablePrevious: boolean = true;
    public currentPage: number = 1

    public searchData: ITodoItem[] = [];
    private _count: number = 0;

    constructor(
        private _dataService: DataService
    ) {
        this.getSearchData();
    }

    ngOnInit(): void {
    }

    public getSearchData(params: ITodoSearchParams = {limit: PAGE_LIMIT, page: this.currentPage}) {
        this._dataService.getTodos(params)
            .subscribe((res) => {
                const parsed = parseTodosData(res);
                this._count = parsed.count;
                this.searchData = parsed.data;
            })
    }

    public nextPage() {
        this.currentPage++;
        this.getSearchData();
        this._changeNavigationState();
    }

    public previousPage() {
        this.currentPage--;
        this.getSearchData();
        this._changeNavigationState();
    }

    private _changeNavigationState() {
        const remainder = this._count - this.currentPage * PAGE_LIMIT;
        this.disableNext = remainder <= 0;
        this.disablePrevious = this.currentPage <= 1;
    }
}
