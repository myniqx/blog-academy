'use client'

import { MenuItems } from "@/constants/menu"
import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, HStack, IconButton, Image, Link, Stack, useDisclosure, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { MdMenu } from "react-icons/md"

import NextLink from 'next/link'


export const DrawerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const menus = MenuItems

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
            onClose={onClose} isOpen={isOpen} size={'full'}>
                <DrawerOverlay />
                <DrawerContent
                 bg="rgba(255, 255, 255, 0.1)" // Hafif saydam arka plan
                 backdropFilter="blur(6px)"   // Blur efekti
                >
                    <DrawerCloseButton
                        size={{ base: "md", lg: "lg" }}
                    />
                    <DrawerBody overflow={"hidden"}>
                        <VStack
                            h={"100%"}
                            justifyContent={"space-between"}
                            m={16}
                        >
                            <Stack alignItems={"center"}>
                                <Image
                                    src="/logo.png"
                                    width={`200px`}
                                    height={`200px`}
                                    zIndex={0}
                                />
                                <Heading>
                                    Zirve Academy
                                </Heading>
                            </Stack>
                            <VStack
                                mb={36}
                            >
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
                                            leftIcon={menu.icon}
                                        >
                                            {menu.name}
                                        </Button>
                                    </Link>
                                ))}
                            </VStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}