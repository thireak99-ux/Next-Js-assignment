export type Product = {
  id: string;
  name?: string;
  title?: string;
  description: string;
  price: number | string;
  image_url?: string;
  image?: string;
};

export async function getFoods(): Promise<Product[]> {
  const response = await fetch(
    "https://sombobaeb.cheat.casa/food-items?skip=0&limit=100",
    { cache: "no-store" }
  );
  const data = await response.json();
  return data.items ?? data.data ?? data;
}
