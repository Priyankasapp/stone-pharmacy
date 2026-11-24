"use client";

import { useState } from "react";
import MinusIcon from "./icons/MinusIcon";
import PlussIcon from "./icons/PlussIcon";
import RoundIcon from "./icons/RoundIcon";
import { FaqsData } from "@/lib/types";

const FAQClient = ({ faqsData }: { faqsData: FaqsData[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 items-center justify-center flex">
      <div className="relative w-full max-w-[1098px]">
        <div className="relative mb-8">
          <h2 className="relative z-10 text-center font-nightSerif text-2xl leading-tight sm:text-3xl lg:text-[36px]">
            Frequently asked questions
          </h2>
          <span
            className="pointer-events-none absolute right-[485px] top-[24px] -z-10 hidden -translate-x-1/2 -translate-y-1/2 sm:block"
            style={{ width: "199.41px", height: "78.03px" }}
          >
            <RoundIcon />
          </span>
        </div>

        <div className="flex flex-col gap-[20px]">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.__id}
                className="flex flex-col border border-ice-blue rounded-[8px] p-4 sm:p-6"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex items-center justify-between w-full text-left cursor-pointer focus:outline-none"
                >
                  <p
                    className={`font-poppins text-base font-medium leading-snug sm:text-lg lg:text-2xl ${
                      isOpen ? "text-card-blue" : "text-manganese-blue"
                    }`}
                  >
                    {faq.question}
                  </p>
                  <span className="shrink-0 ml-4">
                    {isOpen ? <MinusIcon /> : <PlussIcon />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-poppins font-normal text-[16px] pt-[16px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQClient;