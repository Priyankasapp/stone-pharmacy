import { faqQuery } from "@/sanity/lib/quiries";
import { client } from "@/sanity/lib/client";
import { FaqsData } from "@/lib/types";
import FAQClient from "./FAQClient";

const FAQ = async () => {
  const faqsData: FaqsData[] = await client.fetch(faqQuery);

  return <FAQClient faqsData={faqsData} />;
};

export default FAQ;