import type { Metadata } from "next";
// import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScrollProvider } from "@/components/Smooth-scrolling";
import { Navbar } from "@/components/layout/navbar";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Footer } from "@/components/layout/footer";
import { PopupProvider } from "@/context/popup-context";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Boost Your Local Business with AI-Powered Review Management | RateOurJob",
  description: "Enhance your online presence with RateOurJob's AI-driven tools. Automate customer review requests via SMS and email, respond with AI, and showcase reviews on your Google Business Profile. Start your free trial today!",
  keywords: "AI review management, automated customer reviews, local business reputation tools, Google review automation, AI response to reviews, increase Google reviews, online reputation management, customer feedback automation, review request software, AI-powered review solutions",
  openGraph: {
    title: "Boost Your Local Business with AI-Powered Review Management | RateOurJob",
    description: "Enhance your online presence with RateOurJob's AI-driven tools. Automate customer review requests via SMS and email, respond with AI, and showcase reviews on your Google Business Profile.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Your Local Business with AI-Powered Review Management | RateOurJob",
    description: "Enhance your online presence with RateOurJob's AI-driven tools. Automate customer review requests via SMS and email, respond with AI, and showcase reviews.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        </ThemeProvider>
      </body>
    </html>
  );
}