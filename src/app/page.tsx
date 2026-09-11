import { ProductList1 } from "@/components/product-list1";
import { getFoods } from "@/lib/foods";

export default async function Home() {
  const products = await getFoods();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">All Foods</h1>
        <p className="mt-2 text-muted-foreground">
          Choose a food to see its details.
        </p>
      </div>
      <ProductList1 products={products} />
    </section>
  );
}
