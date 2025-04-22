import { fetchPostBySlug, fetchSanityData, urlForImage } from '@/lib/sanity/client'
import type { Post } from '@/lib/sanity/client'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import BlogPostContent from '@/components/blog/blog-post-content'
import { totalPostsSlugsQuery } from '@/lib/sanity/queries'


export const revalidate = 60;

// generatestaticprams
export async function generateStaticParams() {
  const slugs = await fetchSanityData<{ slug: string }[]>(totalPostsSlugsQuery)
  return slugs.map(slugObj => ({ slug: slugObj.slug }))
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }>}) {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)
  return {
    title: post?.seoTitle || post?.title,
    description: post?.seoDescription || post?.description,
    keywords: post?.keywords || [],
    openGraph: {
      title: post?.seoTitle || post?.title,
      description: post?.seoDescription || post?.description,
      images: [
        {
          url: urlForImage(post?.imageUrl).url(),
          alt: post?.imageAlt || '',
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}


export default async function BlogPost({ params }: { params: Promise<{ slug: string }>}) {

  const { slug } = await params
  const post = await fetchPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pt-44 md:pt-44 pb-20 border-b border-foreground/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Navigation */}
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>


          {/* Blog Post Content */}
          <BlogPostContent post={post} />
        </div>
      </div>
    </div>
  )
}