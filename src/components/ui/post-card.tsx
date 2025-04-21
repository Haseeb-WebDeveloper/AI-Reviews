import { Post, urlForImage } from "@/lib/sanity/client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }: { post: Post }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const jsonLd = {
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
    }
  };

  return (
    <motion.article key={post._id} variants={item}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href={`/blog/${post.slug}`}>
        <div className="group overflow-hidden bg-foreground/5 border border-border hover:bg-foreground/10 transition-colors rounded-lg">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={urlForImage(post.imageUrl).url()}
              alt={post.imageAlt || post.title}
              width={800}
              height={450}
              className="aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="px-4 py-2">
            <h2 className="line-clamp-2 leading-[150%] font-semibold">
              {post.title}
            </h2>
          </div>
          <div className="px-4 mb-4 space-y-2">
            <p className="text-foreground/95 line-clamp-2">
              {post.description}
            </p>
            <div className="flex justify-between items-center">
              <time dateTime={post.publishedAt} className="text-sm text-foreground/80">
                {publishDate}
              </time>
              {post.category && (
                <span className="text-sm font-medium bg-foreground/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}