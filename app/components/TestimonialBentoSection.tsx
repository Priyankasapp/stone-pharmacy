import { client } from "@/sanity/lib/client";
import { testimonialQuery } from "@/sanity/lib/quiries";
import type { TestimonialData } from "@/lib/types";
import TestimonialBentoClient from "./TestimonialBentoClient";

const TestimonialBentoSection = async () => {
  const testimonials =
    await client.fetch<TestimonialData[]>(testimonialQuery);

  return <TestimonialBentoClient testimonials={testimonials} />;
};

export default TestimonialBentoSection;
