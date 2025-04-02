import { Hero } from "@/components/layout/hero";
import { HowItWorks } from "@/components/layout/how-it-works";
import OurClients from "@/components/layout/our-clients";
import { Pricing } from "@/components/layout/pricing";
import { WhyItWorks } from "@/components/layout/why-it-works";

export default function Home() {
  return (
    <>
      <Hero />
      <OurClients />
      <WhyItWorks />
      <HowItWorks />
      <Pricing />
    </>
  );
}
