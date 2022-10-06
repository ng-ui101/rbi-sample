import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-todos-page',
    templateUrl: './todos-page.component.html',
    styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

    constructor(
        dataService: DataService
    ) {
        dataService.getTodos({page: 1, limit: 4, completed: true}).subscribe(_ => console.log(+_.headers.getAll('x-total-count')))
    }

    ngOnInit(): void {
    }

}
