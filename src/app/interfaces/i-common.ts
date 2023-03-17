export interface IFaqs {
    id: string,
    title: string;
    description: string;
}

export interface ISectionWithImg {
    title: string,
    description: string;
    img: string;
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
    popular: boolean;
    features: string[];
}
