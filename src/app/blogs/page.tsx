import { Container, SimpleGrid } from "@chakra-ui/react"
import blogs from "@/constants/blogs/blogs.json"
import { BlogPreview } from "@/components/BlogPreview"
import { getMetaData } from "@/constants/metadataBase"

export const metadata = getMetaData({
  title: "Doruk Akademi rehber blogları",
  description: "Doruk Akademi rehber blogları",
  route: "blogs",
  keywords: ["doruk akademi", "rehber blogları"],
})

const Blogs = () => {

  const sortedBlogs = blogs
    .sort((a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime())


  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} overflowY={"auto"}>
        {sortedBlogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            description={blog.description}
            slug={blog.slug}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Blogs
