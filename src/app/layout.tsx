import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { PopupProvider } from "@/context/popup-context";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL('https://rateourjob.com'),
  title: {
    default: "Grow your business with automated review requests",
    template: "%s | Rateourjob"
  },
  description: "Boost your local reputation with Rate Our Job — the smart platform that helps local businesses automatically collect and manage customer reviews across Google, Facebook, and more.",
  keywords: ["AI review management", "google my business", "gmb", "automated customer reviews", "local business reputation tools", "Google review automation", "AI response to reviews", "increase Google reviews", "online reputation management", "customer feedback automation", "review request software", "AI-powered review solutions"],
  authors: [{ name: "Wasif Ali Khan" }],
  creator: "Wasif Ali Khan",
  publisher: "Wasif Ali Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rateourjob.com",
    siteName: "Rateourjob",
    title: "Rateourjob: Grow your business with automated review requests",
    description: "Boost your local reputation with Rate Our Job — the smart platform that helps local businesses automatically collect and manage customer reviews across Google, Facebook, and more.",
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Rateourjob - Grow your business with automated review requests',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rateourjob: Grow your business with automated review requests",
    description: "Boost your local reputation with Rate Our Job — the smart platform that helps local businesses automatically collect and manage customer reviews across Google, Facebook, and more.",
    images: ['/images/logo.png'],
    creator: "@Rateourjob",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  alternates: {
    canonical: "https://rateourjob.com",
    languages: {
      'en-US': "https://rateourjob.com",
    },
  },
  category: 'Business Software',
  classification: 'Online Reputation Management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Rateourjob",
              "applicationCategory": "BusinessApplication",
              "description": "Boost your local reputation with Rate Our Job — the smart platform that helps local businesses automatically collect and manage customer reviews across Google, Facebook, and more.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "100"
              },
              "operatingSystem": "Web-based",
              "url": "https://rateourjob.com",
              "sameAs": [
                "https://twitter.com/Rateourjob"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rateourjob",
              "url": "https://rateourjob.com",
              "logo": "https://rateourjob.com/images/logo.png",
              "description": "Boost your local reputation with Rate Our Job — the smart platform that helps local businesses automatically collect and manage customer reviews across Google, Facebook, and more.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://rateourjob.com/contact"
              }
            })
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YNBCCMPFJE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YNBCCMPFJE');
            `
          }}
        />
      </head>
      <body className="antialiased body">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <PopupProvider>
            <main>
              <Analytics />
                <AnnouncementBar />
                <Navbar />
                {children}
                <Footer />
            </main>
          </PopupProvider>
          <Toaster position="bottom-right" expand={true} richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}