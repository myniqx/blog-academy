import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaHandsHelping } from "react-icons/fa";
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
  const list: listProps[] = [
    {
      desc: "Araştırmacıların kendi çalışmalarına uygun yöntemi öğrenmelerine ve bilimsel süreci planlamalarına rehberlik etmek",
      head: "Yöntem Eğitimi",
      icon: FaHandsHelping,
      img: "/images/blog/akademik-arastirma-kaynaklari-h.jpg",
    },
    {
      desc: "Doğru atıf, şeffaf kaynak kullanımı ve benzerlik raporlarının etik biçimde yorumlanması konusunda eğitim vermek",
      head: "Akademik Dürüstlük",
      icon: MdOutlineSsidChart,
      img: "/images/blog/arastirma-etigi-ve-intihal-onleme-h.jpg",
    },
    {
      desc: "Akademik veri tabanlarını, kaynak yönetim araçlarını ve kurum yazım kılavuzlarını kullanmayı öğretmek",
      head: "Kaynak Yönetimi",
      icon: GrNavigate,
      img: "/images/blog/basarili-akademik-makale-nasil-yazilir-h.jpg",
    },
    {
      desc: "Araştırmacının kendi hazırladığı taslaktaki geliştirme alanlarını açıklayıcı sorular ve yöntemsel geri bildirimle göstermek",
      head: "Geliştirici Geri Bildirim",
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
