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

