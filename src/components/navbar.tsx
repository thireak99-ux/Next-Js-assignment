import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b bg-background">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
        <Link href="/" className="text-xl font-bold text-primary">
          Food NextJS
        </Link>
        <div className="flex gap-6 text-base">
          <Link href="/" className="hover:text-primary">Foods</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
