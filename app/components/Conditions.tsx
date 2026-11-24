import { client } from "@/sanity/lib/client";
import { serviceQuery } from "@/sanity/lib/quiries";
import { urlFor } from "@/sanity/lib/image";
import type { Image as SanityImage } from "sanity";
import ConditionsClient from "./ConditionsClient";

type ServiceDocument = {
  _id: string;
  order?: number;
  title: string;
  text: string;
  image?: SanityImage | null;
};

const Conditions = async () => {
  const services = await client.fetch<ServiceDocument[]>(serviceQuery);
  const conditions = services.map(({ _id, title, text, image }) => ({
    _id,
    title,
    text,
    imageUrl: image
      ? urlFor(image).width(1000).height(1000).fit("crop").url()
      : undefined,
  }));

  return <ConditionsClient conditions={conditions} />;
};

export default Conditions;
