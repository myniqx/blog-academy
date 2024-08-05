import { BlogContent } from "@/components/BlogContent"
import blogs from "@/constants/blogs/blogs.json"

const Blog = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const blogPost = blogs.find((blog) => blog.slug === slug)

  if (!blogPost) {
    return <div>Blog not found</div>
  }

  return (
    <BlogContent blog={blogPost} />
  )
}

export default Blog
