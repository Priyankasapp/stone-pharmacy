"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { IconTick } from "./icons/IconTrick";
import { PaperBg } from "./icons/PaperBg";
import {  steps } from "@/lib/data";

const WhatWeOffer = () => {
  const [stepNo, setStepNo] = useState<number>(1);

  const currentStep = steps.find((s) => s.id === stepNo);

  useEffect(() => {
    const timer = setInterval(() => {
      setStepNo((prev) => (prev === 4 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex flex-col items-center relative gap-8 sm:gap-10 lg:gap-[40px]">
      <div className="w-full max-w-[1107px] flex flex-col lg:flex-row gap-6 lg:gap-24 justify-center items-center lg:items-stretch">
        <div className="relative w-full max-w-[447px] lg:max-w-none lg:w-3/8 h-[290px] sm:h-[318px] lg:h-auto flex flex-col justify-start overflow-hidden">
          <PaperBg className="absolute inset-0 w-full h-full pointer-events-none" />
          <div className="relative z-10 flex flex-col pl-[20%] sm:pl-[22%] lg:pl-[100px] pt-[38px] sm:pt-[44px] lg:pt-[60px] lg:gap-[36px]">
            {steps.map((step) => (
              <div
                key={step.id}
                className="h-[56px] sm:h-[62px] lg:h-auto flex items-center"
              >
                <h4
                  className={`text-xs sm:text-base lg:text-[18px] font-poppins flex items-center gap-2 sm:gap-3 lg:gap-16 transition-all duration-200 ${
                    step.id <= stepNo
                      ? "font-[600] text-text-primary"
                      : "text-dark-bg/60 font-[400]"
                  }`}
                >
                  <span>
                    {step.id}. {step.title}
                  </span>
                  {step.id <= stepNo && <IconTick className="shrink-0" />}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[447px] lg:max-w-none lg:w-3/8 border border-button-text/30 lg:border-0 rounded-2xl lg:rounded-none bg-[#F9FBFA] lg:bg-transparent p-4 sm:p-5 lg:p-0 relative flex flex-col lg:block items-center lg:items-stretch overflow-hidden">
          <div className="hidden lg:block w-full h-full relative items-center">
            {currentStep && (
              <Image
                src={currentStep.img}
                alt={currentStep.title}
                width={1000}
                height={1000}
                className="h-[320px] w-auto opacity-55"
              />
            )}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,1) 100%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.9) 70%, rgba(255,255,255,1) 100%)",
              }}
            />
            <div className="absolute z-[10] bottom-20 left-5">
              <h4 className="text-[24px] font-nyght">{currentStep?.title}</h4>
              <p className="font-poppins text-[16px]">{currentStep?.text}</p>
            </div>
          </div>

          <div className="lg:hidden flex flex-col sm:flex-row items-center gap-4 w-full">
            {currentStep && (
              <div className="w-full sm:w-[140px] h-[130px] sm:h-[110px] relative rounded-xl overflow-hidden shrink-0 bg-white shadow-sm">
                <Image
                  src={currentStep.img}
                  alt={currentStep.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex flex-col gap-1 w-full text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-nyght font-semibold text-text-primary">
                {currentStep?.title}
              </h4>
              <p className="font-poppins text-xs sm:text-sm text-dark-bg/80 leading-relaxed">
                {currentStep?.text}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="h-full max-h-[47px] w-full max-w-[240px] gap-24px rounded-12 font-poppins flex items-center text-[18px] font-[600] justify-center text-ice-blue  py-[10px] px-[24px] bg-[linear-gradient(180deg,#3E3D3E_0%,#403E40_79.91%,#5E5D5E_100%)] rounded-[12px] cursor-pointer border-2 border-black gap-8">
        View all conditions
      </button>
    </section>
  );
};

export default WhatWeOffer;
