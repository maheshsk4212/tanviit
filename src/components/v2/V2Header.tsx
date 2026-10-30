"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { v2Nav } from "@/components/v2/v2-nav";

/**
 * Header for the second design. Deliberately conventional: a solid white bar
 * that never changes, plain text links, one filled action — the register
 * government buyers read as a contractor's site rather than a studio's.
 *
 * The dropdowns open on hover and on keyboard focus through CSS alone, so
 * there is no menu state to get out of step with the page.
 */
export function V2Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brass-100 bg-white">
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

        <nav aria-label="Main" className="hidden items-center xl:flex">
          {v2Nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 whitespace-nowrap px-3 py-7 text-[15px] font-medium text-fg group-hover:text-brass-700"
              >
                {item.label}
                {item.children ? (
                  <ChevronDown className="h-4 w-4 text-ink-400" aria-hidden />
                ) : null}
              </Link>

              {item.children ? (
                <div className="invisible absolute left-0 top-full z-10 w-72 border border-brass-100 bg-white py-2 opacity-0 shadow-lg transition-[opacity,visibility] group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2.5 text-[15px] text-fg hover:bg-brass-50 hover:text-brass-700"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/v2/contact"
            className="hidden whitespace-nowrap rounded-md bg-brass-700 px-5 py-2.5 text-[15px] font-semibold text-white hover:bg-brass-800 sm:inline-block"
          >
            Contact us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="v2-mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brass-200 text-brass-800 xl:hidden"
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
          className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-brass-100 bg-white xl:hidden"
        >
          <ul className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6">
            {v2Nav.map((item) => (
              <li key={item.href} className="border-b border-brass-50 py-1">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-fg"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="pb-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 pl-4 text-[15px] text-fg-subtle"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li>
              <Link
                href="/v2/contact"
                onClick={() => setOpen(false)}
                className="mt-3 mb-4 block rounded-md bg-brass-700 px-5 py-3 text-center text-base font-semibold text-white"
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
