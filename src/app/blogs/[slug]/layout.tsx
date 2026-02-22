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
import { getMetaData } from "@/constants/metadataBase";
import { Metadata, ResolvingMetadata } from "next";

type BlogLayoutProps = PropsWithChildren<{
  params: Promise<{ slug: string }>;
}>;

export async function generateMetadata(
  { params }: BlogLayoutProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const currentBlog = blogs.find((blog) => blog.slug === slug);

  const metadata = getMetaData({
    title: currentBlog?.title || "Blog Yazısı Bulunamadı",
    description: currentBlog?.description || "Blog yazısı bulunamadı.",
    keywords: currentBlog?.title.split(" "),
    route: currentBlog ? `blogs/${slug}` : "blog",
  });

  return metadata;
}

const BlogLayout = async ({ children, params }: BlogLayoutProps) => {
  const { slug } = await params;

  const otherBlogs = blogs
    .filter((blog) => blog.slug !== slug)
    .sort(
      (a, b) =>
        new Date(b.date || "").getTime() - new Date(a.date || "").getTime(),
    );

  return (
    <Container maxW={"7xl"}>
      <VStack spacing={6}>
        {children}

        <Card variant="outline" boxShadow="2xl" rounded={"3xl"}>
          <CardHeader>
            <Heading size="md">Diğer Yazılar</Heading>
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
