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
            metaImage,
            keywords,
            canonicalUrl,
            robots,
            openGraph,
            twitter
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
        metaImage,
        keywords,
        canonicalUrl,
        robots,
        openGraph,
        twitter
        }
    }
`;

export const faqQuery = groq `
    *[_type == "faq"]{
  _id,
  question,
  answer
}
  `

  export const healthyQuery = groq `
  *[_type == "healthyData"]{
  image,
  _id,
  description,
  title
}

`


export const serviceQuery = groq `
*[_type == 'service'] | order(order asc){
  _id,
  order,
  image{..., "alt": alt},
  text,
  title
}
  `

  export const testimonialQuery = groq `
  *[_type == "testimonial"] | order(_createdAt asc){
  _id,
  name,
  quots,
  "avatarUrl": avtar.asset->url
}`