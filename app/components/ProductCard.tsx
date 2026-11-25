import ProductStarIcon from "./icons/ProductStarIcon";
import Image from "next/image";
import Offer from "./Offer";
import { ProductData } from "@/lib/types";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";

const ProductCard = ({
  name,
  category,
  description,
  price,
  image,
  originalPrice,
  isOffer,
  offerLabel,
  reviewCount,
  packSize,
  unitPrice,
}: ProductData) => {
  const [count, setCount] = useState<number>(0);
  const imageSource: string =
    typeof image === "string"
      ? image
      : "asset" in image
        ? (urlFor(image).width(800).height(600).fit("max").url() as string)
        : (image.src as string);
  const savings =
    originalPrice && originalPrice > price
      ? (originalPrice - price).toFixed(2)
      : null;

  const Increment = () =>{
    setCount((prev) => prev + 1)
  }

  const Decrement = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <div className="w-full h-full rounded-[12px] pb-[16px] flex flex-col justify-between border border-ice-blue bg-white overflow-hidden">
      <div className="bg-ice-blue w-full min-h-[200px] sm:min-h-[220px] flex items-center justify-center relative p-4">
        {isOffer && (
          <span className="absolute top-[14px] left-[14px] sm:top-[18px] sm:left-[16px] z-10">
            <Offer label={offerLabel} />
          </span>
        )}

        <Image
          src={imageSource}
          alt={name}
          width={800}
          height={600}
          className="h-auto max-h-[180px] w-auto object-contain"
        />
      </div>

      {/* card body  */}
      <div className="flex flex-col flex-1 justify-between px-[16px] pt-[14px] gap-[14px]">
        <div className="flex flex-col gap-[10px]">
          {/* title  */}
          <div>
            <span className="text-card-blue font-poppins text-[14px]">
              {category?.title}
            </span>
            <h3 className="font-poppins text-xl font-[600] leading-tight sm:text-2xl">
              {name}
            </h3>
          </div>
          <p className="font-poppins font-[300] text-[16px]">
            {description}
          </p>

          <div className="flex">
            <ProductStarIcon />
            <span>({reviewCount ?? 0})</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p>
                <span className="text-card-blue text-[24px]">£{price}</span>/pack
              </p>{" "}
              {originalPrice && (
                <span className="font-[400]">Was £{originalPrice.toFixed(2)} </span>
              )}
            </div>
            {savings && (
              <div className="font-[600] text-[14px] text-card-blue max-w-[92px] h-auto flex items-center justify-center bg-chrome-white radius-[8px] p-[4px]">
                Save £{savings}
              </div>
            )}
          </div>
          {(packSize || unitPrice) && (
            <span>
              {[packSize, unitPrice].filter(Boolean).join(" | ")}
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-center my-1 justify-between gap-3">
          {count === 0 ?  <button onClick={Increment} className="flex min-h-[44px] flex-1 items-center justify-center gap-[3px] rounded-xl border px-3 py-2 text-sm sm:flex-none sm:px-6 sm:py-[10px]">
            Add to Cart
          </button> :
          <div className="flex items-center gap-2">
            <button
            onClick={Decrement}
             className="flex min-h-[44px] flex-1 items-center justify-center gap-[3px] rounded-xl border px-3 py-2 text-sm sm:flex-none sm:px-6 sm:py-[10px]">
            -
          </button>
          {count}
          <button onClick={Increment} className="flex min-h-[44px] flex-1 items-center justify-center gap-[3px] rounded-xl border px-3 py-2 text-sm sm:flex-none sm:px-6 sm:py-[10px]">
            +
          </button>
          </div>
     
        }
        
          <button className="bg-transparent  border-none  text-card-blue ">
            <span className="underline underline-offset-4 text-[14px] font-medium">
              More Information
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
