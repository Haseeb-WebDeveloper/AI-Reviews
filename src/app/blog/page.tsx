import { Suspense } from 'react';
import BlogList from '../../components/blog/blog-list';
import { sanityClient } from '@/lib/sanity/client';
import { allPostsQuery, totalPostsQuery } from '@/lib/sanity/queries';
import BlogSkeleton from '../../components/blog/blog-skeleton';

// This function runs at build time
export async function generateStaticParams() {
  const total = await sanityClient.fetch(totalPostsQuery);
  // console.log(total);
  const POSTS_PER_PAGE = 10;
  const pages = Math.ceil(total / POSTS_PER_PAGE);
  // console.log(pages);
  
  return Array.from({ length: pages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

// This function runs at build time
async function getInitialPosts() {
  try {
    const [posts, total] = await Promise.all([
      sanityClient.fetch(allPostsQuery, { start: 0, end: 10 }),
      sanityClient.fetch(totalPostsQuery)
    ]);
    
    return {
      posts,
      total
    };
  } catch (error) {
    console.error("Error fetching initial posts:", error);
    return {
      posts: [],
      total: 0
    };
  }
}

export default async function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative pt-24 md:pt-48 pb-16 border-b border-foreground/10">
        <div className="absolute inset-0 bg-[url('/blog/pattern.svg')] opacity-20" />
        <div className="relative max-w-4xl mx-auto h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl  font-bold  mb-4">
              Latest News & Updates
            </h1>
            <p className="text-xl  max-w-2xl mx-auto">
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
  const { posts, total } = await getInitialPosts();

  if (posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold">No posts found</h2>
        </div>
      </div>
    );
  }

  return <BlogList initialPosts={posts} totalPosts={total} />;
} 