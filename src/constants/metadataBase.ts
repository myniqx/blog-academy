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
    "Proje danışmanlıgı",
    "İntihal çözüm desteği",
    "Ödev ve tez rehberliği",
    "Akademik yayın danışmanlığı",
    web.name,
  ];
  const titleList = [...(Array.isArray(title) ? title : [title]), ...baseTitle];
  const mTitle = titleList.join(" | ");
  const mUrl = route ? `${web.webaddr}/${route}` : web.webaddr;
  const mDescription = description ? description : "Akademik kariyer asistanı";

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
