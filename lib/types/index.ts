import { StaticImageData } from "next/image";

export interface NavLinks {
    label:string;   
    href:string;
    isIcon:boolean;
    
}
export interface FaqsData{
    id: string;
    question:string;
    answer?:string;
}



// product data type 
export interface ProductData {
    slug?:string;
    name:string;
    categories:string;
    description:string;
    price:number;
    image:string|StaticImageData;
}

export interface HealtyData {
    image:string|StaticImageData;
    description:string;
    title:string;
}

export interface HeroSectionData {
    image:string|StaticImageData;
    searchBar:boolean;
    multiGrad:boolean;
    markup:string;
    marukupCoords:string;
    mainText:string;
    subText:string;
    delay:string;

}
export type ButtonType = {
    className?: string
    onClick?: () => void
    children: string | React.ReactNode
}

export interface TestimonialData{
    name:string;
    desc:string;
    img:string|StaticImageData;
}