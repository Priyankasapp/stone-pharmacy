"use client";

import  { useRef } from "react";
import Slider from "react-slick";

import SparkLines from "./icons/SparkLines";
import SingleLine from "./icons/SingleLine";
import MessageIcon from "./icons/MessageIcon";
import StarIcon from "./icons/StarIcon";
import LeftArrow from "./icons/LeftArrow";
import RightArrow from "./icons/RightArrow";
import Frame from "./icons/Frame";
import Image from "next/image";
import imageTwo from "../../public/images/image.svg";
import imageThree from "../../public/images/Frame 48.png";
import imageFour from "../../public/images/image.png";
import imageFive from "../../public/images/image copy.png";
import { testimonialData } from "@/lib/data";



const TestimonialBentoSection = () => {

  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    arrows: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, 
  };

  return (
    <section className="relative flex w-full items-center justify-center px-4 py-10 sm:py-14 lg:px-8">
      <span className="pointer-events-none absolute hidden sm:block">
        <Frame />
      </span>

      <div className="relative flex w-full max-w-[1098px] flex-col items-center justify-center">
        {/* Heading */}
        <div className="relative mb-6 w-full sm:mb-8">
          <h2 className="nightSerif text-center text-2xl font-[400] leading-tight sm:text-3xl lg:text-[36px]">
            Trusted by Patients, Honoured by the Industry
          </h2>
          <span className="absolute left-[107px] top-3 hidden sm:block">
            <SparkLines />
          </span>
          <span className="absolute right-[38%] top-6 hidden sm:block">
            <SingleLine />
          </span>
        </div>

        
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.84fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-6">
         
          <div className="flex min-w-0 min-h-[440px] flex-col justify-between rounded-[16px] border border-[#A7E8E8] bg-white px-5 py-6 sm:min-h-[500px] sm:px-8 sm:py-8 lg:h-[595px] lg:min-h-0 lg:px-12 lg:py-[34px]">
         
            <div>
              <span>
                <MessageIcon />
              </span>
            </div>

            <div className="w-full overflow-hidden">
              <Slider ref={sliderRef} {...settings}>
                {testimonialData.map((item, index) => (
                  <div key={index} className="outline-none ">
                    <div className="mb-10 flex flex-col gap-6 sm:mb-16 sm:gap-8 lg:mb-40">
                      <p className="font-poppins text-[16px] font-[400] text-gray-800">
                        {item.desc}
                      </p>
                      <span>
                        <StarIcon />
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-[14px]">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="h-[60px] w-[60px] rounded-full object-cover"
                        />
                        <span className="poppins text-[16px] font-[500]">
                          {item.name}
                        </span>
                      </div>

                      <div className="z-10 flex items-center gap-[8px]">
                        <button
                          type="button"
                          onClick={() => sliderRef.current?.slickPrev()}
                          className="cursor-pointer transition-opacity hover:opacity-75"
                          aria-label="Previous testimonial"
                        >
                          <LeftArrow />
                        </button>
                        <button
                          type="button"
                          onClick={() => sliderRef.current?.slickNext()}
                          className="cursor-pointer transition-opacity hover:opacity-75"
                          aria-label="Next testimonial"
                        >
                          <RightArrow />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-col lg:gap-6">
            <div className="h-40 overflow-hidden rounded-[8px] sm:h-48 lg:h-[370px]">
              <Image
                src={imageTwo}
                alt="Patient care"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-40 overflow-hidden rounded-[8px] bg-[#00000033] sm:h-48 lg:h-[201px]">
              <Image
                src={imageThree}
                alt="Google"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-col lg:gap-6">
            <div className="h-40 overflow-hidden rounded-[8px] bg-[#00000033] sm:h-48 lg:h-[201px]">
              <Image
                src={imageFive}
                alt="Google"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-40 overflow-hidden rounded-[8px] sm:h-48 lg:h-[370px]">
              <Image
                src={imageFour}
                alt="Patient care"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialBentoSection;
