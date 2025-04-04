import type { Metadata } from "next";
// import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrolling from "@/components/Smooth-scrolling";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

export const metadata: Metadata = {
  title: "Rate our job",
  description: "Rate Our Job",
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
          <main>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <DotPattern
                className={cn(
                  "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
              />
            </div>
            <SmoothScrolling>
              <Navbar />
              {children}
            </SmoothScrolling>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}