import { web } from "@/constants/web";
import {
  Box,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { BlogImage } from "./BlogImage";

type SliderPageProps = {
  title: string;
  progress: number;
  slug: string;
  link: string;
};

export const SliderPage: React.FC<SliderPageProps> = ({
  title,
  progress,
  slug,
  link,
}) => {
  return (
    <Box
      w={"100%"}
      h={`calc(96vh - ${web.headerHeight})`}
      position={"relative"}
      overflow={"hidden"}
    >
      <BlogImage slug={slug} alt={title} />
      <Box
        position={"absolute"}
        bottom={3}
        left={0}
        h={"60px"}
        w={`${progress}%`}
        backdropFilter={"blur(6px)"}
      ></Box>
      <Box
        position={"absolute"}
        bottom={3}
        left={0}
        right={0}
        h={"60px"}
        bgColor={"rgba(255, 255, 255, 0.3)"}
        backdropFilter={"blur(2px)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Link
          as={NextLink}
          href={link}
          textDecoration={"none"}
          _hover={{ textDecoration: "none" }}
        >
          <Heading
            fontSize={{
              base: "md",
              md: "xl",
              lg: "3xl",
            }}
            noOfLines={{
              base: 2,
              md: 1,
            }}
            color={"black"}
            px={6}
            textAlign={"center"}
            py={1}
            textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
          >
            {title}
          </Heading>
        </Link>
      </Box>
    </Box>
  );
};
