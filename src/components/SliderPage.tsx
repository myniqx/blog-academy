import { web } from "@/constants/web"
import { Box, Heading, Image, Text } from "@chakra-ui/react"

type SliderPageProps = {
  title: string
  progress: number
  img: string
  link: string
}

export const SliderPage: React.FC<SliderPageProps> = ({
  title,
  progress,
  img,
  link
}) => {

  return (
    <Box
      w={"100%"}
      h={`calc(90vh - ${web.headerHeight})`}
      position={"relative"}
      rounded={"lg"}
      overflow={"hidden"}
    >
      <Image
        objectFit="cover"
        src={img}
        alt={title}
        w={"100%"}
        h={"100%"}
      />
      <Box
        position={"absolute"}
        bottom={3}
        left={0}
        h={"60px"}
        w={`${progress}%`}
        backdropFilter={"blur(6px)"}
      >
      </Box>
      <Box
        position={"absolute"}
        bottom={3}
        left={0}
        right={0}
        h={"60px"}
        bgColor={"rgba(255, 255, 255, 0.3)"}
        backdropFilter={"blur(2px)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading
          fontSize={{
            base: "md",
            md: "xl",
            lg: "3xl",
          }}
          noOfLines={{
            base: 2,
            md: 1,
          }}
          color={"black"}
          px={6}
          textAlign={"center"}
          py={1}
          textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
        >
          {title}
        </Heading>
      </Box>

    </Box>
  )
}
