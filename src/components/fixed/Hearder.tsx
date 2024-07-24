import { Button, Heading, HStack, IconButton, Image, Link } from "@chakra-ui/react"
import { sign } from "crypto"
import NextLink from 'next/link'
import React, { useState } from "react"
import { FaHome } from "react-icons/fa"
import { FaBlog, FaBurger, FaInfo } from "react-icons/fa6"
import { MdInfoOutline, MdMenu } from "react-icons/md"
import { DrawerMenu } from "./Drawer"
import { MenuItems } from "@/constants/menu"



export const Header = () => {
    const menus = MenuItems

    return (
        <HStack
            justifyContent={"space-between"}
            height={"90px"}
        >
            <HStack gap={4} alignItems={"center"} ml={6}>
                <Image src="/icon.png" boxSize={{ base: "48px", lg: "64px" }} rounded={"full"} boxShadow={"lg"} />
                <Heading>Zirve Academy</Heading>
            </HStack>
            <HStack
                gap={4}
                justifyContent={`flex-end`}
                alignItems={"flex-end"}
                display={{ base: "none", lg: "flex" }}
            >
                {menus.map((menu) => (
                    <Link as={NextLink} href={menu.path} key={menu.name}>
                        <Button
                            variant={"ghost"}
                            size={"lg"}
                            leftIcon={menu.icon}
                        >
                            {menu.name}
                        </Button>
                    </Link>
                ))}
                <DrawerMenu />
            </HStack>
        </HStack>
    )
}