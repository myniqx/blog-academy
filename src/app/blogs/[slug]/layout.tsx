import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import blogs from "@/constants/blogs/blogs.json";
import { BlogPreview } from "@/components/BlogPreview";

type BlogLayoutProps = PropsWithChildren<{
  params: { slug: string };
}>;

const BlogLayout: React.FC<BlogLayoutProps> = ({
  children,
  params: { slug },
}) => {
  const otherBlogs = blogs.filter((blog) => blog.slug !== slug);

  return (
    <Container maxW={"7xl"}>
      <VStack spacing={6}>
        {children}

        <Card variant="outline" boxShadow="2xl" rounded={"3xl"}>
          <CardHeader>
            <Heading size="md">Diğer Yazılar</Heading>
          </CardHeader>
          <CardBody>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2}>
              {otherBlogs.map((blog) => (
                <BlogPreview
                  key={blog.slug}
                  title={blog.title}
                  description={blog.description}
                  slug={blog.slug}
                  simple
                />
              ))}
            </SimpleGrid>
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
};

export default BlogLayout;
