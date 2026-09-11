import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">About</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">About Food Menu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 text-base leading-7">
          <p>
            Food Menu is a place to browse food items and explore their prices,
            pictures, and descriptions.
          </p>
          <p className="text-muted-foreground">
            Open a food card to learn more about it, or visit our contact page
            to prepare a question or suggestion.
          </p>
          <Link href="/" className={buttonVariants()}>Browse Foods</Link>
        </CardContent>
      </Card>
    </section>
  );
}
