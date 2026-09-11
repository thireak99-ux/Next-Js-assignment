"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [preview, setPreview] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPreview(`${data.get("name")} (${data.get("email")})\n\n${data.get("message")}`);
  }

  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your message</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-base">Name</label>
              <input id="name" name="name" autoComplete="name" required
                className="w-full rounded-md border px-3 py-2 text-base" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-base">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required
                className="w-full rounded-md border px-3 py-2 text-base" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-base">Message</label>
              <textarea id="message" name="message" rows={5} required
                className="w-full rounded-md border px-3 py-2 text-base" />
            </div>
            <p className="text-sm text-muted-foreground">
              Preview your message here. Messages are not sent.
            </p>
            <Button type="submit">Preview Message</Button>
          </form>
        </CardContent>
      </Card>
      <div aria-live="polite">
        {preview && (
          <Card>
            <CardHeader><CardTitle>Message Preview</CardTitle></CardHeader>
            <CardContent className="whitespace-pre-wrap break-words text-base">
              {preview}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
