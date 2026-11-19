import type { Metadata } from "next";
import { BUSINESS } from "./constants";

type Args = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
};

export function buildMetadata({ title, description, path, image, imageAlt }: Args): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      locale: "en_US",
      type: "article",
      siteName: BUSINESS.name,
      title,
      description,
      url: path,
      images: [{ url: image, alt: imageAlt }],
    },
  };
}
