"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Check, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const plans = [
  {
    name: "Starter",
    price: "$75",
    period: "per month",
    description: "Up to 0-150 New Customers Per Month",
    features: [
      {
        title: "Get 4x More Reviews & Referrals",
        description: "Our average customer increases their reviews by 1152% in the first year. So it's safe to say getting 4x more reviews is conservative"
      },
      {
        title: "Automated Text & Email Requests",
        description: "Texting is 6x more effective than emailing for reviews, but we do both for you!"
      },
      {
        title: "Personalized Image Requests",
        description: "We will text and email your end customers a personalized image with their names on it. This image can be a photo of you or your team to cut through the noise and get their attention!"
      },
      {
        title: "Automated Social Review Sharing",
        description: "We will CREATE and POST social media content using your photos and your logo every time you get a 5 star review!"
      },
      {
        title: "Automated AI Review Responses",
        description: "We will respond to all your reviews for you in a personalized fashion using the reviewers name & context from the review."
      },
      {
        title: "Done For You Custom Integration",
        description: "We will build a custom integration into your business. This automates the ENTIRE PROCESS, so you don't have to change a thing. You will start getting reviews, referrals, and more customers on AUTOPILOT. We can integrate with 6,000+ other tools."
      },
      {
        title: "Review Filtering System",
        description: "Although we strive for perfection as business owners sometimes we miss the mark. We will make sure the feedback you get from unhappy customers goes to you and not Google. This is an optional feature if it is a concern for you."
      }
    ],
    isPopular: false,
  },
  {
    name: "Standard",
    price: "$150",
    period: "per month",
    description: "Up to 0-250 New Customers Per Month",
    features: [
      {
        title: "Get 4x More Reviews & Referrals",
        description: "Our average customer increases their reviews by 1152% in the first year. So it's safe to say getting 4x more reviews is conservative"
      },
      {
        title: "Automated Text & Email Requests",
        description: "Texting is 6x more effective than emailing for reviews, but we do both for you!"
      },
      {
        title: "Personalized Image Requests",
        description: "We will text and email your end customers a personalized image with their names on it. This image can be a photo of you or your team to cut through the noise and get their attention!"
      },
      {
        title: "Automated Social Review Sharing",
        description: "We will CREATE and POST social media content using your photos and your logo every time you get a 5 star review!"
      },
      {
        title: "Automated AI Review Responses",
        description: "We will respond to all your reviews for you in a personalized fashion using the reviewers name & context from the review."
      },
      {
        title: "Done For You Custom Integration",
        description: "We will build a custom integration into your business. This automates the ENTIRE PROCESS, so you don't have to change a thing. You will start getting reviews, referrals, and more customers on AUTOPILOT. We can integrate with 6,000+ other tools."
      },
      {
        title: "Review Filtering System",
        description: "Although we strive for perfection as business owners sometimes we miss the mark. We will make sure the feedback you get from unhappy customers goes to you and not Google. This is an optional feature if it is a concern for you."
      },
      {
        title: "Website Machine",
        description: "We'll build you a website that gets you 10% more sales, guaranteed."
      }
    ],
    isPopular: true,
  },
];

export function Pricing() {
  return (
    <TooltipProvider>
      <section id="pricing" className="pt-20 pb-24 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1050px] mx-auto px-4 md:px-0">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">
            The best time to get more reviews was yesterday. The second-best time? Right now.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No contracts. Cancel anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="relative">
                {plan.isPopular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`h-full rounded-2xl border bg-black text-background p-8 ${plan.isPopular ? 'shadow-lg ring-2 ring-primary' : ''}`}>
                  <div className="flex flex-col justify-between h-full gap-6">
                   <div className="space-y-6">
                     {/* Plan Header */}
                     <div>
                      <h3 className="text-2xl font-semibold">{plan.name}</h3>
                      <p className="text-muted-background mt-2">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="ml-2 text-muted-background">{plan.period}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature.title} className="flex items-start gap-3">
                          <Check className="size-5 text-primary flex-shrink-0 mt-1" />
                          <span className="text-muted-background flex-1">{feature.title}</span>
                          <Tooltip delayDuration={0}>
                            <TooltipTrigger className="cursor-pointer">
                              <HelpCircle className="size-5 text-muted-background/50 hover:text-primary transition-colors" />
                            </TooltipTrigger>
                            <TooltipContent side="left" sideOffset={10} className="hidden md:block">
                              <p className="max-w-xs text-base p-2">{feature.description}</p>
                            </TooltipContent>
                            <TooltipContent side="top" className="md:hidden">
                              <p className="max-w-[280px] text-sm p-2">{feature.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                   </div>

                    {/* CTA Button */}
                    <Link href="#contact" className="block">
                      <Button className="w-full" variant="default" size="lg">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
} 