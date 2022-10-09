import {Component, Input, OnInit} from '@angular/core';
import {ITodoSearchParams} from "../../../interfaces/ITodoSearchParams";
import {parseTodosData} from "../../../utils/http-utils";
import {DataApiService} from "../../../services/data-api.service";
import {ITodoItem} from "../../../interfaces/ITodoItem";

const DEFAULT_PAGE_LIMIT: number = 15;

@Component({
    selector: 'app-todos-table-wrapper',
    templateUrl: './todos-table-wrapper.component.html',
    styleUrls: ['./todos-table-wrapper.component.scss']
})
export class TodosTableWrapperComponent implements OnInit{
    @Input() public params: ITodoSearchParams = null;

    public disableNext: boolean = true;
    public disablePrevious: boolean = true;
    public currentPage: number = 1

    public searchData: ITodoItem[] = [];
    private _count: number = 0;

    constructor(
        private _dataService: DataApiService
    ) {
    }

    public ngOnInit(): void {
        this.getSearchData();
    }

    public getSearchData() {
        let innerParams: ITodoSearchParams = {limit: DEFAULT_PAGE_LIMIT, page: this.currentPage}

        if (this.params) {
            innerParams = {
                ...innerParams,
                ...this.params
            }
        }

        this._dataService.getTodos(innerParams)
            .subscribe((res) => {
                const parsed = parseTodosData(res);
                this._count = parsed.count;
                this.searchData = parsed.data;

                this._changeNavigationState();
            })
    }

    public nextPage() {
        this.currentPage++;
        this.getSearchData();
    }

    public previousPage() {
        this.currentPage--;
        this.getSearchData();
    }

    private _changeNavigationState() {
        if (this._count <= DEFAULT_PAGE_LIMIT) {
            this.disableNext = true;
            this.disablePrevious = true;
            return;
        }
        const remainder = this._count - this.currentPage * DEFAULT_PAGE_LIMIT;
        this.disableNext = remainder <= 0;
        this.disablePrevious = this.currentPage <= 1;
    }
}
