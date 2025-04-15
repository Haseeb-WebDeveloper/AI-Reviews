'use client'

import { ContactForm } from "@/components/layout/contact-form";
import { Hero } from "@/components/layout/hero";
import { HowItWorks } from "@/components/layout/how-it-works";
import { Navbar } from "@/components/layout/navbar";
import OurClients from "@/components/layout/our-clients";
import { Pricing } from "@/components/layout/pricing";
import { Testmonial } from "@/components/layout/testmonial";
import { WhyItWorks } from "@/components/layout/why-it-works";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function Home() {
  // smooth scroll while click on any nav menu link with id (#)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && (target as HTMLAnchorElement).hash) {
        e.preventDefault();
        const element = document.querySelector((target as HTMLAnchorElement).hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
      <Hero />
      <OurClients />
      <WhyItWorks />
      <HowItWorks />
      <Pricing />
      <Testmonial />
      <ContactForm />
    </>
  );
}
