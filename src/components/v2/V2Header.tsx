"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Header for the second design. Deliberately conventional: a solid white bar
 * that never changes, plain text links, one filled action. No transparency
 * over a hero, no mega panel, no scroll behaviour — the register government
 * buyers read as "a contractor's site" rather than a studio's.
 */
const links = [
  { label: "Who we are", href: "/v2#who-we-are" },
  { label: "Services", href: "/v2#services" },
  { label: "Contract vehicles", href: "/v2#vehicles" },
  { label: "Industries", href: "/v2#industries" },
  { label: "Customers", href: "/v2#customers" },
  { label: "Careers", href: "/careers" },
];

export function V2Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-federal-100 bg-white">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/v2" className="shrink-0">
          <Image
            src="/tanvi-it-logo@3x.png"
            alt="Tanvi IT Solutions"
            width={167}
            height={43}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-fg underline-offset-4 hover:text-federal-700 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-md bg-federal-700 px-5 py-2.5 text-[15px] font-semibold text-white hover:bg-federal-800 sm:inline-block"
          >
            Contact us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="v2-mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-federal-200 text-federal-800 lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="v2-mobile-nav"
          aria-label="Main"
          className="border-t border-federal-100 bg-white lg:hidden"
        >
          <ul className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-federal-50 py-3.5 text-base font-medium text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 mb-4 block rounded-md bg-federal-700 px-5 py-3 text-center text-base font-semibold text-white"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
