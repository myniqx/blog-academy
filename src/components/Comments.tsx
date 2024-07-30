"use client"
import {
  Box,
  Card,
  Text,
  CardBody,
  Center,
  Stack,
  Heading,
  VStack,
  CardHeader,
  HStack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react"
import { title } from "process"
import { FaUserCircle } from "react-icons/fa"
import { FaUser } from "react-icons/fa6"

import Slider from "react-slick"

export const Comments = () => {
  const commentLists = [
    {
      name: "Hale Duymaz",
      comment:
        "Doruk akademiden Mehmet beyle ileşim halindeydik. Kendisine çok teşekkür ediyorum.",
    },
    {
      name: "Mehmet K.",
      comment:
        "Tez konusundaki yardımları için kendilerine çok teşekkür ediyorum. Tam bir fiyat/performans hizmetti.",
    },
    {
      name: "Derin Topçu",
      comment: "Her aradığımda ulaşabildiğim, nazik ve ilgiliydiler.",
    },
    {
      name: "Zeynep Sare Yılmaz",
      comment:
        "Oldukça kısa sürem kalmasına rağmen tüm takıldığım noktalarda yardımcı oldular ve yetiştirdim. Çok teşekkür ediyorum.",
    },
    {
      name: "Hakan Tekelli",
      comment: "Mehmet bey sağolsun her konuda çok yardımcı oldu.",
    },
    {
      name: "Yeliz Sarı",
      comment:
        "Son haftada çıkan onca sıkıntıya rağmen her adımda yanımdaydılar. Teşekkür ediyorum.",
    },
  ]

  const slidesToShow = useBreakpointValue({
    base: 1,
    lg: 2,
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    arrows: true,
    slidesToScroll: slidesToShow,
    rows: 2 // slidesToShow === 1 ? 2 : 1,
  }

  return (
    <VStack
      w={"100%"}
      minH={"100vh"}
      bg={"white"}
      p={20}
      gap={10}
      justifyContent={"space-around"}
    >
      <Heading textAlign={"center"}>Sizden Gelen Yorumlar</Heading>
      <Box w={"100%"}>
        <Slider {...settings}>
          {commentLists.map((comment, index) => (
            <CommentView
              key={index}
              user={comment.name}
              comment={comment.comment}
            />
          ))}
        </Slider>
      </Box>
    </VStack>
  )
}

const CommentView = ({ user, comment }: { user: string; comment: string }) => {
  return (
    <Center h={"80%"} p={4}>
      <Card variant={"outline"} w={{ base: "100%", lg: "lg" }} shadow={"lg"}>
        <CardBody>
          <Flex
            gap={4}
            alignItems={"center"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <FaUserCircle size={50} />
            <Heading size="md">{user}</Heading>
          </Flex>
          <Text py="4">{comment}</Text>
        </CardBody>
      </Card>
    </Center>
  )
}
