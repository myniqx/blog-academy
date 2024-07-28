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
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: true,
    slidesToScroll: 1,
  };

  return (
    <VStack
      w={"100%"}
      h={"100vh"}
      bg={"white"}
      p={20}
      gap={10}
      justifyContent={"space-around"}
    >
      <Heading>Sizden Gelen Yorumlar</Heading>
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
    <Center h={"80%"}>
      <Card variant={"outline"} maxW={"lg"} shadow={"lg"}>
        <CardBody>
          <HStack>
            <FaUserCircle size={50} />
            <Heading size="md">{user}</Heading>
          </HStack>
          <Text py="4">{comment}</Text>
        </CardBody>
      </Card>
    </Center>
  );
};
