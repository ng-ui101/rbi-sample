import {Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-table-navigation',
    templateUrl: './table-navigation.component.html',
    styleUrls: ['./table-navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TableNavigationComponent implements OnInit {
    @HostBinding('class.table-navigation') private _nav = true;

    @Input() public disableNext: boolean = false;
    @Input() public disablePrevious: boolean = false;

    @Output() public toNext: EventEmitter<void> = new EventEmitter<void>();
    @Output() public toPrevious: EventEmitter<void> = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public next() {
        this.toNext.emit();
    }

    public previous() {
        this.toPrevious.emit();
    }
}
