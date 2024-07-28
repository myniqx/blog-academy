"use client";

import { MenuItems } from "@/constants/menu";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

import NextLink from "next/link";
import { web } from "@/constants/web";
import { SocialButtons } from "../Socials";

export const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menus = MenuItems;

  return (
    <Box display={{ lg: "none", base: "flex" }}>
      <IconButton
        aria-label={"open drawer"}
        icon={<MdMenu />}
        size="lg"
        variant="ghost"
        onClick={() => onOpen()}
      />

      <Drawer
        closeOnEsc
        colorScheme="whiteAlpha"
        onClose={onClose}
        isOpen={isOpen}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="rgba(255, 255, 255, 0.4)" // Hafif saydam arka plan
          backdropFilter="blur(6px)" // Blur efekti
        >
          <DrawerCloseButton size={{ base: "md", lg: "lg" }} />
          <DrawerBody overflow={"hidden"}>
            <VStack h={"100%"} m={16}>
              <Stack alignItems={"center"}>
                <Image
                  src="/icon.png"
                  boxSize={{ base: "150px", lg: "200px" }}
                  rounded={"full"}
                  boxShadow={"lg"}
                  alt={web.name}
                  zIndex={0}
                />
                <Heading
                  textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
                  textAlign={"center"}
                  color={"black"}
                >
                  {web.name}
                </Heading>
              </Stack>
              <VStack mt={{ base: 24, lg: 24 }}>
                {menus.map((menu) => (
                  <Link
                    as={NextLink}
                    href={menu.path}
                    key={menu.name}
                    zIndex={1}
                  >
                    <Button
                      variant={"ghost"}
                      size={"lg"}
                      color={"black"}
                      textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
                      //   leftIcon={menu.icon}
                    >
                      {menu.name}
                    </Button>
                  </Link>
                ))}
                <Box h={24} />
                <SocialButtons />
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
