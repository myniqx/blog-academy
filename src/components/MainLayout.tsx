import { Box, Image, Stack } from "@chakra-ui/react"
import { Header } from "./fixed/Hearder"
import { Footer } from "./fixed/Footer"


export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const backgroundImage = 'url(/bg-repeat2.png)'

    return (
        <Box
            w={"100vw"}
            h={"100vh"}
            position={"relative"}
            overflow={"hidden"}
        >
            <Box
                position={"absolute"}
                left={0}
                top={0}
                right={0}
                bottom={0}
                bgImage={backgroundImage}
                bgRepeat={"repeat"}
            />
            <Stack
                position={"relative"}
                w={"100%"}
                h={"100%"}
                p={4}
                overflowY={"auto"}
            >
                <Stack>
                    <Header />
                    {children}
                    <Footer />
                </Stack>
            </Stack>
        </Box>
    )
}
