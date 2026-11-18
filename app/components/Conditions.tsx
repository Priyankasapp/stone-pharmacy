"use client";
import Image from "next/image";

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
    <section className="w-full flex flex-col items-center relative gap-8 px-4 py-10 sm:px-6 sm:gap-10 lg:px-8 lg:gap-[40px]">
      <div className="w-full max-w-[1098px] flex flex-col lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,447px)] gap-6 lg:gap-16 justify-center items-stretch">
        <ol className="relative flex w-full flex-col rounded-2xl border border-button-text/30 p-4 lg:border-0 lg:p-0">
          {steps.map((item) => {
            const isActive = item.id === stepNo;

            return (
              <li key={item.id} className="relative flex items-center gap-3 py-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-poppins ${
                    isActive
                      ? "border-manganese-blue bg-manganese-blue text-white"
                      : "border-button-text/30 bg-white text-dark-charcoal"
                  }`}
                >
                  {item.id}
                </span>
                <span
                  className={`font-poppins text-sm sm:text-base transition-all duration-300 ${
                    isActive
                      ? "font-[600] text-text-primary"
                      : "font-[400] text-dark-bg/60"
                  }`}
                >
                  {item.title}
                </span>
                {isActive && <IconTick className="ml-auto shrink-0" />}
              </li>
            );
          })}
        </ol>

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

      <button className="min-h-[47px] w-full max-w-[240px] rounded-[12px] border-2 border-black bg-[linear-gradient(180deg,#3E3D3E_0%,#403E40_79.91%,#5E5D5E_100%)] px-6 py-2.5 font-poppins flex items-center text-[18px] font-[600] justify-center text-ice-blue cursor-pointer">
        View all conditions
      </button>
    </section>
  );
};

export default WhatWeOffer;
