import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IOffer} from "../../../interfaces/IOffer";

@Component({
    selector: 'app-offer-widget',
    templateUrl: './offer-widget.component.html',
    styleUrls: ['./offer-widget.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OfferWidgetComponent implements OnInit {
    @Input() public offerInfo: IOffer = null;

    @Input()
    @HostBinding('class.offer--recommended')
    public offerRecommend = false;

    @Input()
    @HostBinding('class.offer--mobile')
    public isMobileView: boolean = false;

    @HostBinding('class.offer') private _offer = true;

    constructor() {
    }

    ngOnInit(): void {
    }

}
