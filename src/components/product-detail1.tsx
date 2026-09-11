import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Price } from "@/components/price";
import type { Product } from "@/lib/foods";

export function ProductDetail1({ product }: { product: Product }) {
  return (
    <section className="space-y-6">
      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        Back to Foods
      </Link>
      <Card className="overflow-hidden py-0">
        <CardContent className="grid gap-8 p-0 md:grid-cols-2">
          <div className="bg-muted">
            {(product.image_url ?? product.image) && (
              <Image
                src={(product.image_url ?? product.image)!}
                alt={product.name ?? product.title ?? "Food"}
                width={800}
                height={800}
                unoptimized
                className="aspect-square w-full object-cover"
              />
            )}
          </div>
          <div className="space-y-6 p-6 md:py-10 md:pr-10 md:pl-0">
            <p className="text-sm text-muted-foreground">Food #{product.id}</p>
            <h1 className="text-3xl font-bold">
              {product.name ?? product.title}
            </h1>
            <Price price={product.price} />
            <div className="space-y-3 border-t pt-6">
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-base leading-7 text-muted-foreground">
                {product.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
