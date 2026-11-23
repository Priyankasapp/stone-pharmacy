import { defineField, defineType } from "sanity";

export const productType = defineType({
    name:"product",
    title:"Products",
    type:"document",
    fields:[
        defineField({
            name:"name",
            title:"Product Name",
            type:"string",
            validation:(r) => r.required(),
        }),

        defineField({
            name:"slug",
            title:"Product slug",
            type:"slug",
            options:{ 
                source:"name",
                
            },
            validation:(r) => r.required(),
        }),
        defineField({
            name:"category",
            title:"Title",
            type:"reference",
            to:[{ type:"category"}]
        }),
        defineField({
            name:"Description",
            title:"Product Description",
            type:"text",
            rows:4,
        }),
        defineField({
            name:"image",
            title:"Product Image",
            type:"image",
            options:{
                hotspot:true,
            },
            fields:[
                defineField({
                    name:"alt",
                    title:"Alternative Text",
                    type:"string",
                }),
            ],
            validation:(Rule) =>Rule.required(),
        }),

        defineField({
           name: "isOffer",
      title: "Show Offer Badge",
      type: "boolean",
      initialValue: false,
        }),

    defineField({
      name: "offerLabel",
      title: "Offer Label",
      type: "string",
      initialValue: "Offer",
      hidden: ({ document }) => !document?.isOffer,
    }),
     defineField({
      name: "reviewCount",
      title: "Review Count",
      type: "number",
      initialValue: 0,
    }),
        defineField({
      name: "price",
      title: "Current Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "originalPrice",
      title: "Original Price",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "packSize",
      title: "Pack Size",
      type: "string",
      description: "Example: 2ML or 10 Tablets",
    }),

    defineField({
      name: "unitPrice",
      title: "Unit Price Description",
      type: "string",
      description: "Example: £92.50 per 100ML",
    }),

     defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seo",
    }),

    ],
    preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "category.title",
    },
  },
})