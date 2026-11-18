"use client";
import Image from "next/image";

import { VectorOne, VectorTwo } from "./icons/VectorIcon";

import { useEffect, useState } from "react";
import { IconTick } from "./icons/IconTrick";
import { steps } from "@/lib/data";

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
      <div className="w-full max-w-[1098px] flex flex-col lg:flex-row gap-6 lg:gap-24 justify-center items-center lg:items-stretch">
        <div className="relative w-full">
          <div className="absolute left-10 top-0 bottom-0 z-0 pointer-events-none">
            <span className="absolute left-10 z-0">
              <VectorOne />
            </span>
            <span className="w-full absolute top-5">
              <VectorTwo />
            </span>

            <ul className="relative flex top-10 flex-col">
              {steps.map((item) => {
                const isActive = item.id === stepNo;

                return (
                  <li key={item.id} className="flex flex-col">
                    <div
                      className={`pl-20 py-3 top-6 font-poppins text-base flex gap-8 transition-all duration-300 ${
                        isActive
                          ? "font-[600] text-text-primary"
                          : "font-[400] text-dark-bg/60"
                      }`}
                    >
                      <span>
                        {item.id}. {item.title}
                      </span>
                      <span>
                        {isActive && <IconTick className="shrink-0" />}
                      </span>
                    </div>
                    <span className="w-full pointer-events-none pb-5">
                      <VectorTwo />
                    </span>
                  </li>
                );
              })}
            </ul>
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
