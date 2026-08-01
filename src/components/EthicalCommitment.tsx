import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const principles = [
  {
    title: "Araştırmacı Yazarlığı",
    description:
      "Araştırma sorusu, bilimsel değerlendirme, yorum ve metin araştırmacının kendi emeğine dayanır.",
  },
  {
    title: "Eğitici Geri Bildirim",
    description:
      "Geri bildirim; güçlü ve geliştirilmesi gereken noktaları açıklar, araştırmacının kendi düzeltmesini yapmasını destekler.",
  },
  {
    title: "Şeffaf ve Etik Süreç",
    description:
      "Kaynak kullanımı, yöntem, veri güvenliği ve dijital araçlar kurum kuralları ile akademik etik ilkelerine uygun ele alınır.",
  },
];

export const EthicalCommitment = () => {
  return (
    <VStack
      w={"100%"}
      minH={{ base: "auto", lg: "70vh" }}
      bg={"white"}
      px={{ base: 6, md: 12 }}
      py={{ base: 16, md: 24 }}
      spacing={10}
      justifyContent={"center"}
    >
      <VStack spacing={4} maxW={"4xl"} textAlign={"center"}>
        <Heading>Etik Akademik Destek İlkelerimiz</Heading>
        <Text color={"gray.600"} fontSize={{ base: "md", md: "lg" }}>
          Hazır akademik çalışma üretmek yerine araştırmacının kendi bilgi,
          yöntem ve yazarlık becerilerini geliştirmesine rehberlik ediyoruz.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} maxW={"6xl"}>
        {principles.map((principle) => (
          <Card key={principle.title} variant={"outline"} shadow={"md"}>
            <CardBody>
              <Heading size={"md"} mb={4}>
                {principle.title}
              </Heading>
              <Text color={"gray.600"} lineHeight={"tall"}>
                {principle.description}
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
