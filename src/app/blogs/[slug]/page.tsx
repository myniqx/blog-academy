import { BlogContent } from "@/components/BlogContent";
import blogs from "@/constants/blogs/blogs.json";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blogPost = blogs.find((blog) => blog.slug === slug);

  if (!blogPost) {
    return <div>Blog not found</div>;
  }

  return <BlogContent blog={blogPost} />;
};

export default Blog;
