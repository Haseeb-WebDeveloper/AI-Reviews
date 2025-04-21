import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | RateOurJob",
  description: "Blog",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
    
