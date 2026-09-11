import { notFound } from "next/navigation";
import { ProductDetail1 } from "@/components/product-detail1";
import { getFoods } from "@/lib/foods";

export default async function FoodDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const products = await getFoods();
  const product = products.find((item) => String(item.id) === id) ?? notFound();

  return <ProductDetail1 product={product} />;
}
