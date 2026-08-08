"use client";

import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/moqbojqe";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder={t("name")}
          required
          className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
        />
        <input
          type="email"
          name="_replyto"
          placeholder={t("email")}
          required
          className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder={t("subject")}
        className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
      />

      <textarea
        name="message"
        rows={5}
        placeholder={t("message")}
        required
        className="w-full resize-none rounded-md border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-accent px-8 py-2.5 font-mono text-sm text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "..." : t("send")}
      </button>

      {status === "success" && (
        <p role="status" className="font-mono text-sm text-green-600 dark:text-green-400">
          ✓
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="font-mono text-sm text-red-600 dark:text-red-400">
          ✗
        </p>
      )}
    </form>
  );
}
