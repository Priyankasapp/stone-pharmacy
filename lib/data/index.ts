import {  HeroSectionData, NavLinks,  Services } from "../types";

import photo1 from "../../public/images/photo1.svg";
import photo2 from "../../public/images/photo2.png";
import photo3 from "../../public/images/photo3.jpg";
import photo4 from "../../public/images/photo4.png";

import WeightManagement from "../../public/images/WeightManagement.png";
import TravelVaccine from "../../public/images/TravelVaccine.png";
import Contraception from "../../public/images/Contraception.png";

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


export const services:Services[]=[
   {
            id: 1,
            title: "Weight Management",
            text: "Personalised support to help you achieve your weight goals, your perfect diet plan including expert advice and treatment options.",
            img: WeightManagement,
        },
        {
            id: 2,
            title: "Travel Vaccination",
            text: "Stay protected on your travels with essential vaccines, medicines and health advice tailored to your destination.",
            img: TravelVaccine
        },
        {
            id: 3,
            title: "Contraception Service",
            text: "Find convenient contraception services at your local pharmacy. Get personalised advice and options without a doctor visit.",
            img: Contraception
        },
]
