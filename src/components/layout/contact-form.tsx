"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, MessageCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! We'll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact"  className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1050px] mx-auto px-6 md:px-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-bold">Contact Us</h1>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MessageCircle className="size-6 text-primary" />
                <p className="text-lg">Live Chat with our AI Specialist</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="size-6 text-primary" />
                <p className="text-lg">Email: info@rateourjob.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="size-6 text-primary" />
                <p className="text-lg">WhatsApp: +923144174625</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-medium">Follow us on social media:</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/rateourjob/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Instagram className="size-8" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61574592760873" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Facebook className="size-8" />
                </a>
                <a href="https://www.linkedin.com/company/rateourjob/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Linkedin className="size-8" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border "
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone and Business Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="business" className="text-sm font-medium">
                    Business Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="business"
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    placeholder="Your Business Name"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium">
                  Business Website <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  placeholder="https://example.com"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                  placeholder="Any additional information..."
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get Started Free"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}