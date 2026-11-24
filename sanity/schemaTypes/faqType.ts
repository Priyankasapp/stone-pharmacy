
import { defineField, defineType, } from "sanity";

export const faqType = defineType({
    name:"faq",
    type:"document",
    title:"FAQ",
    fields:[
        defineField({
            name:"question",
            type:"string",
            validation:(rule) => rule.required(),
        }),
        defineField({
            name:"answer",
            type:"text",
            validation:(rule) => rule.required(),
        }),
    ],
});