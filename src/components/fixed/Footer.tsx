import { MenuItems } from "@/constants/menu"
import { Button, HStack, Link, Text, TextProps, VStack } from "@chakra-ui/react"


import NextLink from 'next/link'

export const Footer = () => {

    const footerMenuHead: TextProps["style"] = {
        borderBottomWidth: "1px",
        width: "100%",
        fontWeight: "bold",
        fontSize: "lg",
    }

    return (
        <HStack
            spacing={12}
            justifyContent={"space-evenly"}
            alignItems={"flex-start"}
            px={24}
            mt={12}
            w={"100%"}
        >
            <VStack width={"100%"}>
                <Text fontWeight={"bold"}>© 2022 Zirve Academy</Text>
            </VStack>

            <VStack width={"100%"} alignItems={"flex-start"}>
                <Text style={footerMenuHead}>Menu</Text>
                {MenuItems.map((menu) => (
                    <Link as={NextLink} href={menu.path} key={menu.name}>
                        {menu.name}
                    </Link>
                ))}
            </VStack>

            <VStack width={"100%"} alignItems={"flex-start"}>
                <Text style={footerMenuHead} >Sosyal</Text>
                {MenuItems.map((menu) => (
                    <Link as={NextLink} href={menu.path} key={menu.name}>
                        {menu.name}
                    </Link>
                ))}
            </VStack>

            <VStack width={"100%"} alignItems={"flex-start"}>
                <Text style={footerMenuHead}>Iletisim</Text>
                {MenuItems.map((menu) => (
                    <Link as={NextLink} href={menu.path} key={menu.name}>
                        {menu.name}
                    </Link>
                ))}
            </VStack>
        </HStack>
    )
}