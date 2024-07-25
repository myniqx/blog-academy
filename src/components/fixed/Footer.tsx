import { footerMenu } from "@/constants/footerMenu"
import { MenuItems } from "@/constants/menu"
import { socialItems } from "@/constants/socials"
import { web } from "@/constants/web"
import { Box, Button, Image, Container, HStack, Link, Stack, Text, TextProps, VStack, Wrap, IconButton, SimpleGrid } from "@chakra-ui/react"



import NextLink from 'next/link'

export const Footer = () => {

    const footerMenuHead: TextProps["style"] = {
        borderBottomWidth: "1px",
        width: "100%",
        fontWeight: "bold",
        fontSize: "lg",
    }

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
                lg: 4
            }}
        >
            <VStack width={"100%"}>
                <Text
                    fontWeight={"bold"}
                    w={"100%"}
                    textAlign={"left"}
                >© {new Date().getFullYear()} {web.name}</Text>
            </VStack>

            <VStack width={"100%"} alignItems={"flex-start"}>
                <Text style={footerMenuHead}>Menu</Text>
                {MenuItems.map((menu) => (
                    <Link
                        as={NextLink}
                        pl={2}
                        href={menu.path}
                        key={menu.name}>
                        {menu.name}
                    </Link>
                ))}
            </VStack>

            <VStack width={"100%"} alignItems={"flex-start"}>
                <Text style={footerMenuHead} >Sosyal</Text>
                <SocialButtons />
            </VStack>

            <VStack width={"100%"} alignItems={"flex-start"}>
                <Text style={footerMenuHead}>Iletisim</Text>
                {MenuItems.map((menu) => (
                    <Link as={NextLink} pl={2} href={menu.path} key={menu.name}>
                        {menu.name}
                    </Link>
                ))}
            </VStack>
        </SimpleGrid>
    )
}


const SocialButtons = () => {
    const items = socialItems

    return (
        <HStack align="start">
            {items?.map((item, i) => {
                return (
                    <IconButton
                        key={i}
                        aria-label={item.label}
                        as="a"
                        size="sm"
                        target="_blank"
                        icon={<item.icon />}
                        href={item.link}
                        variant="outline"
                        colorScheme="primary"
                        borderColor="primary.100"
                        color="primary.100"
                        _hover={{
                            bg: 'whiteAlpha.100',
                            borderColor: 'primary.50',
                            color: 'primary.50',
                        }}
                    />
                )
            })}
        </HStack>
    )
}