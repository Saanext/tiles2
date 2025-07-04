import Image from 'next/image';
import { Gem, LayoutGrid, Droplets, Bath, Palette, Sparkles } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ParallaxSection = ({
  imageUrl,
  children,
  className,
  id,
  'data-ai-hint': aiHint,
  ...props
}: {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  'data-ai-hint'?: string;
  [key: string]: any;
}) => (
  <section
    id={id}
    className={`relative bg-cover bg-fixed bg-center ${className}`}
    style={{ backgroundImage: `url(${imageUrl})` }}
    data-ai-hint={aiHint}
    {...props}
  >
    <div className="absolute inset-0 bg-black/70" />
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const ContentSection = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`py-20 lg:py-28 ${className}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const categories = [
  {
    name: "Crystal Mosaics",
    icon: <Gem className="w-12 h-12 text-primary" />,
    description: "Intricate designs that capture and reflect light beautifully.",
  },
  {
    name: "Glass Tiles",
    icon: <LayoutGrid className="w-12 h-12 text-primary" />,
    description: "Durable and stylish tiles for a modern, sleek finish.",
  },
  {
    name: "Wash Basins",
    icon: <Droplets className="w-12 h-12 text-primary" />,
    description: "Elegant glass bowls and counters that are works of art.",
  },
  {
    name: "Bathroom Furnishings",
    icon: <Bath className="w-12 h-12 text-primary" />,
    description: "Complete your sanctuary with our exclusive furnishings.",
  },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <ParallaxSection
          imageUrl="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
          data-ai-hint="luxury bathroom"
          className="min-h-screen flex items-center justify-center text-center"
        >
          <div className="text-white p-4">
            <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4 tracking-tight animate-fade-in-down">
              STYLEON ART FACTORY
            </h1>
            <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto animate-fade-in-up">
              Crafting Elegance in Glass. Truly Italian Designs & Concepts.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </ParallaxSection>

        <ContentSection id="about">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1595916430766-95b932a5b032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb3NhaWMlMjB0aWxlc3xlbnwwfHx8fDE3NTA4NzEwODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Italian glass design detail"
                width={600}
                height={700}
                className="w-full h-full object-cover"
                data-ai-hint="glass design detail"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold font-headline mb-6">
                The Art of Italian Glass
              </h2>
              <p className="text-lg mb-4 text-muted-foreground">
                STYLEON ART FACTORY brings you an exquisite collection of crystal glass
                products, born from a passion for Italian artistry and modern
                innovation. Our creations are not just products; they are a
                statement of luxury and sophistication for your living spaces.
              </p>
              <p className="text-lg text-muted-foreground">
                We distribute a wide range of crystal glass mosaics, tiles, wash
                basin counters, bowls, and bathroom furnishings that embody the
                spirit of timeless Italian design.
              </p>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="commitment" className="bg-muted">
            <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold font-headline mb-4">
                Our Commitment
                </h2>
                <p className="text-lg mb-12 max-w-3xl mx-auto text-muted-foreground">
                Fusing timeless tradition with modern aesthetics, we are committed to quality, beauty, and innovation.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                        <div className="bg-primary/10 text-primary p-4 rounded-full inline-flex">
                        <Palette className="w-8 h-8" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Artisanal Craftsmanship</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                        Each product is meticulously crafted by skilled artisans, preserving age-old techniques passed down through generations. This human touch ensures that every item is unique and of the highest quality.
                        </p>
                    </div>
                </div>
                <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                        <div className="bg-primary/10 text-primary p-4 rounded-full inline-flex">
                        <Sparkles className="w-8 h-8" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Innovative Design</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                        We continuously explore new technologies and design concepts to push the boundaries of glass artistry. Our products blend classic elegance with contemporary style, perfect for modern living spaces.
                        </p>
                    </div>
                </div>
            </div>
        </ContentSection>

        <ParallaxSection
          imageUrl="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
          data-ai-hint="italian tiles floor"
          id="products"
          className="py-20 lg:py-28"
        >
          <div className="text-white text-center">
            <h2 className="text-4xl lg:text-5xl font-bold font-headline mb-4">
              Our Collections
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Discover our diverse range of products, each designed with
              meticulous attention to detail.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="bg-black/20 backdrop-blur-md p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center"
                >
                  {category.icon}
                  <h3 className="text-2xl font-bold mt-4 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80">{category.description}</p>
                </div>
              ))}
            </div>
             <Button asChild size="lg" className="mt-12">
              <Link href="/products">Explore All Products</Link>
            </Button>
          </div>
        </ParallaxSection>

        <ParallaxSection
          imageUrl="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"
          data-ai-hint="water texture"
          id="contact"
          className="py-20 lg:py-28"
        >
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold font-headline mb-4">
              Contact Us
            </h2>
            <p className="text-xl mb-8">
              Have a question or a custom project in mind? We'd love to hear
              from you.
            </p>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-2xl border border-white/20">
              <ContactForm />
            </div>
          </div>
        </ParallaxSection>
      </main>
      <Footer />
    </div>
  );
}
