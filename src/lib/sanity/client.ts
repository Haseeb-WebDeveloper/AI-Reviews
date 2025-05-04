import { createClient, QueryParams } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import { groq } from 'next-sanity';
import { featuredPostsQuery, allPostsQuery, singlePostQuery, totalPostsQuery, imageGalleryQuery, totalPostsSlugsQuery } from './queries';

export const sanityClient = createClient({
  projectId: "9m86wjji",
  dataset: "production",
  apiVersion: "2024-03-20",
  useCdn: true,
  token: "skJ23v8kaEoPuNrpCrDj5OGwUMz5s3uOlwv0MEGgbUNWGBfmlrZcbMMRQiXcZ8P6U2h6h7S4XwbaarI6f7tjLOdkFcFK4rxl48tRyjGr7xNSclSXpCQzBWFkYOeB31GN9GSG2cVwrv1wwPJYrVRxF8oCFlkwIiCHwrFA5g6AEVKLico3WeGr",
});

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: any) {
  return builder.image(source);
}

export type Post = {
  _id: string;
  title: string;
  seoTitle?: string;
  description: string;
  seoDescription?: string;
  keywords?: string[];
  slug: string;
  publishedAt: string;
  imageUrl: string;
  imageAlt?: string;
  imageCaption?: string;
  category: string;
  content: any[];
};

export interface ImageGallery {
  _id: string;
  title: string;
  categories: any[];
}

export async function fetchFeaturedPosts(): Promise<Post[]> {
  try {
    const posts = await sanityClient.fetch(featuredPostsQuery, {}, { next: { revalidate: 60 } });
    return posts;
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}

export async function fetchPosts(start: number = 0, end: number = 10): Promise<Post[]> {
  try {
    const posts = await sanityClient.fetch(allPostsQuery, { start, end }, { next: { revalidate: 60 } });
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function fetchTotalPosts(): Promise<number> {
  try {
    const total = await sanityClient.fetch(totalPostsQuery, {}, { next: { revalidate: 60 } });
    return total;
  } catch (error) {
    console.error("Error fetching total posts:", error);
    return 0;
  }
}

export async function fetchPostBySlug(slug: string): Promise<Post | null | any> {
  try {
    const post = await sanityClient.fetch(singlePostQuery, { slug }, { next: { revalidate: 60 } });
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
} 

export async function fetchImageGallery() {
  try {
    const imageGallery = await sanityClient.fetch(imageGalleryQuery, {}, { next: { revalidate: 60 } });
    return imageGallery;
  } catch (error) {
    console.error("Error fetching image gallery:", error);
    return [];
  }
}

export async function fetchPostsSlugs(): Promise<string[]> {
  try {
    const slugs = await sanityClient.fetch(totalPostsSlugsQuery, {}, { next: { revalidate: 60 } });
    return slugs;
  } catch (error) {
    console.error("Error fetching posts slugs:", error);
    return [];
  }
}

export const fetchSanityData = async <T>(
  query: string,
  params: QueryParams = {},
  options: { revalidate?: number } = {}
): Promise<T> => {
  return sanityClient.fetch(query, params, {
    ...options.revalidate && { next: { revalidate: options.revalidate } },
  })
}