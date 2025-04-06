"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Happy Customer Checks Out",
    description: "After a purchase or service, they get a quick, friendly Personalized SMS or email.",
    image: "/step1.png", // You'll need to add these images
    buttonText: "Start Now",
    buttonLink: "/contact"
  },
  {
    number: "02",
    title: "One-Click Review Link",
    description: "They click, leave a review (Google, Yelp, Facebook), and you get instant social proof on your profile",
    image: "/step2.png",
    buttonText: "Learn More",
    buttonLink: "/contact"
  },
  {
    number: "03",
    title: "Watch the Magic Happen",
    description: "You'll see Google moving you up in local rankings, New customers choosing you & leave competitors struggling to keep up.",
    image: "/step3.png",
    buttonText: "Get Started",
    buttonLink: "/contact"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1050px] mx-auto px-6 md:px-0 overflow-x-hidden">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Three simple steps to boost your online presence
          </motion.p>
        </div>

        {/* Steps Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {steps.map((step, index) => (
              <CarouselItem key={step.number}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Left Column - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div className="space-y-6">
                      <span className="text-5xl font-bold text-primary/20">
                        {step.number}
                      </span>
                      <h3 className="text-3xl font-semibold">{step.title}</h3>
                      <p className="text-lg text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    <Link href={step.buttonLink}>
                      <Button size="lg" className="group">
                        {step.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Right Column - Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative aspect-square"
                  >
                    <div className="relative h-full w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 p-4">
                      <img
                        src={step.image}
                        alt={`Step ${index + 1} - ${step.title}`}
                        className="rounded-xl shadow-2xl h-full w-full object-cover"
                      />
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 size-24 bg-primary/10 rounded-full blur-2xl" />
                      <div className="absolute -bottom-4 -left-4 size-32 bg-secondary/10 rounded-full blur-2xl" />
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 size-10 bg-background/50 backdrop-blur border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="-right-12 size-10 bg-background/50 backdrop-blur border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground" />
          </div>

          {/* Progress dots for mobile */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {steps.map((_, index) => (
              <div
                key={index}
                className="size-2 rounded-full bg-primary/20"
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
} 