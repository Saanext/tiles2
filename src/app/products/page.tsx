"use client";

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductGrid } from '@/components/product-grid';
import { products, productCategories } from '@/lib/products';
import { Button } from '@/components/ui/button';

const allCategory = "All Products";

export default function ProductsPage() {
  const [filter, setFilter] = useState(allCategory);

  const filteredProducts = filter === allCategory
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="py-28 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold font-headline mb-4">
              Our Product Collection
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
              Browse our exquisite range of Italian-designed glass and tile products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
               <div className="sticky top-28">
                <h2 className="text-2xl font-bold mb-6">Categories</h2>
                <div className="flex flex-col items-start gap-1">
                  <Button
                    onClick={() => setFilter(allCategory)}
                    variant={filter === allCategory ? 'secondary' : 'ghost'}
                    className="w-full justify-start"
                  >
                    {allCategory}
                  </Button>
                  {productCategories.map((category) => (
                    <Button
                      key={category}
                      onClick={() => setFilter(category)}
                      variant={filter === category ? 'secondary' : 'ghost'}
                      className="w-full justify-start text-left h-auto py-2 leading-snug"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </aside>
            
            <div className="lg:col-span-3">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
