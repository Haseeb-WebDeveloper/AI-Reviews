'use client'

import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { urlForImage } from '@/lib/sanity/client'
import type { Post } from '@/lib/sanity/client'
import { PortableText } from '@portabletext/react'

export default function BlogPostContent({ post }: { post: Post }) {
  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      {/* Article Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={post.publishedAt}>{publishDate}</time>
          </div>
          <div className="bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full">
            <span className="text-sm font-medium">{post.category}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src={urlForImage(post.imageUrl).url()}
          alt={post.imageAlt || post.title}
          width={1200}
          height={630}
          priority
          className="object-cover w-full h-full"
        />
        {post.imageCaption && (
          <p className="text-sm text-muted-foreground mt-2 text-center">
            {post.imageCaption}
          </p>
        )}
      </div>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg dark:prose-invert max-w-none prose-a:underline prose-p:text-foreground/95 prose-p:text-xl prose-p:leading-relaxed"
      >
        <PortableText 
          value={post.content}
          components={{
            types: {
              image: ({value}: {value: any}) => {
                return (
                  <figure>
                    <Image 
                      src={urlForImage(value).url()} 
                      alt={value.alt || ''} 
                      width={800} 
                      height={500}
                      className="rounded-lg"
                    />
                    {value.caption && (
                      <figcaption className="text-center text-sm text-muted-foreground mt-2">
                        {value.caption}
                      </figcaption>
                    )}
                  </figure>
                )
              }
            }
          }}
        />
      </motion.article>
    </>
  )
} 