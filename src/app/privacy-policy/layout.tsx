import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RateOurJob",
  description: "Read our privacy policy to understand how we handle your data and protect your privacy when using RateOurJob's platform and services.",
  openGraph: {
    title: "Privacy Policy | RateOurJob",
    description: "Read our privacy policy to understand how we handle your data and protect your privacy when using RateOurJob's platform and services.",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 