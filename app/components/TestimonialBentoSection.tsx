"use client";

import React, { useRef } from "react";
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
      <span className="absolute">
        <Frame />
      </span>

      <div className="relative flex w-full max-w-[1098px] flex-col items-center justify-center">
        {/* Heading */}
        <div className="relative mb-8">
          <h2 className="nightSerif text-[36px] font-[400]">
            Trusted by Patients, Honoured by the Industry
          </h2>
          <span className="absolute -left-10 top-3">
            <SparkLines />
          </span>
          <span className="absolute left-[360px] top-6">
            <SingleLine />
          </span>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col lg:flex-row gap-[24px] w-full">
          {/* ----- Left Testimonial Card with Slick ----- */}
          <div className="flex h-[595px] w-full lg:w-[508px] flex-col justify-between rounded-[16px] border border-[#A7E8E8] bg-white px-[48px] py-[34px]">
            {/* Top Static Icon */}
            <div>
              <span>
                <MessageIcon />
              </span>
            </div>

            {/* Middle & Bottom Slider Content */}
            <div className="w-full overflow-hidden">
              <Slider ref={sliderRef} {...settings}>
                {testimonialData.map((item, index) => (
                  <div key={index} className="outline-none ">
                    <div className="flex flex-col gap-[32px] mb-40">
                      <p className="poppins text-[16px] font-[400] text-gray-800">
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

          {/* ----- Middle Column ----- */}
          <div className="flex flex-col gap-[24px]">
            <div className="h-[370px] w-[271px] overflow-hidden rounded-[8px]">
              <Image
                src={imageTwo}
                alt="Patient care"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[201px] w-[271px] overflow-hidden rounded-[8px] bg-[#00000033]">
              <Image
                src={imageThree}
                alt="Google"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* ----- Right Column ----- */}
          <div className="flex flex-col gap-[24px]">
            <div className="h-[201px] w-[271px] overflow-hidden rounded-[8px] bg-[#00000033]">
              <Image
                src={imageFive}
                alt="Google"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[370px] w-[271px] overflow-hidden rounded-[8px]">
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
