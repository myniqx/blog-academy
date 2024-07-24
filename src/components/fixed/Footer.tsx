import { footerMenu } from "@/constants/footerMenu"
import { MenuItems } from "@/constants/menu"
import { socialItems } from "@/constants/socials"
import { Box, Button, Image, Container, HStack, Link, Stack, Text, TextProps, VStack, Wrap, IconButton } from "@chakra-ui/react"



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


export const FooterMenu = () => {
    return (
        <Box
            bgGradient={'linear(to-b, primary.400, primary.600)'}
            color="white"
            pos="relative"
        >
            <Container as={Stack}>
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={8}
                    py={10}
                    justify="space-between"
                    align={{ base: 'center', lg: 'start' }}
                >
                    <Stack align="center" maxW={250}>
                        <Link href="/">
                            <Image width={92} height={92} src={"/logo.jpg"} alt="logo" />
                        </Link>
                        <Text textAlign="center" paddingLeft={1} mx={2} my={2}>
                            FOOTER ABOUT
                        </Text>
                    </Stack>
                    <FooterNav />
                </Stack>
                <Wrap
                    justify={{ base: 'center', sm: 'space-between' }}
                    borderTopWidth="0.5px"
                    borderTopColor="primary.200"
                    py={6}
                    spacing={2}
                >
                    <Text fontSize={'sm'} mr={1}>
                        &copy;
                        <>Copyright {new Date().getFullYear()} </>
                    </Text>
                    <SocialButtons />
                </Wrap>
            </Container>
        </Box>
    )
}

const FooterNav = () => {
    const menu = footerMenu
    return (
        <>
            {menu?.map((item, i) => {
                return (
                    <Stack
                        key={i}
                        align="center"
                        marginX={4}
                        fontSize="lg"
                        color={'primary.50'}
                        py={4}
                    >
                        <Text
                            fontWeight={600}
                            fontSize={'lg'}
                            mb={2}
                            textTransform="uppercase"
                        >
                            {item.title}
                        </Text>
                        {item.children?.map((item, j) => {
                            return <FooterNavItem key={j} {...item} />
                        })}
                    </Stack>
                )
            })}
        </>
    )
}

const FooterNavItem = ({ path, name, icon }) => {
    const isExternal = path?.startsWith('http')

    return (
        <Link
            color="primary.100"
            _hover={{
                color: 'primary.50',
            }}
            {...(isExternal && { isExternal, target: '_blank' })}
            key={path}
            href={path as string}
        >
            {name}
        </Link>
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