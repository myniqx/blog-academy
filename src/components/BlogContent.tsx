import { Container, Stack, Box, Text, Image, Flex, Icon } from "@chakra-ui/react"
import ReactMarkdown from "react-markdown"
import { FaCalendarAlt, FaEye } from "react-icons/fa"

type Blog = {
  title: string
  description: string
  content: string
  slug: string
  date?: string
  views?: number
}

export const BlogContent = ({ blog }: { blog: Blog }) => {
  return (
    <Container maxW={"7xl"}>
      <Stack overflow={"hidden"} rounded={"3xl"} spacing={12} bg={"white"} alignItems={"center"} boxShadow={"2xl"}>
        <Box position="relative" width="100%" textAlign="center">
          <Image
            objectFit="cover"
            width={"100%"}
            src={`/images/blog/${blog.slug}.jpg`}
            alt={blog.title}
          />
          <Box
            position="absolute"
            bottom={0}
            width="100%"
            bg="rgba(0, 0, 0, 0.6)"
            color="white"
            p={4}
            textAlign="center"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <Text fontSize="2xl" fontWeight="bold">{blog.title}</Text>
          </Box>
        </Box>

        <Stack spacing={4} width="100%" px={6}>
          <Flex justify="space-between" align="center" width="100%">
            <Flex align="center">
              <FaCalendarAlt />
              <Text>{blog.date}</Text>
            </Flex>
            <Flex align="center">
              <FaEye />
              <Text>{blog.views}</Text>
            </Flex>
          </Flex>

          <Box mt={4}>
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}
