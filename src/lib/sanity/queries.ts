export const featuredPostsQuery = `
  *[_type == "blog" && category == "Featured"] | order(publishedAt desc)[0...4] {
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
    category
  }
`;

export const allPostsQuery = `
  *[_type == "blog" && publishedAt < now()] | order(publishedAt desc)[$start...$end] {
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
    category
  }
`;

export const singlePostQuery = `
  *[_type == "blog" && slug.current == $slug][0] {
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
    category,
    content
  }
`;

// all published posts
export const totalPostsQuery = `
  count(*[_type == "blog" && publishedAt < now()])
`; 

export const imageGalleryQuery = `
*[_type == "imageGallery"]{
  title,
  categories[]{
    categoryTitle,
    images[]{
      image{
        asset->{
          _id,
          url
        }
      },
      title,
      alt
    }
  }
}
`;

