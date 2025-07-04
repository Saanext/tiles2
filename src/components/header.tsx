"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

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
    { name: "About", href: "/#about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-background/90 backdrop-blur-sm shadow-md"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 text-primary transition-colors">
            <div className={cn("text-primary")}>
              <Logo />
            </div>
            <span className={cn("text-2xl font-bold font-headline tracking-tight", "text-foreground")}>
              STYLEON ART FACTORY
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button asChild className="hidden md:flex">
            <Link href="/#contact">Get a Quote</Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                 <nav className="flex flex-col gap-6 pt-8">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className="text-lg font-medium transition-colors hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                 </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
