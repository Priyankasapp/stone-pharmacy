import { FaqsData, HealtyData, HeroSectionData, NavLinks, ProductData } from "../types";
import Penadoll from "../../public/images/penadoll.svg";
import Halls from "../../public/images/Halls.svg";
import Plam from "../../public/images/plam.svg";
import img1 from "../../public/images/image (1).svg";
import img2 from "../../public/images/image (2).svg";
import img3 from "../../public/images/image (3).svg";
import photo1 from "../../public/images/photo1.svg";
import photo2 from "../../public/images/photo2.png";
import photo3 from "../../public/images/photo3.jpg";
import photo4 from "../../public/images/photo4.png";

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
    },
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

export const healthyData: HealtyData[] = [
    {
        title:'Weight Management',
        description:'Personalised support to help you archive your weight goals, your perfact diet plan including expert advice and treatment options.',
        image:img1,
    },
    {
        title:'Travel Vaccination',
        description:'Stay protected on your travels with essential vaccines, medicines and health advice tailored to your desctination.',
        image:img2,
    },
    {
        title:'Contraception Service',
        description:'Find convenient contraception services at your local pharmacy. Get personalised advice and options without a doctor visit.',
        image:img3,
    }
]


export const heroData: HeroSectionData[] = [
     {
            image: photo1,
            searchBar: true,
            multiGrad: true,
            markup: "underline",
            marukupCoords: "",
            mainText: "Feel Better Faster With Expert Care When You Need It",
            subText: "Skip the long waits and get professional medical advice quickly and discreetly. Start your online consultation today and take control of your health.",
            delay: "0s"
        },
        {
            image: photo2,
            searchBar: false,
            multiGrad: false,
            markup: "circle",
            marukupCoords: "260px",
            mainText: "Beat The Cough & Flu With Fast, Expert Care",
            subText: "Get personalized treatment and relief quickly with our online consultation — no waiting, just healing.",
            delay: "-12s"
        },
        {
            image: photo3,
            searchBar: false,
            multiGrad: false,
            markup: "underline",
            marukupCoords: "",
            mainText: "Your Health, Our Priority - Safe Travels Start Here  ",
            subText: "we provide expert advice and tailored care to ensure you stay healthy and protected during your travels. ",
            delay: "-8s"
        },
        {
            image: photo4,
            searchBar: false,
            multiGrad: false,
            markup: "circle",
            marukupCoords: "320px",
            mainText: "Achieve Your Weight Loss Goals With Our Support",
            subText: "Start your online consultation today and get personalized weight loss guidance, fast and discreetly.",
            delay: "-4s"
        }
]
