import { Center, Heading, Stack } from "@chakra-ui/react"

export const WhatWeDo = () => {
  const fontSize = { base: "xl", md: "2xl", lg: "3xl" }
  const list = [
    "Yüksek lisans ve lisans düzeyindeki öğrencilere akademik projelerde danışmanlık hizmeti sağlamak",
    "İntihal oranını düşürme hizmetleri sunarak özgün çalışmaların oluşturulmasına katkıda bulunmak",
    "Ders ödevleri ve tez hazırlama süreçlerinde destek vererek öğrencilere rehberlik etmek",
    "Akademik yayınlarda danışmanlık hizmetleri ile akademik başarıyı artırmayı hedeflemek",
  ]

  return (
    <Center w={"100%"} minH={"100vh"} bg={"white"}>
      <Stack w={"80%"} h={"80%"} justifyContent={"space-evenly"}>
        {list.map((item, index) => (
          <Heading
            fontSize={fontSize}
            textAlign={index % 2 === 0 ? "right" : "left"}
            pl={index % 2 === 0 ? `20px` : 0}
            pr={index % 2 === 0 ? 0 : `20px`}
            width={"100%"}
            key={index}
          >
            {item}
          </Heading>
        ))}
      </Stack>
    </Center>
  )
}
