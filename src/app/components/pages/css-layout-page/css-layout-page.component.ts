import {Component, HostBinding, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {IOffer, OfferType} from "../../../interfaces/IOffer";

@Component({
    selector: 'app-css-layout-page',
    templateUrl: './css-layout-page.component.html',
    styleUrls: ['./css-layout-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CssLayoutPageComponent implements OnInit {
    public get isMobileView(): boolean {
        return innerWidth <= 375;
    }

    public innerWidth: number

    @HostBinding('class.promo-page') private _promoPage = true;

    @HostListener('window:resize', ['$event'])
    private _onResize(event: any) {
        this.innerWidth = event.target.innerWidth;
    }

    constructor(
    ) {
    }

    ngOnInit(): void {
    }

    public getOfferInfo(offerType: OfferType): IOffer {
        switch (offerType) {
            case 'short':
                return {
                    offerType: 'short',
                    term: '1 месяц',
                    description: 'Для тех, кто пробует',
                    price: 299,
                    oldPrice: 499,
                    ctaText: 'Начать 7 дней бесплатно',
                    ctaCallback(): void { console.log(this.offerType) },
                    ctaDescription: 'Ежемесячная оплата',
                }
            case 'middle':
                return {
                    offerType: 'middle',
                    term: '1 год',
                    description: 'Для тех, кто настроен серьезно',
                    price: 249,
                    oldPrice: 499,
                    ctaText: 'Купить подписку',
                    ctaCallback(): void { console.log(this.offerType) },
                    ctaDescription: 'При оплате 2990 ₽ за год',
                    cents: 50
                }
            case 'long':
                return {
                    offerType: 'long',
                    term: '50 лет',
                    description: 'Для тех, кто ищет максимальную выгоду',
                    price: 41,
                    oldPrice: 499,
                    ctaText: 'Купить подписку',
                    ctaCallback(): void { console.log(this.offerType) },
                    ctaDescription: 'При оплате 24 990 ₽ навсегда',
                    cents: 92
                }
        }
    }
}
