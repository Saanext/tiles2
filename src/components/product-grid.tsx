import type { Product } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-16">
           <h3 className="text-2xl font-bold">No products found</h3>
           <p className="text-muted-foreground mt-2">Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
}
