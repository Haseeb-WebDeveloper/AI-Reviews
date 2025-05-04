'use client';

import { Post, urlForImage } from '@/lib/sanity/client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import Link from 'next/link';

interface BlogSidebarProps {
  post: Post;
}

export default function BlogSidebar({ post }: BlogSidebarProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <>
    <div className='border border-foreground/10 rounded-lg p-3 space-y-6 bg-foreground/10'>
        {/* Categories Section */}
        <div className="bg-background rounded-lg ">
        {/* only one category image */}
        <Image 
          src={urlForImage(post?.categories?.[0]?.image).url()} 
          alt="Category Image" 
          width={100} 
          height={100} 
          className='rounded-lg w-full h-full object-cover' 
        />
      </div>

      {/* Share Section */}
      <div className="px-6 py-4 border border-foreground/10 rounded-lg bg-background">
        <h3 className="text-lg font-semibold mb-2">Share This Post</h3>
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => handleShare('facebook')}
          >
            <Facebook className="w-4 h-4" />
            Share on Facebook
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => handleShare('twitter')}
          >
            <Twitter className="w-4 h-4" />
            Share on Twitter
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => handleShare('linkedin')}
          >
            <Linkedin className="w-4 h-4" />
            Share on LinkedIn
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={copyToClipboard}
          >
            <LinkIcon className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy Link'}
          </Button>
        </div>
      </div>

      {/* Related Posts Section */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <div className="px-6 py-4 border border-foreground/10 rounded-lg bg-background">
          <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
          <div className="space-y-4">
            {post.relatedPosts.map((relatedPost) => (
              <Link 
                key={relatedPost._id} 
                href={`/blog/${relatedPost.slug}`}
                className="group block"
              >
                <div className="flex gap-3 items-start">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={urlForImage(relatedPost.imageUrl).url()}
                      alt={relatedPost.imageAlt || relatedPost.title}
                      fill
                      className="rounded object-cover group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
} 