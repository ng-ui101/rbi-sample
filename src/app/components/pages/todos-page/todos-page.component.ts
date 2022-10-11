import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-todos-page',
    templateUrl: './todos-page.component.html',
    styleUrls: ['./todos-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TodosPageComponent {
    @HostBinding('class.todos-page') private _page = true;
}
