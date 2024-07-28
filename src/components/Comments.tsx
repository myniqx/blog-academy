"use client";
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
} from "@chakra-ui/react";
import { title } from "process";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

import Slider from "react-slick";

export const Comments = () => {
  const commentLists = [
    {
      name: "Kullanici 1",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur aliquam, nisi nisl volutpat nisl, eget aliquam nisl nisl eu nisl.",
    },
    {
      name: "Kullanici 2",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur aliquam, nisi nisl volutpat nisl, eget aliquam nisl nisl eu nisl.",
    },
    {
      name: "Kullanici 3",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur aliquam, nisi nisl volutpat nisl, eget aliquam nisl nisl eu nisl.",
    },
    {
      name: "Kullanici 4",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur aliquam, nisi nisl volutpat nisl, eget aliquam nisl nisl eu nisl.",
    },
    {
      name: "Kullanici 5",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur aliquam, nisi nisl volutpat nisl, eget aliquam nisl nisl eu nisl.",
    },
    {
      name: "Kullanici 6",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur aliquam, nisi nisl volutpat nisl, eget aliquam nisl nisl eu nisl.",
    },
  ];

  const slidesToShow = useBreakpointValue({
    base: 1,
    lg: 2,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    arrows: true,
    slidesToScroll: slidesToShow,
    rows: slidesToShow === 1 ? 2 : 1,
  };

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
  );
};

const CommentView = ({ user, comment }: { user: string; comment: string }) => {
  return (
    <Center h={"80%"} p={4}>
      <Card variant={"outline"} maxW={"lg"} shadow={"lg"}>
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
  );
};
