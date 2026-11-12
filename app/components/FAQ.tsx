/* eslint-disable react-hooks/refs */
"use client";

import { useRef, useState } from "react";
import MinusIcon from "./icons/MinusIcon";
import PlussIcon from "./icons/PlussIcon";
import RoundIcon from "./icons/RoundIcon";
import { faqsData } from "@/lib/data";

const FAQ = () => {
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 items-center justify-center flex">
      <div className="relative w-full max-w-[1098px]">
        <div className="relative mb-8">
          <h2 className="relative z-10 font-nightSerif font- text-[36px] text-center">
            Frequently asked questions
          </h2>
          <span
            className="absolute left-[410px] top-[30px] -translate-x-1/2 -translate-y-1/2 w-[120%] pointer-events-none -z-10 block"
            style={{
              width: "199.41px",
              height: "78.03px",
            }}
          >
            <RoundIcon />
          </span>
        </div>

        <div className="flex flex-col gap-[20px]">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border flex flex-col border-ice-blue p-[24px]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex items-center justify-between w-full text-left cursor-pointer focus:outline-none"
                >
                  <p className="font-poppins font-medium text-[24px] text-card-blue">
                    {faq.question}
                  </p>
                  <span className="shrink-0 ml-4">
                    {isOpen ? <MinusIcon /> : <PlussIcon />}
                  </span>
                </button>

                <div
                  ref={(el) => {
                    faqRefs.current[index] = el;
                  }}
                  style={{
                    maxHeight: isOpen
                      ? `${faqRefs.current[index]?.scrollHeight}px`
                      : "0px",
                  }}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <p className="font-poppins font- text-[16px] pt-[16px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
