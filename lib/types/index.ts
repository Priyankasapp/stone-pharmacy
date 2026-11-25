import { StaticImageData } from "next/image";
import { Image } from "sanity";

export interface NavLinks {
    label:string;   
    href:string;
    isIcon:boolean;
    
}
export interface FaqsData{
    __id:  | null | undefined;
    id: string;
    question:string;
    answer?:string;
}

export interface SeoData {
  title?: string;
  description?: string;
  metaImage?: Image | StaticImageData | string;
  keywords?: string[];
  canonicalUrl?: string;
  robots?: {
    noIndex?: boolean;
    noFollow?: boolean;
    noTranslate?: boolean;
    noImageIndex?: boolean;
  };
  openGraph?: Record<string, unknown>;
  twitter?: Record<string, unknown>;
}
export interface CategoryRef {
  _id: string;
  title: string;
  slug?: { current: string };
}


// product data type 
export interface ProductData {
  _id?: string;
  slug?: { current: string } | string;   
  name: string;
  category?: CategoryRef;                 
  description?: string;                   
  image: Image | StaticImageData | string;
  isOffer?: boolean;
  offerLabel?: string;
  reviewCount?: number;
  price: number;
  originalPrice?: number;
  packSize?: string;
  unitPrice?: string;
  seo?: SeoData;
}
export interface HealtyData {
    
  image: Image | StaticImageData | string;
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

export interface TestimonialData {
    _id: string;
    name: string;
    quots: string;
    avatarUrl?: string | null;
}

export interface Services{
    id:number;
    title:string;
    text:string;
    img:string|StaticImageData;
}

export interface Steps{
    id:number;
    title:string;
    text:string;
    img:string | StaticImageData;
}
