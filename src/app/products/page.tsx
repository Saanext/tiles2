"use client";

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductGrid } from '@/components/product-grid';
import { products, productCategories } from '@/lib/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

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
              <Card className="sticky top-28 border-2 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={filter}
                    onValueChange={setFilter}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value={allCategory} id="r-all" />
                      <Label htmlFor="r-all" className="font-normal cursor-pointer text-base">{allCategory}</Label>
                    </div>
                    {productCategories.map(category => (
                      <div key={category} className="flex items-center space-x-3">
                        <RadioGroupItem value={category} id={`r-${category.replace(/[\s/]+/g, '-')}`} />
                        <Label htmlFor={`r-${category.replace(/[\s/]+/g, '-')}`} className="font-normal cursor-pointer text-base">{category}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
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
