import type { Metadata } from "next";
import { web } from "./web";

export const getMetaData = ({
  title,
  keywords,
  route,
  description,
}: {
  title: string | string[];
  keywords?: string[];
  route?: string;
  description?: string;
}): Metadata => {
  const baseTitle = [
    "Araştırma yöntemi eğitimi",
    "Akademik dürüstlük eğitimi",
    "Araştırma süreci rehberliği",
    "Akademik yayın etiği ve geri bildirim",
    web.name,
  ];
  const titleList = [...(Array.isArray(title) ? title : [title]), ...baseTitle];
  const mTitle = titleList.join(" | ");
  const mUrl = route ? `${web.webaddr}/${route}` : web.webaddr;
  const mDescription = description ? description : web.description;

  const baseMetadata: Metadata = {
    title: mTitle,
    description: mDescription,
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: mUrl,
      siteName: web.name,
      title: mTitle,
      description: mDescription,
    },

    keywords: [...web.keywords, ...(keywords || [])],

    alternates: {
      canonical: mUrl,
    },
  };

  return baseMetadata;
};
