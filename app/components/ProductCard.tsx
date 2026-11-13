import ProductStarIcon from "./icons/ProductStarIcon";
import Image from "next/image";
import Offer from "./Offer";
import { ProductData } from "@/lib/types";

const ProductCard = ({
  
  name,
  categories,
  description,
  price,
  image,
}: ProductData) => {
  return (
    <div className="w-full max-w-[350px] mx-auto rounded-[12px] pb-[16px] flex flex-col justify-between border border-ice-blue bg-white overflow-hidden">
      <div className="bg-ice-blue w-full min-h-[200px] sm:min-h-[220px] flex items-center justify-center relative p-4">
        <span className="absolute top-[14px] left-[14px] sm:top-[18px] sm:left-[16px] z-10">
          <Offer />
        </span>

        <Image
          src={image}
          alt={name}
          className="w-auto h-auto max-h-[180px] object-contain"
        />
      </div>

      {/* card body  */}
      <div className="flex flex-col flex-1 justify-between px-[16px] pt-[14px] fap-[14px]">
        <div className="flex flex-col gap-[10px]">
          {/* titile  */}
          <div>
            <span className="text-card-blue font-proximaNovaAlt text-[14px]">
              {categories}
            </span>
            <h3 className="font-proximaNovaAlt font-[600] text-[24px] sm:text-[20px] leading-tight">
              {name}
            </h3>
          </div>
          <p className="font-proximaNovaAlt font-[300] text-[16px]">
            {description}
          </p>

          {/* name, categories, description, price   */}
          <div className="flex">
            <ProductStarIcon />
            <span>(9403)</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p>
                <span className="text-card-blue">£{price}</span>/pack
              </p>{" "}
              <span className="font-[400]">Was £19.53 </span>
            </div>
            <div className="font-[600] text-[14px] text-card-blue max-w-[92px] h-auto flex items-center justify-center bg-chrome-white radius-[8px] p-[4px]">
              Save £9.53
            </div>
          </div>
          <span>2ML | £92.50 per 100ML</span>
        </div>
        <div className="flex justify-between">
          <button className="flex max-h-[47px] h-full radius-[12px] border px-[24px] py-[10px] gap-[3px]">
            Add to Cart
          </button>
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
