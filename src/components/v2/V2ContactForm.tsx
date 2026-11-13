"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const control =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-base text-fg placeholder:text-fg-subtle transition-colors duration-200 hover:border-navy-300 focus:border-flame-500 focus:outline-none focus:ring-4 focus:ring-flame-500/15";

const label = "mb-2 block text-sm font-semibold text-navy-900";

/**
 * Name, email, subject and message — the four fields on the client's current
 * website form.
 *
 * There is no server behind this site to receive a submission, so the form
 * does the one honest thing it can: it opens the visitor's own email program
 * with the message already written and addressed. It never shows "message
 * received", because nothing has been received until they press send there.
 *
 * NEEDS-BACKEND: to submit in the page itself (and to accept a résumé as an
 * upload), point `handleSubmit` at a form endpoint and drop the mailto.
 */
export function V2ContactForm({ to }: { to: string }) {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();

    const body = `${field("message")}\n\n${field("name")}\n${field("email")}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      field("subject"),
    )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={label}>
            Name <span className="text-flame-700">*</span>
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className={control} />
        </div>
        <div>
          <label htmlFor="contact-email" className={label}>
            Email <span className="text-flame-700">*</span>
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={control} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className={label}>
          Subject <span className="text-flame-700">*</span>
        </label>
        <input id="contact-subject" name="subject" type="text" required className={control} />
      </div>

      <div>
        <label htmlFor="contact-message" className={label}>
          Message <span className="text-flame-700">*</span>
        </label>
        <textarea id="contact-message" name="message" required rows={6} className={control} />
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-flame-600 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame-700 hover:shadow-[0_14px_30px_-12px_rgb(250_70_18/0.5)]"
        >
          Submit
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </button>
        <p className="text-sm text-fg-muted">
          Opens your email program with the message ready to send.
        </p>
      </div>

      <p role="status" className="text-[15px] leading-relaxed text-fg">
        {opened ? (
          <>
            Your email program should now be open with the message written. Attach your résumé
            there if you are sending one, then press send. If nothing opened, write to{" "}
            <a href={`mailto:${to}`} className="font-semibold text-navy-700 underline underline-offset-4">
              {to}
            </a>
            .
          </>
        ) : null}
      </p>
    </form>
  );
}
