import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Product } from '@/lib/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl group">
      <CardContent className="p-0">
        <div className="overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
            data-ai-hint={product.aiHint}
          />
        </div>
        <div className="p-6">
          <p className="text-sm text-primary font-semibold">{product.category}</p>
          <h3 className="text-2xl font-bold mt-1">{product.name}</h3>
        </div>
      </CardContent>
    </Card>
  );
}
