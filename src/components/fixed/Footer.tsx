import { MenuItems } from "@/constants/menu";
import { socialItems } from "@/constants/socials";
import { web } from "@/constants/web";
import {
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Text,
  TextProps,
  VStack,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { SocialButtons } from "../Socials";
import { ContactMenu } from "@/constants/contact";

export const Footer = () => {
  const footerMenuHead: TextProps["style"] = {
    borderBottomWidth: "1px",
    width: "100%",
    fontWeight: "bold",
    fontSize: "lg",
  };

  return (
    <SimpleGrid
      spacing={12}
      justifyContent={"space-evenly"}
      alignItems={"flex-start"}
      px={24}
      my={12}
      w={"100%"}
      columns={{
        base: 1,
        md: 2,
        lg: 4,
      }}
    >
      <VStack width={"100%"}>
        <Text fontWeight={"bold"} w={"100%"} textAlign={"left"}>
          © {new Date().getFullYear()} {web.name}
        </Text>
      </VStack>

      <VStack width={"100%"} alignItems={"flex-start"}>
        <Text style={footerMenuHead}>Menü</Text>
        {MenuItems.map((menu) => (
          <Link as={NextLink} pl={2} href={menu.path} key={menu.name}>
            {menu.name}
          </Link>
        ))}
      </VStack>

      <VStack width={"100%"} alignItems={"flex-start"}>
        <Text style={footerMenuHead}>Sosyal</Text>
        <SocialButtons />
      </VStack>

      <VStack width={"100%"} alignItems={"flex-start"}>
        <Text style={footerMenuHead}>İletişim</Text>
        {ContactMenu.map((menu) => (
          <HStack key={menu.name} pl={2}>
            <Text textAlign={"right"} key={menu.name}>
              {menu.name}
            </Text>
            <Text textAlign={"left"} key={menu.value}>
              {menu.value}
            </Text>
          </HStack>
        ))}
      </VStack>
    </SimpleGrid>
  );
};
