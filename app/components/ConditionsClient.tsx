"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconTick } from "./icons/IconTrick";
import { VectorOne, VectorTwo } from "./icons/VectorIcon";

type Condition = {
  _id: string;
  title: string;
  text: string;
  imageUrl?: string;
};

const ConditionsClient = ({ conditions }: { conditions: Condition[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (conditions.length < 2) return;

    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % conditions.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [conditions.length]);

  if (conditions.length === 0) return null;

  const currentIndex = activeIndex % conditions.length;
  const currentCondition = conditions[currentIndex];

  return (
    <section className="relative flex w-full flex-col items-center gap-8 sm:gap-10 lg:gap-[40px]">
      <div className="flex w-full max-w-[1098px] flex-col items-center justify-center gap-6 lg:flex-row lg:items-stretch lg:gap-24">
        <div className="relative w-full">
          <div className="pointer-events-none absolute bottom-0 left-10 top-0 z-0">
            <span className="absolute left-10 z-0">
              <VectorOne />
            </span>
            <span className="absolute top-5 w-full">
              <VectorTwo />
            </span>

            <ul className="relative top-10 flex flex-col">
              {conditions.map((condition, index) => {
                const isActive = index === currentIndex;

                return (
                  <li key={condition._id} className="flex flex-col">
                    <div
                      className={`top-5 flex gap-8 py-3 pl-20 font-poppins text-base transition-all duration-300 ${
                        isActive
                          ? "font-[600] text-text-primary"
                          : "font-[400] text-dark-bg/60"
                      }`}
                    >
                      <span>
                        {index + 1}. {condition.title}
                      </span>
                      <span>
                        {isActive && <IconTick className="shrink-0" />}
                      </span>
                    </div>
                    <span className="pointer-events-none w-full pb-5">
                      <VectorTwo />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="relative flex w-full max-w-[447px] flex-col items-center overflow-hidden rounded-2xl border border-button-text/30 bg-[#F9FBFA] p-4 sm:p-5 lg:block lg:max-w-none lg:w-3/8 lg:items-stretch lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
          <div className="relative hidden h-full min-h-[320px] w-full items-center lg:block">
            {currentCondition.imageUrl && (
              <Image
                src={currentCondition.imageUrl}
                alt={currentCondition.title}
                width={2000}
                height={2000}
                className="absolute right-0 top-0 h-[388px]  w-[556px] opacity-55"
              />
            )}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,1) 100%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.9) 70%, rgba(255,255,255,1) 100%)",
              }}
            />
            <div className="absolute bottom-20 left-5 z-[10]">
              <h4 className="text-[24px] font-nyght">{currentCondition.title}</h4>
              <p className="font-poppins text-[16px]">{currentCondition.text}</p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-4 lg:hidden sm:flex-row">
            {currentCondition.imageUrl && (
              <div className="relative h-[130px] w-full shrink-0 overflow-hidden rounded-xl bg-white shadow-sm sm:h-[110px] sm:w-[140px]">
                <Image
                  src={currentCondition.imageUrl}
                  alt={currentCondition.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex w-full flex-col gap-1 text-center sm:text-left">
              <h4 className="font-nyght text-base font-semibold text-text-primary sm:text-lg">
                {currentCondition.title}
              </h4>
              <p className="font-poppins text-xs leading-relaxed text-dark-bg/80 sm:text-sm">
                {currentCondition.text}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="flex h-full max-h-[47px] w-full max-w-[240px] cursor-pointer items-center justify-center gap-8 rounded-[12px] border-2 border-black bg-[linear-gradient(180deg,#3E3D3E_0%,#403E40_79.91%,#5E5D5E_100%)] px-[24px] py-[10px] font-poppins text-[18px] font-[600] text-ice-blue">
        View all conditions
      </button>
    </section>
  );
};

export default ConditionsClient;
