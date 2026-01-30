export type Form = 'alcove' | 'fullyIntegrated' | 'panelTruck';

export type Transmission = 'automatic' | 'manual';

export type Engine = 'diesel' | 'petrol' | 'hybrid';

export interface GalleryItem {
   thumb: string;
   original: string; 
}

 export interface Review {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
 }

export interface Truck {
    id: string;
    name: string;
    price: number;
    rating: number;
    location: string;
    description: string;
    form: Form;
    length: string;
    width: string;
    height: string;
    tank: string;
    consumption: string;
    transmission: Transmission;
    engine: Engine;
    AC: boolean;
    bathroom: boolean;
    kitchen:boolean;
    TV: boolean;
    radio: boolean;
    refrigerator: boolean;
    microwave: boolean;
    gas: boolean;
    water: boolean;
    gallery: GalleryItem[];
    reviews: Review[];
};