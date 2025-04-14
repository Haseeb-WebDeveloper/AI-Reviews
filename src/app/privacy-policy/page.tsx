"use client";

import { useState, useEffect } from "react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");
  
  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate position with offset
      const yOffset = -156; // Equivalent to pt-44 (44 * 4px)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ 
        top: y, 
        behavior: 'smooth' 
      });
      setActiveSection(sectionId);
    }
  };

  // All privacy policy content organized by sections
  const sections = {
    header: {
      title: "Privacy Policy",
      content: (
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last Updated: April 12, 2025</p>
        </div>
      )
    },
    introduction: {
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p>
            Welcome to RateOurJob. We empower employees and employers through transparent workplace reviews 
            while prioritizing your privacy. This policy explains how we collect, use, and protect your data when you use our website, 
            mobile app, or services (the "Services").
          </p>
          <div className="bg-secondary/10 rounded-lg p-4">
            <h3 className="font-medium mb-2">Contact Us:</h3>
            <p>For privacy inquiries, email:</p>
            <ul className="list-none pl-0 space-y-1">
              <li>
                <a href="mailto:info@rateourjob.com" className="text-primary hover:underline">
                    info@rateourjob.com
                </a>
                <a href="mailto:rateourjob@gmail.com" className="text-primary hover:underline">
                    rateourjob@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    employers: {
      title: "Employers & Businesses",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Data Collected</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Company name and contact details</li>
                <li>Payment information (if applicable)</li>
                <li>Device/IP address, browser type</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Purpose</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Provide account access and analytics</li>
                <li>Send review requests and updates</li>
                <li>Prevent fraud and improve platform</li>
                <li>Personalize user experience</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    employees: {
      title: "Employees & Users",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Data Collected</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Reviews (job title, employer name, ratings)</li>
                <li>Email and IP address (if registered)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Purpose</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Publish anonymized reviews</li>
                <li>Verify authenticity of submissions</li>
                <li>Prevent fake reviews</li>
                <li>Communicate review status</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    visitors: {
      title: "Website & App Visitors",
      content: (
        <div className="space-y-4">
          <h4 className="font-medium mb-2">Cookies & Tracking</h4>
          <p className="text-muted-foreground">We use cookies to:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Remember your preferences (e.g., language)</li>
            <li>Analyze traffic patterns (e.g., via Google Analytics)</li>
            <li>Prevent fraud and secure our platform</li>
          </ul>
          <p className="text-muted-foreground">You can opt-out via your browser settings.</p>
        </div>
      )
    },
    sharing: {
      title: "Data Sharing",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            We share data only when necessary with:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Service providers (hosting, analytics, payment processing)</li>
            <li>Legal authorities when required by law</li>
            <li>New owners in case of business transfer</li>
          </ul>
          <p className="text-muted-foreground">
            We do not sell your personal information.
          </p>
        </div>
      )
    },
    security: {
      title: "Security & Storage",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            We implement industry-standard security measures to protect your data:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Encryption for data transmission</li>
            <li>Regular security assessments</li>
            <li>Access controls for staff</li>
            <li>Data retention policies based on necessity</li>
          </ul>
        </div>
      )
    },
    rights: {
      title: "Your Rights",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Delete your data</li>
            <li>Object to certain processing</li>
            <li>Data portability</li>
          </ul>
          <p className="text-muted-foreground">
            Contact us to exercise these rights.
          </p>
        </div>
      )
    },
    contact: {
      title: "Contact Us",
      content: (
        <div className="space-y-4">
          <h4 className="font-medium mb-2">Privacy Officer</h4>
          <p>RateOurJob</p>
          <a href="mailto:privacy@rateourjob.com" className="block text-primary hover:underline">
            privacy@rateourjob.com
          </a>
          <p className="mt-4 text-muted-foreground">
            For legal requests (e.g., subpoenas), please contact us via email.
          </p>
        </div>
      )
    }
  };

  return (
    <div className="md:pt-32 pt-24 pb-12 md:pb-16 max-w-6xl mx-auto px-4">
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Table of Contents - Sticky on Desktop */}
        <aside className="md:w-64 shrink-0">
          <div className="md:sticky md:top-24 bg-card rounded-lg p-4 border">
            <h2 className="text-lg font-medium mb-4">Contents</h2>
            <nav className="space-y-1">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === key
                      ? "bg-primary text-primary-foreground font-medium"
                      : "hover:bg-secondary/50"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="space-y-8">
            {Object.entries(sections).map(([key, section]) => (
              key === 'header' ? (
                <section key={key} id={key}>
                  {section.content}
                </section>
              ) : (
                <section
                  key={key}
                  id={key}
                  className={`bg-card rounded-lg p-6 border shadow-sm transition-opacity duration-300 ${
                    activeSection === key ? "opacity-100" : "opacity-60 hover:opacity-80"
                  }`}
                  onClick={() => scrollToSection(key)}
                >
                  <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                  {section.content}
                </section>
              )
            ))}
          </div>
        </main>
      </div>
      
    </div>
  );
}