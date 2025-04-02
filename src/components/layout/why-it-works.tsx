"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

export function WhyItWorks() {
  return (
    <section className="py-12 overflow-x-hidden">
      <div className="max-w-[1050px] mx-auto px-6 md:px-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 ">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-foreground text-[20px]"
              >
                Why Reviews Decide Who Wins Local Searches
              </motion.h2> */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-5xl font-bold"
              >
                Look what happens when someone searches
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl lg:text-3xl font-bold text-primary"
              >
                [Your Service] near me
              </motion.p>

            </div>

            {/* Points */}
            <div className="space-y-6">
              {[
                {
                  title: "The business with the most reviews dominates",
                  description: "Even with a slightly lower star rating (e.g., 4.5★ vs. competitors' 4.8★), review volume often pushes them to the top of search results."
                },
                {
                  title: "Quantity beats perfect ratings",
                  description: "Customers trust businesses with hundreds of reviews over those with fewer, even if the competition has slightly higher stars."
                },
                {
                  title: "Every new review is free advertising",
                  description: "That \"1,000+ reviews\" badge subconsciously tells searchers: \"This is the popular, trusted choice.\""
                }
              ].map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  {/* <div className="flex-shrink-0 size-6 mt-1">
                    <Star className="size-6 text-primary" />
                  </div> */}
                  <div className="space-y-1">
                    <h3 className="font-semibold text-2xl">{point.title}</h3>
                    <p className="text-foreground text-xl">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="h-full w-full flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 p-4">
              <img
                src="/Google_reviews_ranking.jpg" // You'll need to add this image
                alt="Local search results showing review impact"
                className="rounded-xl shadow-2xl h-full w-full z-10"
              />
            </div>
            <div className="absolute top-0 bottom-0 left-0 w-[800px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-4xl bg-secondary"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
