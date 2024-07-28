"use client";

import { Image, useBreakpointValue } from "@chakra-ui/react";

type BlogImageProps = {
  slug: string;
  alt: string;
};

export const BlogImage: React.FC<BlogImageProps> = ({ slug, alt }) => {
  const postfix = useBreakpointValue({
    base: 0,
    lg: 1,
  });

  const imageTop = postfix
    ? `/images/blog/${slug}.jpg`
    : `/images/blog/${slug}-h.jpg`;

  return (
    <Image
      objectFit="cover"
      width={"100%"}
      height={"100%"}
      src={imageTop}
      alt={alt}
    />
  );
};
