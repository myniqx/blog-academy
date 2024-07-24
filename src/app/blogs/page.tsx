import { Container, SimpleGrid } from "@chakra-ui/react"
import blogs from "@/constants/blogs/blogs.json"
import { BlogPreview } from "@/components/BlogPreview"


const Blogs = () => {

    return (
        <Container maxW={"7xl"}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} overflowY={"auto"}>
                {blogs.map((blog) => (
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