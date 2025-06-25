"use client";

import { useState } from 'react';
import { products, productCategories } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';

const allCategory = "All Products";

export function ProductGrid() {
  const [filter, setFilter] = useState(allCategory);

  const filteredProducts = filter === allCategory
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <Button
          variant={filter === allCategory ? "default" : "outline"}
          onClick={() => setFilter(allCategory)}
          className="rounded-full"
        >
          {allCategory}
        </Button>
        {productCategories.map(category => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
       {filteredProducts.length === 0 && (
         <div className="text-center col-span-full py-16">
            <h3 className="text-2xl font-bold">No products found</h3>
            <p className="text-muted-foreground">Try selecting a different category.</p>
         </div>
      )}
    </div>
  );
}
