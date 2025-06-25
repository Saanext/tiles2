import { Twitter, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

const Logo = () => (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L95.1141 27.5V82.5L50 110L4.88591 82.5V27.5L50 0Z" fill="currentColor"/>
        <path d="M50 12.5L86.6025 33.75V76.25L50 97.5L13.3975 76.25V33.75L50 12.5Z" stroke="hsl(var(--foreground))" strokeWidth="8"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-foreground text-background/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 text-background">
            <Logo />
            <span className="text-xl font-bold">STYLEON ART FACTORY</span>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} STYLEON ART FACTORY. All rights reserved.</p>
            <p className="text-sm">Italian Design & Concepts for Modern Spaces.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter /></Link>
            <Link href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram /></Link>
            <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
