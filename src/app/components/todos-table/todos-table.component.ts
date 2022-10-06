import {Component, Input, OnInit} from '@angular/core';
import {ITodoItem} from "../../interfaces/ITodoItem";

@Component({
    selector: 'app-todos-table',
    templateUrl: './todos-table.component.html',
    styleUrls: ['./todos-table.component.scss']
})
export class TodosTableComponent implements OnInit {
    @Input() public todosData: ITodoItem[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

}
