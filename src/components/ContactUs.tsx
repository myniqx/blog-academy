"use client";
import {
  Button,
  Center,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { SocialButtons } from "./Socials";
import { web } from "@/constants/web";
import { useState } from "react";
import { FaCheck, FaX } from "react-icons/fa6";
import { MdError } from "react-icons/md";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [validMail, setValidMail] = useState<null | "valid" | "invalid">(null);
  const toast = useToast();

  const isEmailAdressValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const checkMail = (onlyValid?: boolean) => {
    const email = formData.email.trim();
    if (onlyValid && !isEmailAdressValid(email)) return;
    if (onlyValid) {
      if (isEmailAdressValid(formData.email)) {
        setValidMail("valid");
      }

      setValidMail(
        email ? (isEmailAdressValid(email) ? "valid" : "invalid") : null
      );
      return;
    }

    if (formData.email === "") {
      setValidMail(null);
    } else if (isEmailAdressValid(formData.email)) {
      setValidMail("valid");
    } else {
      setValidMail("invalid");
    }
  };

  const isFormValid = (inform = false) => {
    if (!formData.name || formData.name.length < 3) {
      if (inform)
        toast({
          title: "Adınızı giriniz (en az 3 karakter)",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      return false;
    }

    if (!formData.email && !formData.phone) {
      if (inform)
        toast({
          title: "E-posta adresinizi ya da telefon numaranızı giriniz",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      return false;
    }

    if (formData.email && !isEmailAdressValid(formData.email)) {
      if (inform)
        toast({
          title: "Girdiğiniz e-posta adresi geçersiz",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      return false;
    }

    if (formData.message.length > 500) {
      if (inform)
        toast({
          title: "Mesajınız 500 karakterden uzun olamaz",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      return false;
    }

    return true;
  };

  const sendEmail = async () => {
    if (!isFormValid(true)) return;

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Email gönderilemedi");
      const data = await res.json();
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Email gönderilemedi",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Center
      w={"100%"}
      h={"100vh"}
      //  bg={"primary.50"}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w={"75%"}>
        <VStack
          borderRightWidth={{ base: 0, md: "1px" }}
          borderColor={"primary.400"}
          w={"100%"}
          p={8}
        >
          <Heading mb={8}>Bize ulaşın</Heading>
          <SocialButtons size={"lg"} gap={6} />
        </VStack>
        <VStack w={"100%"} p={8}>
          <Heading mb={8}>Biz size ulaşalim</Heading>
          <Stack w={"100%"} gap={1}>
            <HStack justifyContent={"space-between"} pr={4}>
              <Text fontWeight={"bold"}>*Ad: </Text>
            </HStack>
            <Input
              placeholder="Adınız"
              variant="outlined"
              size={"lg"}
              borderColor={"primary.400"}
              _placeholder={{
                color: "primary.400",
              }}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <HStack justifyContent={"space-between"} pr={4} mt={4}>
              <Text fontWeight={"bold"}>Email:</Text>
              {validMail &&
                (validMail === "valid" ? (
                  <FaCheck color={"green.400"} />
                ) : (
                  <MdError color={"red.400"} />
                ))}
            </HStack>
            <Input
              placeholder="Email"
              size={"lg"}
              variant="outlined"
              isInvalid={validMail === "invalid"}
              borderColor={"primary.400"}
              _placeholder={{
                color: "primary.400",
              }}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                checkMail(true);
              }}
              onBlur={() => checkMail()}
            />

            <HStack justifyContent={"space-between"} pr={4} mt={4}>
              <Text fontWeight={"bold"}>Telefon:</Text>
            </HStack>
            <Input
              placeholder="Telefon"
              size={"lg"}
              variant="outlined"
              borderColor={"primary.400"}
              _placeholder={{
                color: "primary.400",
              }}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <HStack justifyContent={"space-between"} pr={4} mt={4}>
              <Text fontWeight={"bold"}>Mesajınız:</Text>
              <Text fontSize={"sm"}>{formData.message.length}/500</Text>
            </HStack>
            <Textarea
              placeholder="Mesajınız"
              size={"lg"}
              variant="outlined"
              height={"100px"}
              resize={"vertical"}
              borderColor={"primary.400"}
              _placeholder={{
                color: "primary.400",
              }}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <Button
              mt={6}
              variant="outline"
              colorScheme="primary"
              onClick={sendEmail}
              isDisabled={!isFormValid()}
            >
              Gönder
            </Button>
          </Stack>
        </VStack>
      </SimpleGrid>
    </Center>
  );
};
