import { fetchPostBySlug, urlForImage } from '@/lib/sanity/client'
import type { Post } from '@/lib/sanity/client'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import BlogPostContent from '@/components/blog/blog-post-content'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found | RateOurJob Blog',
      description: 'The requested blog post could not be found.'
    }
  }

  const ogImage = urlForImage(post.imageUrl).url()

  return {
    title: `${post.seoTitle || post.title} | RateOurJob Blog`,
    description: post.seoDescription || post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      images: [ogImage]
    },
    alternates: {
      canonical: `https://rateourjob.com/blog/${post.slug}`
    }
  }
}

// Generate JSON-LD schema
function generateJsonLd(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    image: urlForImage(post.imageUrl).url(),
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'RateOurJob'
    },
    publisher: {
      '@type': 'Organization',
      name: 'RateOurJob',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rateourjob.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rateourjob.com/blog/${post.slug}`
    }
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchPostBySlug(params.slug)

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

          {/* JSON-LD Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateJsonLd(post))
            }}
          />

          {/* Blog Post Content */}
          <BlogPostContent post={post} />
        </div>
      </div>
    </div>
  )
}