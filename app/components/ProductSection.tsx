/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type { ProductData } from "@/lib/types";
import Slider, { type Settings } from "react-slick";
import ProductCard from "./ProductCard";
import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";
import { useRef } from "react";

interface ProductSectionProps {
  products?: ProductData[];
}

const ProductSection = ({ products = [] }: ProductSectionProps) => {
  const sliderRef = useRef<any>(null);
  const goPrev = () => sliderRef.current?.slickPrev();
  const goNext = () => sliderRef.current?.slickNext();

  if (products.length === 0) return null;

  const settings: Settings = {
    arrows: false,
    dots: false,
    infinite: products.length > 3,
    speed: 400,
    slidesToShow: Math.min(3, products.length),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1415,
        settings: {
          slidesToShow: Math.min(2, products.length),
          slidesToScroll: Math.min(2, products.length),
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="flex w-full  px-4 py-10 sm:px-6 lg:px-10 xl:px-16"
    >
      <div className="mx-auto w-full max-w-[1098px]">
        <h2
          id="products-heading"
          className="mb-6 font-nightSerif text-center text-2xl font-semibold text-dark-charcoal sm:text-3xl"
        >
          Best Selling Products
        </h2>

        <div className="relative">
          {products.length > 1 && (
            <button
              type="button"
              aria-label="Previous products"
              onClick={goPrev}
              className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-dark-charcoal shadow-md transition hover:bg-gray-50 sm:-left-5"
            >
              <ChevronLeft />
            </button>
          )}
          <div className="mx-2 sm:mx-10">
            <Slider ref={sliderRef} {...settings}>
              {products.map((product) => (
                <div
                  key={
                    typeof product.slug === "string"
                      ? product.slug
                      : product.slug?.current ?? product.name
                  }
                  className="h-full px-3 py-2 "
                >
                  <ProductCard
                    name={product.name}
                    category={product.category}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    originalPrice={product.originalPrice}
                    isOffer={product.isOffer}
                    offerLabel={product.offerLabel}
                    reviewCount={product.reviewCount}
                    packSize={product.packSize}
                    unitPrice={product.unitPrice}
                    slug={product.slug}
                    seo={product.seo}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {products.length > 1 && (
            <button
              type="button"
              aria-label="Next product"
              onClick={goNext}
              className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-dark-charcoal shadow-md transition hover:bg-gray-50 sm:-right-5"
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
