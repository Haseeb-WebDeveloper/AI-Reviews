"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "per month",
    description: "Perfect for small businesses just getting started",
    features: [
      "Up to 100 review requests per month",
      "Email & SMS review invitations",
      "Google & Facebook review collection",
      "Basic analytics dashboard",
      "Email support",
      "Review monitoring",
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "per month",
    description: "For growing businesses that need more power",
    features: [
      "Unlimited review requests",
      "Priority email & SMS delivery",
      "All review platforms supported",
      "Advanced analytics & reporting",
      "Priority 24/7 support",
      "Custom branding",
    ],
    isPopular: true,
  },
];

export function Pricing() {
  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1050px] mx-auto px-6 md:px-0">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2
            className="text-4xl font-bold"
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className="text-xl text-muted-background max-w-2xl mx-auto"
          >
            No hidden fees. No contracts. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="relative"
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    With Custom Website
                  </span>
                </div>
              )}

              <div className={`h-full rounded-2xl border bg-black text-background p-8 ${plan.isPopular ? 'shadow-lg ring-2 ring-primary' : ''}`}>
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
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="size-5 text-primary flex-shrink-0" />
                        <span className="text-muted-background">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                 <Link href="/contact" className="cursor-pointer">
                 <Button 
                    className="w-full"
                    variant= "default"
                    size="lg"
                  >
                    Get Started
                  </Button>
                 </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-background">
            Need a custom plan? <a href="/contact" className="text-primary hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
} 