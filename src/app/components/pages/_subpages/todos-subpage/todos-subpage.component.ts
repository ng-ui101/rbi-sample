import {Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-todos-subpage',
    templateUrl: './todos-subpage.component.html',
    styleUrls: ['./todos-subpage.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TodosSubpageComponent {
    @HostBinding('class.todos-subpage') private _wrapper = true;
}
