"use client";

import { useState } from "react";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("acceptance");
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -156;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const sections = {
    header: {
      title: "Terms of Service",
      content: (
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">RateOurJob Terms of Service</h1>
          <p className="text-muted-foreground">Last Updated: April 12, 2025</p>
          <div className="mt-4 text-muted-foreground">
            <p>Company Name: RateOurJob</p>
            <p>Address: Lahore, Pakistan</p>
            <p>Contact Email: info@rateourjob.com | rateourjob@gmail.com</p>
          </div>
        </div>
      )
    },
    acceptance: {
      title: "1. Acceptance of Terms",
      content: (
        <div className="space-y-4">
          <p>
            PLEASE READ THIS AGREEMENT CAREFULLY. By using RateOurJob's platform, website, or services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Agreement"), our Privacy Policy, and all incorporated policies. If you do not agree, do not use our Services.
          </p>
          <div className="bg-secondary/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Definitions:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>"User": Anyone accessing or posting reviews on RateOurJob.</li>
              <li>"Employer": Businesses registered on RateOurJob to receive reviews.</li>
              <li>"Content": Reviews, comments, ratings, or other data submitted to our platform.</li>
              <li>"Harmful Code": Malware, viruses, or any disruptive technology.</li>
            </ul>
          </div>
        </div>
      )
    },
    license: {
      title: "2. License & Restrictions",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">2.1 Limited License</h4>
            <p>RateOurJob grants you a non-exclusive, revocable license to:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Access and use the Services for lawful purposes.</li>
              <li>Post/workplace reviews in compliance with our guidelines.</li>
            </ul>
            <p className="mt-4">Prohibited Actions:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Reverse engineer, scrape, or copy our platform.</li>
              <li>Post false, defamatory, or illegal content.</li>
              <li>Impersonate others or violate privacy rights.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">2.2 User-Generated Content</h4>
            <p>By posting reviews, you:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Grant RateOurJob a global, royalty-free license to display and analyze your content.</li>
              <li>Warrant that your content is truthful and non-defamatory.</li>
            </ul>
          </div>
        </div>
      )
    },
    data: {
      title: "3. Data & Privacy",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Your data is handled per our Privacy Policy.</li>
            <li>Employers acknowledge they own their workplace data but may not suppress legitimate reviews.</li>
            <li>We use cookies for functionality and analytics (opt-out via browser settings).</li>
          </ul>
        </div>
      )
    },
    employer: {
      title: "4. Employer Obligations",
      content: (
        <div className="space-y-4">
          <p>Employers agree to:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Not manipulate reviews (e.g., offering incentives for positive ratings).</li>
            <li>Respond professionally to criticism (no retaliatory actions).</li>
            <li>Verify company information (e.g., correct business name/location).</li>
          </ul>
        </div>
      )
    },
    disclaimers: {
      title: "5. Disclaimers & Limitation of Liability",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">5.1 No Warranties</h4>
            <p>Services are provided "AS IS". We do not guarantee:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Accuracy of reviews.</li>
              <li>Uninterrupted access to the platform.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">5.2 Liability Cap</h4>
            <p>RateOurJob's maximum liability for any claim is $100 USD or the fees paid to us in the past month, whichever is lower.</p>
            <p className="mt-2">Exclusions: We are not liable for:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>User-generated content.</li>
              <li>Employer decisions based on reviews.</li>
              <li>Third-party websites linked from our platform.</li>
            </ul>
          </div>
        </div>
      )
    },
    indemnification: {
      title: "6. Indemnification",
      content: (
        <div className="space-y-4">
          <p>You agree to defend and indemnify RateOurJob against claims arising from:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Your misuse of the Services.</li>
            <li>Violation of this Agreement.</li>
            <li>Defamatory or illegal content you post.</li>
          </ul>
        </div>
      )
    },
    termination: {
      title: "7. Termination",
      content: (
        <div className="space-y-4">
          <p>We may suspend or terminate access for:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Breach of these Terms.</li>
            <li>Fraudulent activity.</li>
            <li>Legal compliance requirements.</li>
          </ul>
        </div>
      )
    },
    general: {
      title: "8. General Provisions",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Governing Law: Pakistani law (courts in Lahore have exclusive jurisdiction).</li>
            <li>Updates: We may modify these Terms; continued use constitutes acceptance.</li>
            <li>Survival: Sections on indemnification, disclaimers, and liability survive termination.</li>
          </ul>
          <div className="mt-6 bg-secondary/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Contact Us:</h4>
            <p>For legal notices or questions:</p>
            <p>RateOurJob</p>
            <p>Lahore, Pakistan</p>
            <a href="mailto:info@rateourjob.com" className="text-primary hover:underline">
              Email: info@rateourjob.com
            </a>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="md:pt-32 pt-24 pb-12 md:pb-16 max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8">
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