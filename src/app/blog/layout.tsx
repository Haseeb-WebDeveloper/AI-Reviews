import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Business Growth Blog | Insights from RateOurJob",
  description: "Explore expert insights on AI tools, automation, and digital strategies that drive business growth. Learn how RateOurJob uses AI to enhance reputation and customer experience.",
  keywords: [
    "AI in business",
    "AI automation tools",
    "business growth with AI",
    "reputation management",
    "customer feedback automation",
    "AI blog",
    "RateOurJob insights",
    "digital transformation",
    "AI reviews",
    "automated review collection"
  ],
  authors: [{ name: "RateOurJob Team", url: "https://www.rateourjob.com" }],
  creator: "RateOurJob",
  publisher: "RateOurJob",
  openGraph: {
    title: "AI & Business Growth Blog | Insights from RateOurJob",
    description:
      "Stay ahead in the digital age. Discover how AI is transforming businesses through automation, smart review systems, and customer reputation strategies.",
    url: "https://www.rateourjob.com/blog",
    siteName: "RateOurJob",
    type: "website",
    images: [
      {
        url: "https://www.rateourjob.com/logo.png",
        width: 1200,
        height: 630,
        alt: "RateOurJob Blog - AI and Business Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Business Growth Blog | Insights from RateOurJob",
    description:
      "Get the latest updates on AI in business, customer feedback automation, and digital reputation strategies.",
    images: ["https://www.rateourjob.com/logo.png"],
    creator: "@RateOurJob",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Artificial Intelligence, Business, Marketing",
};



export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
    
