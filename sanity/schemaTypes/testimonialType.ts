import { defineField, defineType } from "sanity";

export const Testtimonial = defineType({
    name:"testimonial",
    title:"Testimonial",
    type:"document",
    fields:[
        defineField({
            name:"name",
            title:"Name",
            type:"string",
            validation:(rule) => rule.required(),
        }),
        defineField({
            name:"quots",
            title:"Testimonial text",
            type:"text",
            rows:4,
            validation:(rule)=>rule.required(),
        }),
        defineField({
            name:"avtar",
            title:"Avtar",
            type:"image",
            options:{hotspot:true},
        }),
        
    ]
})