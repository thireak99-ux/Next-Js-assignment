import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Price } from "@/components/price";
import type { Product } from "@/lib/foods";

export function ProductList1({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="gap-0 overflow-hidden pt-0">
          <Link href={`/food-items/${product.id}`} className="block bg-muted">
            {(product.image_url ?? product.image) && (
              <Image
                src={(product.image_url ?? product.image)!}
                alt={product.name ?? product.title ?? "Food"}
                width={500}
                height={350}
                unoptimized
                className="h-48 w-full object-cover"
              />
            )}
          </Link>
          <CardContent className="flex flex-1 flex-col gap-3 py-5">
            <h2 className="text-lg font-semibold">
              <Link href={`/food-items/${product.id}`}>
                {product.name ?? product.title}
              </Link>
            </h2>
            <p className="line-clamp-2 text-base text-muted-foreground">
              {product.description}
            </p>
            <Price price={product.price} />
          </CardContent>
          <CardFooter>
            <Link
              href={`/food-items/${product.id}`}
              className={buttonVariants({ className: "w-full" })}
            >
              View Details
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
