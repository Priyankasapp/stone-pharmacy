import Image from "next/image";
import type { HealtyData } from "@/lib/types";

const WhatWeOfferCard = ({ title, image, description }: HealtyData) => {
  return (
    <article className="flex h-full w-full flex-col gap-5 rounded-2xl border border-ice-blue p-4 sm:gap-6 sm:p-6">
      <div className="w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt=""
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="font-poppins text-xl font-semibold leading-tight text-dark-charcoal sm:text-2xl">
          {title}
        </h3>
        <p className="text-sm leading-6 text-dark-charcoal sm:text-base">
          {description}
        </p>
      </div>
      <button
        type="button"
        className="group relative inline-flex min-h-[47px] w-full items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(180deg,#E1E1E1_0%,#ADADAD_100%)] p-px transition-opacity hover:opacity-90 active:scale-[0.99]"
      >
        <span className="flex h-full min-h-[45px] w-full items-center justify-center rounded-[11px] bg-white px-4 py-2 text-center shadow-[inset_0px_-1px_1px_1px_#B0B0B0,inset_0px_0px_2px_0px_#FCFCFC] sm:px-6">
          Get treatments
        </span>
      </button>
    </article>
  );
};

export default WhatWeOfferCard;
