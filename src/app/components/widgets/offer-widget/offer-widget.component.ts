import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IOffer} from "../../../interfaces/IOffer";

@Component({
    selector: 'app-offer-widget',
    templateUrl: './offer-widget.component.html',
    styleUrls: ['./offer-widget.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OfferWidgetComponent implements OnInit {
    @HostBinding('class.offer') private _offer = true;

    @Input()
    @HostBinding('class.offer--recommended')
    public offerRecommend = false;

    @Input() public offerInfo: IOffer = null;

    constructor() {
    }

    ngOnInit(): void {
    }

}
