import { Suspense } from 'react';
import BlogList from '../../components/blog/blog-list';
import { sanityClient, fetchCategories } from '@/lib/sanity/client';
import { allPostsQuery, featuredPostQuery, totalPostsQuery } from '@/lib/sanity/queries';
import BlogSkeleton from '../../components/blog/blog-skeleton';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Rateourjob: Blogs',
  description: 'Discover expert tips on review automation, local SEO, and Google My Business. The Rate Our Job Blog helps local business owners to grow their business.',
  keywords: ['RateOurJob blog', 'business reviews', 'customer feedback', 'review management', 'local business tips', 'online reputation', 'Google Business Profile'],
  openGraph: {
    title: 'Rateourjob: Blogs',
    description: 'Discover expert tips on review automation, local SEO, and Google My Business. The Rate Our Job Blog helps local business owners to grow their business.',
    type: 'website',
    url: 'https://rateourjob.com/blog',
    images: [
      {
        url: '/blog/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RateOurJob Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rateourjob: Blogs',
    description: 'Discover expert tips on review automation, local SEO, and Google My Business. The Rate Our Job Blog helps local business owners to grow their business.',
    images: ['/blog/og-image.jpg']
  },
  alternates: {
    canonical: 'https://rateourjob.com/blog'
  }
};

// This function runs at build time
export async function generateStaticParams() {
  const total = await sanityClient.fetch(totalPostsQuery);
  const POSTS_PER_PAGE = 10;
  const pages = Math.ceil(total / POSTS_PER_PAGE);
  
  return Array.from({ length: pages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

// This function runs at build time
async function getInitialPosts() {
  try {
    const [posts, total, featuredPost, categories] = await Promise.all([
      sanityClient.fetch(allPostsQuery, { start: 0, end: 10 }, {next: { revalidate: 60 }} ),
      sanityClient.fetch(totalPostsQuery, {}, {next: { revalidate: 60 }} ),
      sanityClient.fetch(featuredPostQuery, {}, {next: { revalidate: 60 }} ),
      fetchCategories()
    ]);
    
    return {
      posts,
      total,
      featuredPost,
      categories
    };
  } catch (error) {
    console.error("Error fetching initial posts:", error);
    return {
      posts: [],
      total: 0,
      featuredPost: null,
      categories: []
    };
  }
}

export default async function BlogPage() {
  // Create structured data for BreadcrumbList
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rateourjob.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://rateourjob.com/blog"
      }
    ]
  };
  
  // Create structured data for Blog
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "Rateourjob Blog - Latest News & Updates",
    "description": "Discover expert tips on review automation, local SEO, and Google My Business. The Rate Our Job Blog helps local business owners to grow their business.",
    "url": "https://rateourjob.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "RateOurJob",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rateourjob.com/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />
      
      {/* Hero Section */}
      <div className="relative pt-24 md:pt-48 pb-16 border-b border-foreground/10">
        <div className="absolute inset-0 bg-[url('/blog/pattern.svg')] opacity-20" />
        <div className="relative max-w-4xl mx-auto h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Latest News & Updates
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Learn about the latest features, updates, and insights from RateOurJob.
            </p>
          </div>
        </div>
      </div>

      <Suspense fallback={<BlogSkeleton />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

// Separate async component for posts
async function BlogPosts() {
  const { posts, total, featuredPost, categories } = await getInitialPosts();

  if (posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold">No posts found</h2>
          <p className="mt-4 text-muted-foreground">Check back later for new content.</p>
        </div>
      </div>
    );
  }

  return <BlogList initialPosts={posts} totalPosts={total} featuredPost={featuredPost} categories={categories} />;
} 