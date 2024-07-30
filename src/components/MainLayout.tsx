import { Box, Image, Stack } from "@chakra-ui/react"
import { Header } from "./fixed/Hearder"
import { Footer } from "./fixed/Footer"


import { web } from "@/constants/web"
import { Chat } from "./Chat"

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const backgroundImage = "url(/bg-repeat2.png)"

  return (
    <Box w={"100vw"} h={"100vh"} position={"relative"} overflow={"hidden"}>
      <Box
        position={"absolute"}
        left={0}
        top={0}
        right={0}
        bottom={0}
        bgImage={backgroundImage}
        bgRepeat={"repeat"}
      />
      <Stack position={"relative"} w={"100%"} h={"100%"} overflowY={"auto"}>
        <Stack spacing={0} gap={0}>
          <Header />
          {children}
          <Footer />
          <Chat />
        </Stack>
      </Stack>
    </Box>
  )
}
