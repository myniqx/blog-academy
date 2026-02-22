import { MenuItems } from "@/constants/menu";
import { web } from "@/constants/web";
import { Button, Heading, HStack, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { DrawerMenu } from "./Drawer";

export const Header = () => {
  const menus = MenuItems;

  return (
    <HStack justifyContent={"space-between"} height={web.headerHeight} p={4}>
      <HStack gap={4} alignItems={"center"} ml={6}>
        <Image
          src="/icon.png"
          boxSize={{ base: "48px", lg: "64px" }}
          rounded={"full"}
          boxShadow={"lg"}
          alt={web.name}
        />
        <Heading fontSize={{ base: "2xl", lg: "3xl" }}>{web.name}</Heading>
      </HStack>
      <HStack
        gap={4}
        justifyContent={`flex-end`}
        alignItems={"flex-end"}
        display={{ base: "none", lg: "flex" }}
      >
        {menus.map((menu) => (
          <NextLink href={menu.path} key={menu.name}>
            <Button variant={"ghost"} size={"lg"} leftIcon={menu.icon}>
              {menu.name}
            </Button>
          </NextLink>
        ))}
      </HStack>

      <DrawerMenu />
    </HStack>
  );
};
