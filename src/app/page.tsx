import Image from "next/image"
import styles from "./page.module.css"
import { Box, Center, Stack } from "@chakra-ui/react"
import CarouselWithProgress from "@/components/Carussel"

export default function Home() {
  return (
    <Stack>
      <CarouselWithProgress />
      <Box
        w={"100%"}
        h={"100vh"}
        bg={"white"}
      >
        Here
      </Box>
    </Stack>
  )
}
