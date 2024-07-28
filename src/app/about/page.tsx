"use client"
import { web } from "@/constants/web"
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Center,
  Card,
  Stack,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react"
import { FaMapMarkerAlt, FaPhone, FaAddressCard } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa6"
import { HiRefresh } from "react-icons/hi"

const AboutUs = () => {
  const items = [
    {
      icon: FaMapMarkerAlt,
      value: web.adress,
      href: "#map",
    },
    {
      icon: FaPhone,
      value: web.phone,
      href: "tel:" + web.phone,
    },
    {
      icon: FaEnvelope,
      value: web.email,
      href: "mailto:" + web.email,
    },
  ]

  return (
    <Box p={5}>
      <Center minH={`calc(100vh - ${web.headerHeight})`}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
          {items.map((item) => (
            <Card p={10} key={item.value} variant={"outline"} shadow={"lg"}>
              <Link
                href={item.href}
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
              >
                <VStack textAlign="center" gap={10} justifyContent={"center"}>
                  <Icon
                    as={item.icon}
                    boxSize={{ base: "100px", md: "150px" }}
                    color="primary.500"
                  />
                  <Text fontSize="2xl" mt={4} w={"100%"}>
                    {item.value}
                  </Text>
                </VStack>
              </Link>
            </Card>
          ))}
        </SimpleGrid>
      </Center>

      <Card
        p={10}
        mx={{ base: 0, lg: 10 }}
        my={{ base: 10, lg: 0 }}
        variant={"outline"}
        shadow={"lg"}
        id="map"
        h={`calc(100vh - ${web.headerHeight})`}
      >
        <Center flexDirection={"column"} height={"100%"}>
          <Text fontSize="2xl" mb={5}>
            Lokasyonumuz
          </Text>
          <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.633074043132!2d106.67998231533498!3d10.7626226923276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292924b9aeb7%3A0x4359d0b8bb4a5d6b!2sSaigon%20Notre-Dame%20Basilica!5e0!3m2!1sen!2s!4v1593140845052!5m2!1sen!2s"
            width={"100%"}
            height="100%"
            frameBorder="0"
            shadow={"lg"}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </Center>
      </Card>
    </Box>
  )
}

export default AboutUs
