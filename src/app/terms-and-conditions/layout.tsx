import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | RateOurJob",
  description: "Read our terms of service to understand your rights and obligations when using RateOurJob's platform and services.",
  openGraph: {
    title: "Terms of Service | RateOurJob",
    description: "Read our terms of service to understand your rights and obligations when using RateOurJob's platform and services.",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 