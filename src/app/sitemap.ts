import { fetchSanityData } from "@/lib/sanity/client";
import { totalPostsSlugsQuery } from "@/lib/sanity/queries";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all blog post slugs
  const postSlugs = await fetchSanityData<{ slug: string }[]>(totalPostsSlugsQuery);
  
  // Base URL for the site
  const baseUrl = "https://rateourjob.com";
  
  // Get the current date for lastModified
  const date = new Date();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: date,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: date,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: date,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: date,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];
  
  // Blog post pages
  const blogPages = postSlugs.map((slugObj) => ({
    url: `${baseUrl}/blog/${slugObj.slug}`,
    lastModified: date,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  
  // Combine all pages
  return [...staticPages, ...blogPages];
} 