import { groq } from "next-sanity";

export const productsQuery = groq `
    *[_type == "product"] | order(_createdAt desc){
        _id,
        name,
        slug,
        "category": category->{_id, title, slug},
        "description": Description,
        image{..., "alt": alt},
        isOffer,
        offerLabel,
        reviewCount,
        price,
        originalPrice,
        packSize,
        unitPrice,
        seo{
            title,
            description,
            image
        }
    }
`;

export const productBySlugQuery = groq `
    *[_type =="product" && slug.current == $slug][0]{
        _id, 
        name,
        slug,
        "category":category->{_id, title, slug},
        "description":Description,
        image{..., "alt":alt},
        isOffer,
        offerLabel, 
        reviewCount,
        price,
        originalPrice,
        packSize,
        unitPrice,
        seo{
        title,
        description,
        image
        }
    }
`;