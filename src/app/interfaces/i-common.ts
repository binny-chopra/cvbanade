export interface IFaqs {
    id: string,
    title: string;
    description: string;
}

export interface ISectionWithImg {
    title: string,
    description: string;
    img: string;
    endCount?: number;
}

export interface ITestimonials {
    title: string,
    description: string;
    img: string;
    rating: number;
}

export interface IPricing {
    title: string;
    price: number;
    previousPrice: number;
    popular: boolean;
    features: string[];
}
