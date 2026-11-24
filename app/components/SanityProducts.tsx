"use cache"

import type { ProductData } from "@/lib/types";
import { sanityFetch } from "@/sanity/lib/live";
import { productsQuery } from "@/sanity/lib/quiries";
import ProductSection from "./ProductSection";

export default async function SanityProducts() {
 
  const { data } = await sanityFetch({ query: productsQuery });

  return <ProductSection products={data as ProductData[]} />;
}
