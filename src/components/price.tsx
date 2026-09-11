export function Price({ price }: { price: number | string }) {
  return (
    <p className="text-xl font-semibold text-primary">
      {Number(price).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}
    </p>
  );
}
