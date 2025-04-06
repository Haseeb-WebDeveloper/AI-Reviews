"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const productItems = [
  {
    title: "Product overview",
    description: "Effective, meaningful answers",
    href: "/product/overview",
  },
  {
    title: "Security",
    description: "Secure & compliant",
    href: "/product/security",
  },
  {
    title: "Integrations", 
    description: "Supported integrations",
    href: "/product/integrations",
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="max-w-[1050px] mx-auto px-4 md:px-6 w-full z-10 py-4">
      <div className="flex items-center justify-between px-3 py-2.5 rounded-full border border-border bg-white relative">
        {/* Logo - Left */}
        <div className="flex items-center justify-start pl-1 md:pl-3">
          <Link href="/" className="flex items-center">
            <span className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-bold">Rateourjob</span>
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </Button>
        </div>

        {/* Navigation Items - Center (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm px-4 py-2 rounded-full">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-screen max-w-2xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg">
                          <div className="mb-4 p-2 bg-white rounded-lg shadow-sm w-full">
                            <p className="text-sm text-gray-600">Do we have insights on customers' impulse buying?</p>
                          </div>
                          <h3 className="font-medium mb-1">Product overview</h3>
                          <p className="text-xs text-gray-500">Effective, meaningful answers</p>
                        </div>
                        <div className="p-4 rounded-lg">
                          <div className="mb-4 p-2 flex justify-center items-center bg-white rounded-lg shadow-sm w-12 h-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 116 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="font-medium mb-1">Security</h3>
                          <p className="text-xs text-gray-500">Secure & compliant</p>
                        </div>
                        <div className="p-4 rounded-lg">
                          <div className="mb-4 grid grid-cols-3 gap-2">
                            {['gmail', 'onedrive', 'office'].map((icon, index) => (
                              <div key={index} className="bg-white rounded-full p-2 flex justify-center items-center shadow-sm">
                                <div className="w-5 h-5 rounded-full"></div>
                              </div>
                            ))}
                          </div>
                          <h3 className="font-medium mb-1">Integrations</h3>
                          <p className="text-xs text-gray-500">Supported integrations</p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/resources" className="text-sm">
              Resources
            </Link>

            <Link href="/pricing" className="text-sm">
              Pricing
            </Link>
          </div>
        </div>

        {/* Buttons - Right (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-4">
          <Button className="text-white rounded-full px-5 text-sm">
            <Link href="/get-started">Get started for free</Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white mt-2 mx-4 p-4 rounded-lg shadow-lg border border-gray-200 z-20 transition-all duration-200 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col space-y-4">
            <div className="border-b pb-2">
              <div className="flex flex-col space-y-2 font-medium">
                {productItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-md"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/resources" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md">
              Resources
            </Link>
            <Link href="/pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md">
              Pricing
            </Link>
            <Button className="w-full text-white rounded-full px-5 text-sm py-2 mt-2">
              <Link href="/get-started" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center">
                Get started for free
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}