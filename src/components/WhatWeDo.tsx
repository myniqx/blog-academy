import { Center, Heading, Stack } from "@chakra-ui/react";

export const WhatWeDo = () => {
  const fontSize = { base: "2xl", md: "3xl", lg: "4xl" };
  const list = [
    "Biz burada bunu yapiyoruz",
    "Biz burada sunu da yapiyoruz",
    "Biz burada boylede yapiyoruz",
    "Daha maddelerde ekleyelim",
  ];

  return (
    <Center w={"100%"} h={"100vh"} bg={"white"}>
      <Stack w={"80%"} h={"80%"} justifyContent={"space-evenly"}>
        {list.map((item, index) => (
          <Heading
            fontSize={fontSize}
            textAlign={index % 2 === 0 ? "right" : "left"}
            width={"100%"}
            key={index}
          >
            {item}
          </Heading>
        ))}
      </Stack>
    </Center>
  );
};
