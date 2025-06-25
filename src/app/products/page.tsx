"use client";

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductGrid } from '@/components/product-grid';
import { products, productCategories } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';

const allCategory = "All Products";

const CategoryFilters = ({ activeFilter, onFilterChange }: { activeFilter: string, onFilterChange: (filter: string) => void }) => (
    <div className="flex flex-col items-start gap-1">
        <Button
            onClick={() => onFilterChange(allCategory)}
            variant={activeFilter === allCategory ? 'secondary' : 'ghost'}
            className="w-full justify-start"
        >
            {allCategory}
        </Button>
        {productCategories.map((category) => (
            <Button
                key={category}
                onClick={() => onFilterChange(category)}
                variant={activeFilter === category ? 'secondary' : 'ghost'}
                className="w-full justify-start text-left h-auto py-2 leading-snug whitespace-normal"
            >
                {category}
            </Button>
        ))}
    </div>
);

export default function ProductsPage() {
  const [filter, setFilter] = useState(allCategory);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const filteredProducts = filter === allCategory
    ? products
    : products.filter(p => p.category === filter);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setIsSheetOpen(false); // Close sheet on selection
  };

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="py-28 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-headline mb-4">
              Our Product Collection
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
              Browse our exquisite range of Italian-designed glass and tile products.
            </p>
          </div>

          <div className="lg:hidden mb-6 text-center">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" />
                        Filters
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <h2 className="text-2xl font-bold my-6">Categories</h2>
                    <CategoryFilters activeFilter={filter} onFilterChange={handleFilterChange} />
                </SheetContent>
            </Sheet>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="hidden lg:block lg:col-span-1">
               <div className="sticky top-28">
                <h2 className="text-2xl font-bold mb-6">Categories</h2>
                <CategoryFilters activeFilter={filter} onFilterChange={setFilter} />
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
