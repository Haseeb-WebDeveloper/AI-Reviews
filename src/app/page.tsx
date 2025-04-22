'use client'

import { ContactForm } from "@/components/layout/contact-form";
import { Hero } from "@/components/layout/hero";
import { HowItWorks } from "@/components/layout/how-it-works";
import OurClients from "@/components/layout/our-clients";
import { Pricing } from "@/components/layout/pricing";
import { Testmonial } from "@/components/layout/testmonial";
import { WhyItWorks } from "@/components/layout/why-it-works";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import Script from "next/script";

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

  // JSON-LD structured data for Organization and LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://rateourjob.com/#organization",
        "name": "RateOurJob",
        "url": "https://rateourjob.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://rateourjob.com/logo.png",
          "width": 200,
          "height": 60
        },
        "description": "AI-powered review management for local businesses. Automate customer review requests via SMS and email, respond with AI, and showcase reviews on your Google Business Profile.",
        "sameAs": [
          "https://wa.me/923144174625",
          "https://www.facebook.com/profile.php?id=61574592760873",
          "https://www.linkedin.com/company/rateourjob/",
          "https://www.instagram.com/rateourjob"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://rateourjob.com/#website",
        "url": "https://rateourjob.com",
        "name": "RateOurJob",
        "publisher": {
          "@id": "https://rateourjob.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://rateourjob.com/#webpage",
        "url": "https://rateourjob.com",
        "name": "Boost Your Local Business with AI-Powered Review Management | RateOurJob",
        "isPartOf": {
          "@id": "https://rateourjob.com/#website"
        },
        "about": {
          "@id": "https://rateourjob.com/#organization"
        },
        "description": "Enhance your online presence with RateOurJob's AI-driven tools. Automate customer review requests via SMS and email, respond with AI, and showcase reviews on your Google Business Profile."
      }
    ]
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
