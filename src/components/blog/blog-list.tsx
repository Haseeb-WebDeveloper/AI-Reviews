'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from '@/lib/sanity/client';
import type { Post, Category } from '@/lib/sanity/client';
import PostCard from '@/components/ui/post-card';
import { useDebounce } from '@/hooks/use-debounce';
import { useEffect } from 'react';

const POSTS_PER_PAGE = 10;

interface BlogListProps {
  initialPosts: Post[];
  totalPosts: number;
  featuredPost: Post | null;
  categories: Category[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function BlogList({ initialPosts, totalPosts, featuredPost, categories }: BlogListProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debouncedSearch !== '') {
      handleSearch(debouncedSearch);
    } else if (selectedCategory) {
      filterByCategory(selectedCategory);
    } else {
      filterByCategory(null);
    }
  }, [debouncedSearch]);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/posts?start=0&end=${POSTS_PER_PAGE}&search=${query}${selectedCategory ? `&category=${selectedCategory}` : ''}`);
      const data = await response.json();
      setPosts(data.posts);
      setPage(1);
    } catch (error) {
      console.error("Error searching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMorePosts = async () => {
    try {
      setLoading(true);
      const start = page * POSTS_PER_PAGE;
      const end = start + POSTS_PER_PAGE;
      
      const response = await fetch(
        `/api/posts?start=${start}&end=${end}${selectedCategory ? `&category=${selectedCategory}` : ''}${searchQuery ? `&search=${searchQuery}` : ''}`
      );
      const data = await response.json();
      
      if (data.posts.length > 0) {
        setPosts(prevPosts => [...prevPosts, ...data.posts]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterByCategory = async (categoryId: string | null) => {
    try {
      setLoading(true);
      setSelectedCategory(categoryId);
      
      const response = await fetch(
        `/api/posts?start=0&end=${POSTS_PER_PAGE}${categoryId ? `&category=${categoryId}` : ''}${searchQuery ? `&search=${searchQuery}` : ''}`
      );
      const data = await response.json();
      
      setPosts(data.posts);
      setPage(1);
    } catch (error) {
      console.error("Error filtering posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
     <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
       {/* Search Section */}
       <div className="mb-8 w-fit">
        <div className="max-w-xl w-full mx-auto md:min-w-[400px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full focus:outline-none focus:ring-0 focus:border-none"
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={() => filterByCategory(null)}
            variant={selectedCategory === null ? "default" : "outline"}
            className="rounded-full hover:bg-primary hover:text-background transition-all duration-300 cursor-pointer"
          >
            All Posts
          </Button>
          {categories.map((category) => (
            <Button
              key={category._id}
              onClick={() => filterByCategory(category._id)}
              variant={selectedCategory === category._id ? "default" : "outline"}
              className="rounded-full hover:bg-primary hover:text-background transition-all duration-300 cursor-pointer"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
     </div>

      {/* {featuredPost && (
          <div className="mb-12 relative">
            <div className="w-full h-[500px] rounded-xl overflow-hidden">
              <Image
                src={urlForImage(featuredPost.imageUrl).url()}
                alt={featuredPost.title}
                width={1000}
                height={1000}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="absolute bottom-0 left-4 md:left-12 p-6 md:p-8 border border-background/50 rounded-lg max-w-lg bg-foreground text-background">
                <h3 className="mt-4 montserrat-sb-h3">{featuredPost.title}</h3>
              </div>
            </Link>
          </div>
        )} */}
      {loading && posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Searching posts...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl font-semibold">No posts found</p>
          <p className="mt-2 text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      ) : (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8"
        >
          {posts.map((post) => (
            <motion.div key={post._id} variants={item}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {posts.length < totalPosts && !searchQuery && (
        <div className="text-center mt-12">
          <Button
            onClick={loadMorePosts}
            disabled={loading}
            className="px-6 py-3 rounded-full"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Loading...
              </div>
            ) : (
              'Load More Posts'
            )}
          </Button>
        </div>
      )}
    </div>
  );
} 