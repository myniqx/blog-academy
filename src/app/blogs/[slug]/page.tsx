import { useRouter } from "next/router"
import { NextSeo } from 'next-seo'
import blogs from "@/constants/blogs/blogs.json"
import { BlogContent } from "@/components/BlogContent"



const Blog = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const blogPost = blogs.find((blog) => blog.slug === slug)

  if (!blogPost) {
    return <div>Blog not found</div>
  }

  return (
    <>
      {/* @ts-ignore
      <NextSeo
        title={blogPost.title}
        description={blogPost.description}
        openGraph={{
          title: blogPost.title,
          description: blogPost.description,
        }}
      /> */}

      <BlogContent blog={blogPost} />
    </>
  )
}


export default Blog