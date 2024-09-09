import {
  Box,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { FaHandsHelping, FaHome } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { GrNavigate } from "react-icons/gr";
import { MdOutlineSsidChart } from "react-icons/md";

type listProps = {
  desc: string;
  head: string;
  icon: IconType;
  img: string;
};

export const WhatWeDo = () => {
  const fontSize = { base: "xl", md: "2xl", lg: "3xl" };
  const list: listProps[] = [
    {
      desc: "Lisansüstü öğrencilere akademik projelerde danışmanlık hizmeti sağlamak",
      head: "Projeler",
      icon: FaHandsHelping,
      img: "/images/blog/akademik-arastirma-kaynaklari-h.jpg",
    },
    {
      desc: "İntihal sorunlarına çözümler üretmek, özgün çalışmaların meydana gelmesine katkıda bulunmak",
      head: "Intihal",
      icon: MdOutlineSsidChart,
      img: "/images/blog/arastirma-etigi-ve-intihal-onleme-h.jpg",
    },
    {
      desc: "Ders ödevleri ve tez hazırlama süreçlerine destek vererek öğrencilere rehberlik etmek",
      head: "Rehberlik",
      icon: GrNavigate,
      img: "/images/blog/basarili-akademik-makale-nasil-yazilir-h.jpg",
    },
    {
      desc: "Akademik yayınlarda danışmanlık hizmetleri ile akademik başarıyı artırmayı hedeflemek",
      head: "Yayınlama",
      icon: FaChartLine,
      img: "/images/blog/akademik-networking-h.jpg",
    },
  ];

  return (
    <Center w={"100%"} minH={"100vh"} bg={"white"} p={6}>
      <SimpleGrid columns={{ base: 1, lg: 4, md: 2 }} w={"80%"} spacing={4}>
        {list.map((item, index) => (
          <TargetView
            key={index}
            desc={item.desc}
            icon={item.icon}
            img={item.img}
            head={item.head}
          />
        ))}
      </SimpleGrid>
    </Center>
  );
};

const TargetView: React.FC<listProps> = ({ desc, icon, head, img }) => {
  const IconComponent = icon;
  return (
    <Stack
      w={"100%"}
      h={"100%"}
      bgImage={img}
      bgSize={"cover"}
      bgPos={"center"}
      bgBlendMode={"darken"}
      position={"relative"}
    >
      <Box
        w={"100%"}
        h={"100%"}
        bgColor={"rgba(255, 255, 255, 0.3)"}
        backdropFilter={"blur(3px)"}
      >
        <VStack
          w={"100%"}
          h={"100%"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap={16}
        >
          <Box ml={8} mt={32}>
            <IconComponent size={64} />
            <Heading
              fontSize={{ base: "2xl", xl: "4xl" }}
              textAlign={"center"}
              mt={8}
            >
              {head}
            </Heading>
          </Box>

          <Heading
            fontSize={{ base: "xl", xl: "3xl" }}
            textAlign={"left"}
            mx={"auto"}
            mb={{ base: 8, xl: 16 }}
            w={{ base: "90%", md: "85%", xl: "80%" }}
            wordBreak={"keep-all"}
          >
            {desc}
          </Heading>
        </VStack>
      </Box>
    </Stack>
  );
};
