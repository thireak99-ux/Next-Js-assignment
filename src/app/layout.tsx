import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Food Menu",
  description: "Browse foods, prices, and descriptions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10">
          {children}
        </main>
        <footer className="border-t py-5 text-center text-sm text-muted-foreground">
          food Menu jg nham ey nham tv
        </footer>
      </body>
    </html>
  );
}
