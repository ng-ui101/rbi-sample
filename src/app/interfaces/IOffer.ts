export type OfferType = 'short' | 'middle' | 'long'

export interface IOffer {
    offerType: OfferType;
    term: string;
    description: string;
    price: number;
    oldPrice: number;
    ctaText: string;
    ctaCallback: () => void;
    ctaDescription: string;
}
