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
import Characterstics from "./Characterstics";

const Hero = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
  };

  return (
    <section className="flex w-full justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="flex w-full justify-center flex-col max-w-[1320px]">
        <div className="relative flex h-[467px] w-full  overflow-hidden rounded-[12px]">
          <Slider ref={sliderRef} {...settings} className="h-full w-full">
            {heroData.map((banner, index) => (
              <div key={index} className="h-[467px]">
                <div className="relative isolate h-[467px] w-full overflow-hidden rounded-[12px] px-[30px] py-[15px]">
                  {/* ---------- Background / Gradients ---------- */}
                  {banner.multiGrad ? (
                    <div className="absolute inset-0 left-[-100px] z-[-1] overflow-hidden">
                      <Image
                        src={banner.image}
                        alt="Hero Background"
                        className="ml-auto h-full w-auto"
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
                        className="ml-auto h-full w-auto"
                        width={1000}
                        height={1000}
                      />
                      <WhiteGradient className="left-[-350px] top-[-50px]" />
                      <SkinGradient className="left-[-100px] top-[-200px] z-[2]" />
                      <PurpleGradient className="right-[-300px] top-[-300px] opacity-30 blur-[100px]" />
                    </div>
                  )}

                  {/* ---------- Content ---------- */}
                  <div className="flex w-full flex-col gap-[24px]  lg:w-[50%] pl-[120px] pt-[60px]">
                    <h1 className="font-nyght text-[36px] font-[600] text-text-primary">
                      {banner.mainText}
                      {banner.markup === "underline" ? (
                        <RedUnderline />
                      ) : (
                        <RedCircle
                          className="absolute top-[50px]"
                          style={{ left: banner.marukupCoords }}
                        />
                      )}
                    </h1>

                    <p className="font-poppins text-[18px] font-[300] text-text-secondary">
                      {banner.subText}
                    </p>

                    {banner.searchBar ? (
                      <div className="flex flex-col gap-[24px]">
                        <div className="flex h-[48px] w-full max-w-[578px] gap-[8px] rounded-[16px] border border-[#BABABA] bg-[#F0F0F0]">
                          <input
                            className="w-full py-[10px] pl-[12px] pr-[4px] font-poppins text-[16px] outline-none"
                            placeholder="Search Conditions (e.g stomach ache)"
                          />
                          <Button className="font-[600]">Search</Button>
                        </div>
                        <p className="text-[16px]">
                          or{" "}
                          <a className="cursor-pointer underline">
                            view all conditions
                          </a>
                        </p>
                      </div>
                    ) : (
                      <Button className="mt-[12px] self-start">Book Now</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* <Characterstics /> */}
      </div>
    </section>
  );
};

export default Hero;


