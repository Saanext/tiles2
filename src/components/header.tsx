"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-300">
    <path d="M50 0L95.1141 27.5V82.5L50 110L4.88591 82.5V27.5L50 0Z" fill="currentColor"/>
    <path d="M50 12.5L86.6025 33.75V76.25L50 97.5L13.3975 76.25V33.75L50 12.5Z" stroke="hsl(var(--background))" strokeWidth="8"/>
  </svg>
);

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 text-primary transition-colors">
            <div className={cn("text-primary", scrolled ? "text-primary" : "text-white")}>
              <Logo />
            </div>
            <span className={cn("text-2xl font-bold font-headline tracking-tight", scrolled ? "text-foreground" : "text-white")}>
              Vetro Italia
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden md:flex">
            <a href="#contact">Get a Quote</a>
          </Button>
          {/* A mobile menu trigger could be added here for smaller screens */}
        </div>
      </div>
    </header>
  );
}
