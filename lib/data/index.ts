import { FaqsData, NavLinks, ProductData } from "../types";
import Penadoll from "../../public/images/penadoll.svg";
import Halls from "../../public/images/Halls.svg";
import Plam from "../../public/images/plam.svg";

export const navLink: NavLinks[] = [
    {
     label:"NHS Care & Support ",
     href:"/",   
     isIcon:true,
    },
    {
        label:"Lifestyle Treatments",
        href:"/",
        isIcon:true,
    },
    {
        label:"Everyday Ailments",
        href:"/",
        isIcon:true,

    },{
        label:"Shop",
        href:"/",
        isIcon:false
    }
    

]

export const faqsData: FaqsData[] = [
    {
        id:'',
        question:'How can Pharmacy First save time?',
        answer:'Pharmacy First will help you get seen by a  healthcare professional quickly.Instead of waiting for a GP appointment, going to A&E or attending out-of-hours NHS services '
    },
    {
        id:'',
        question:'What are the benefits of Pharmacy First?',
        answer:''
    },
    {
        id:'',
        question:'How can Pharmacy First save time?',
        answer:''
    },
    {
        id:'',
        question:'How can Pharmacy First save time?',
        answer:''
    },
    {
        id:'',
        question:'How can Pharmacy First save time?',
        answer:''
    }
]

export const productData: ProductData[] = [
    {
        slug:'plum-cream',
        name:'Plum Cream',
        categories:'Health & Beauty',
        description:'Effective for 62-82% of men, works in 25 mins and lasts 4-5 hours.',
        price:10,
        image:Plam,
    },
    {
        slug:'panadol',
        name:'Panadol',
        categories:'Pain Relif',
        description:'Effective for 62-82% of men, Works in 25 mins and lasts 4-5 hours.',
        price:6,
        image:Penadoll,
    },
    {
        slug:'halls',
        name:'Halls',
        categories:'Lozenges',
        description:'Effective for 62-82% of men, Works in 25 mins and lasts 4-5 hours.',
        price:9,
        image:Halls,
    }
]