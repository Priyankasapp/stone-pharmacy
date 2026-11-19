"use client";

import { heroData } from "@/lib/data";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import {
  BlueGradient,
  PurpleGradient,
  SkinGradient,
  WhiteGradient,
} from "./ui/Gradients";
import RedCircle from "./icons/RedCircles";
import RedUnderline from "./icons/RedUnderline";
import Button from "./Button";

const Hero = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
  };

  return (
    <section className="mt-24 flex w-full justify-center px-4 py-8 sm:mt-28 sm:px-6 sm:py-14 lg:px-8">
      <div className="flex w-full justify-center flex-col max-w-[1320px]">
        <div className="relative flex h-[520px] w-full overflow-hidden rounded-[12px] sm:h-[500px] lg:h-[467px]">
          <Slider ref={sliderRef} {...settings} className="h-full w-full">
            {heroData.map((banner, index) => (
              <div key={index} className="h-[520px] sm:h-[500px] lg:h-[467px]">
                <div className="relative isolate h-[520px] w-full overflow-hidden rounded-[12px] px-5 py-7 sm:h-[500px] sm:px-10 sm:py-10 lg:h-[467px] lg:px-[30px] lg:py-[15px]">
               
                  {banner.multiGrad ? (
                    <div className="absolute inset-0 left-[-100px] z-[-1] overflow-hidden">
                      <Image
                        src={banner.image}
                        alt="Hero Background"
                        className="ml-auto h-full w-full object-cover object-right sm:w-auto"
                        width={1000}
                        height={1000}
                      />
                      <WhiteGradient className="inset-y-0 left-[-350px] opacity-[0.98]" />
                      <SkinGradient className="left-[-200px] top-[-300px] z-[2]" />
                      <BlueGradient className="bottom-[-350px] left-[-200px] z-[2] rotate-[10deg]" />
                      <PurpleGradient className="right-[-300px] top-[-300px] opacity-30 blur-[100px]" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 left-[-100px] z-[-1] overflow-hidden">
                      <Image
                        src={banner.image}
                        alt="Hero Background"
                        className="ml-auto h-full w-full object-cover object-right sm:w-auto"
                        width={1000}
                        height={1000}
                      />
                      <WhiteGradient className="left-[-350px] top-[-50px]" />
                      <SkinGradient className="left-[-100px] top-[-200px] z-[2]" />
                      <PurpleGradient className="right-[-300px] top-[-300px] opacity-30 blur-[100px]" />
                    </div>
                  )}

               
                  <div className="relative z-[3] flex w-full flex-col gap-4 rounded-2xl bg-white/70 p-4 backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:gap-5 lg:w-[58%] lg:gap-[24px] lg:pl-[90px] lg:pt-[45px] xl:pl-[120px] xl:pt-[60px]">
                  {index === 0 ?
                   <h1 className="font-nightSerif text-reach-blue-green text-[30px] font-[600] leading-tight text-text-primary sm:text-[34px] lg:text-[36px]">
                      {banner.mainText}
                      {banner.markup === "underline" ? (
                        <RedUnderline className="h-auto w-[170px] top-[100px] right-5 absolute sm:w-[210px] lg:w-[232px]" />
                      ) : (
                        <RedCircle
                          className="absolute top-[35px] h-auto w-[170px] sm:top-[45px] sm:w-[210px] lg:top-[60px] lg:w-[236px]"
                          style={{
                            left: `min(${banner.marukupCoords}, calc(100vw - 200px))`,
                          }}
                        />
                      )}
                    </h1>
                  : <h2 className="font-nightSerif text-reach-blue-green text-[30px] font-[600] leading-tight text-text-primary sm:text-[34px] lg:text-[36px]">
                      {banner.mainText}
                      {banner.markup === "underline" ? (
                        <RedUnderline className="h-auto w-[170px] sm:w-[210px] absolute top-[100px] right-5 lg:w-[232px]" />
                      ) : (
                        <RedCircle
                          className="absolute top-[35px] h-auto w-[170px] sm:top-[45px] sm:w-[210px] lg:top-[45px] lg:w-[236px]"
                          style={{
                            left: `min(${banner.marukupCoords}, calc(70vw - 180px))`,
                          }}
                        />
                      )}
                    </h2>}
                   

                    <p className="max-w-[560px] font-poppins text-[15px] font-[300] leading-6 text-text-secondary sm:text-base lg:text-[18px]">
                      {banner.subText}
                    </p>

                    {banner.searchBar ? (
                      <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="flex h-[48px] w-full max-w-[578px] min-w-0 gap-2 rounded-[16px] border border-[#BABABA] bg-[#F0F0F0] items-center ">
                          <input
                            className="min-w-0 flex-1 rounded-l-[16px] bg-transparent py-[10px] pl-[12px] pr-[4px] font-poppins text-sm outline-none sm:text-base"
                            placeholder="Search Conditions (e.g stomach ache)"
                          />
                          <Button className="max-w-[120px] px-3 text-sm sm:max-w-[170px] sm:px-6 sm:text-base">Search</Button>
                        </div>
                        <p className="text-sm sm:text-base">
                          or{" "}
                          <a className="cursor-pointer underline">
                            view all conditions
                          </a>
                        </p>
                      </div>
                    ) : (
                      <Button className="mt-1 self-start sm:mt-3">Book Now</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Hero;