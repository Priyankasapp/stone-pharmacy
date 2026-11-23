import { defineField, defineType } from "sanity";

export const seoType = defineType({
    name:"seo",
    title:"SEO",
    type:"object",
    fields:[
        defineField({ name:"title", title:"SEO Title", type:"string"}),
        defineField({ name:"description", title:"SEO Description", type:"text"}),
        defineField({ name:"image", title:"SEO Image", type:"image"}),

    ]
})