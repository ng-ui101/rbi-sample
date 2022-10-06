import {Component, Input} from '@angular/core';
import {ITodoSearchParams} from "../../interfaces/ITodoSearchParams";
import {parseTodosData} from "../../utils/http-utils";
import {DataService} from "../../services/data.service";
import {ITodoItem} from "../../interfaces/ITodoItem";

const PAGE_LIMIT: number = 15;

@Component({
    selector: 'app-todos-table-wrapper',
    templateUrl: './todos-table-wrapper.component.html',
    styleUrls: ['./todos-table-wrapper.component.scss']
})
export class TodosTableWrapperComponent {
    @Input() public params: ITodoSearchParams = null;

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

    public getSearchData() {
        let innerParams: ITodoSearchParams = {limit: PAGE_LIMIT, page: this.currentPage}

        if (this.params) {
            innerParams = {
                ...this.params,
                ...innerParams
            }
        }

        this._dataService.getTodos(innerParams)
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
