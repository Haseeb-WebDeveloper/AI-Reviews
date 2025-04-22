'use client'

import Head from 'next/head'

type SocialMetaProps = {
  title: string
  description: string
  ogImage?: string
  ogType?: string
  twitterCard?: 'summary' | 'summary_large_image'
  canonicalUrl?: string
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
  children?: React.ReactNode
}

export default function SocialMeta({
  title,
  description,
  ogImage = 'https://rateourjob.com/images/og-default.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  keywords,
  author = 'RateOurJob',
  publishedTime,
  modifiedTime,
  children
}: SocialMetaProps) {
  return (
    <Head>
      {/* Essential Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta name="author" content={author} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="RateOurJob" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@RateOurJob" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {children}
    </Head>
  )
} 