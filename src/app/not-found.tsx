import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Card className="mx-auto max-w-lg text-center">
      <CardContent className="space-y-5 py-10">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <p className="text-base text-muted-foreground">
          The page or food item you are looking for could not be found.
        </p>
        <Link href="/" className={buttonVariants()}>Back to Foods</Link>
      </CardContent>
    </Card>
  );
}
