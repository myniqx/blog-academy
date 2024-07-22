import { Heading, Text, Image, Container, Stack } from "@chakra-ui/react"

import ReactMarkdown from 'react-markdown'

type Blog = {
  title: string
  description: string
  content: string
  slug: string
}

export const BlogContent = ({ blog }: { blog: Blog }) => {
  return (
    <Container
      maxW={"7xl"}
    >
      <Stack
        overflow={"hidden"}
        rounded={"3xl"}
        spacing={12}

        bg={"white"}
        alignItems={"center"}
        boxShadow={"2xl"}
      >
        <Image
          objectFit='cover'
          width={"100%"}
          src={`../images/blog/${blog.slug}.jpg`}
          alt={blog.title}
        />
        <Heading as="h1" size="2xl" mb={4}>
          {blog.title}
        </Heading>
        <Text mb={4}>{blog.description}</Text>
        <ReactMarkdown
        >
          {blog.content}
        </ReactMarkdown>
      </Stack>
    </Container>
  )
}