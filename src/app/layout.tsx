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
    default: "Boost Your Local Business with AI-Powered Review Management | RateOurJob",
    template: "%s | RateOurJob"
  },
  description: "Automate customer review requests, respond with AI, and showcase reviews on your Google Business Profile. Start your free trial today!",
  keywords: ["AI review management", "automated customer reviews", "local business reputation tools", "Google review automation", "AI response to reviews", "increase Google reviews", "online reputation management", "customer feedback automation", "review request software", "AI-powered review solutions"],
  authors: [{ name: "RateOurJob Team" }],
  creator: "RateOurJob",
  publisher: "RateOurJob",
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
    siteName: "RateOurJob",
    title: "Boost Your Local Business with AI-Powered Review Management | RateOurJob",
    description: "Automate customer review requests, respond with AI, and showcase reviews on your Google Business Profile. Start your free trial today!",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RateOurJob - AI-Powered Review Management',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Your Local Business with AI-Powered Review Management | RateOurJob",
    description: "Automate customer review requests, respond with AI, and showcase reviews on your Google Business Profile. Start your free trial today!",
    images: ['/images/og-image.jpg'],
    creator: "@RateOurJob",
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
              {/* <SmoothScrollProvider> */}
                <AnnouncementBar />
                <Navbar />
                {children}
                <Footer />
              {/* </SmoothScrollProvider> */}
            </main>
          </PopupProvider>
          <Toaster position="bottom-right" expand={true} richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}