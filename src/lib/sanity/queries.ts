export const allCategoriesQuery = `
  *[_type == "category"] {
    _id,
    name,
    "image": image.asset._ref
  }
`;

export const featuredPostQuery = `
  *[_type == "blog" && category == "Featured"][0] {
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
    categories[]-> {
      title,
      image
    }
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
    categories[]-> {
      title,
      image
    },
    content,
    "relatedPosts": relatedPosts[]-> {
      _id,
      title,
      "slug": slug.current,
      description,
      publishedAt,
      "imageUrl": featuredImage.asset._ref,
      "imageAlt": featuredImage.alt
    }
  }
`;

// all published posts
export const totalPostsQuery = `
  count(*[_type == "blog" && publishedAt < now()])
`; 


// all published posts slugs
export const totalPostsSlugsQuery = `
  *[_type == "blog" && defined(slug.current)][]{
    "slug": slug.current
  }
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

