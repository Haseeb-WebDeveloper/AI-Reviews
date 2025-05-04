import { fetchPostBySlug, fetchSanityData, urlForImage } from '@/lib/sanity/client'
import type { Post } from '@/lib/sanity/client'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import BlogPostContent from '@/components/blog/blog-post-content'
import BlogSidebar from '@/components/blog/blog-sidebar'
import { totalPostsSlugsQuery } from '@/lib/sanity/queries'
import Script from 'next/script'

export const revalidate = 60;

// generatestaticprams
export async function generateStaticParams() {
  const slugs = await fetchSanityData<{ slug: string }[]>(totalPostsSlugsQuery)
  return slugs.map(slugObj => ({ slug: slugObj.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | RateOurJob Blog',
      description: 'The requested blog post could not be found.',
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
      url: `https://rateourjob.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://rateourjob.com/blog/${post.slug}`,
    },
  }
}

// Generate JSON-LD schema
function generateStructuredData(post: Post) {
  // Create BlogPosting schema
  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.seoTitle || post.title,
    'description': post.seoDescription || post.description,
    'image': urlForImage(post.imageUrl).url(),
    'datePublished': post.publishedAt,
    'dateModified': post.publishedAt,
    'author': {
      '@type': 'Organization',
      'name': 'RateOurJob'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'RateOurJob',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://rateourjob.com/logo.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://rateourjob.com/blog/${post.slug}`
    },
    'keywords': post.keywords?.join(', '),
    'articleSection': 'Blog'
  }

  // Create BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://rateourjob.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': 'https://rateourjob.com/blog'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': post.title,
        'item': `https://rateourjob.com/blog/${post.slug}`
      }
    ]
  }

  return { blogPostSchema, breadcrumbSchema }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { blogPostSchema, breadcrumbSchema } = generateStructuredData(post)

  return (
    <div className="min-h-screen bg-background pt-44 md:pt-44 pb-20 border-b border-foreground/10 ">
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="mx-auto px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Visible Breadcrumbs for UX */}
          <nav className="text-sm mb-4">
            <ol className="flex flex-wrap items-center text-muted-foreground">
              <li className="flex items-center">
                <Link href="/" className="hover:text-foreground">Home</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <Link href="/blog" className="hover:text-foreground">Blog</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-foreground truncate max-w-[200px]">
                {post.title}
              </li>
            </ol>
          </nav>
          
          {/* Back Navigation */}
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <BlogPostContent post={post} />
            </div>

            {/* Sidebar */}
            <div className="lg:w-[300px] space-y-8">
              <BlogSidebar post={post} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}