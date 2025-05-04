import { NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity/client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const start = parseInt(searchParams.get('start') || '0');
    const end = parseInt(searchParams.get('end') || '10');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    // Modify the query based on whether a category is selected and search term is provided
    const query = `
      *[_type == "blog" && publishedAt < now()
        ${category ? `&& "${category}" in categories[]._ref` : ''}
        ${search ? `&& (
          title match "*${search}*" ||
          description match "*${search}*" ||
          seoTitle match "*${search}*" ||
          seoDescription match "*${search}*"
        )` : ''}
      ] | order(publishedAt desc)[$start...$end] {
        _id,
        title,
        seoTitle,
        description,
        seoDescription,
        keywords,
        "slug": slug.current,
        publishedAt,
        "imageUrl": featuredImage.asset._ref,
        "imageAlt": featuredImage.alt,
        "imageCaption": featuredImage.caption,
        categories[]-> {
          title,
          image
        }
      }
    `;

    const posts = await sanityClient.fetch(query, { start, end, category, search });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
} 