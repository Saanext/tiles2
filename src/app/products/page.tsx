import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductGrid } from '@/components/product-grid';

export default function ProductsPage() {
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
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
