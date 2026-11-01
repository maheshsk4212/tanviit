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
 * The dropdowns are driven by a single piece of state holding the one open
 * menu, so two can never be on screen together.
 *
 * They used to open on `group-hover` or `group-focus-within` in CSS alone,
 * which looked like less machinery but had a bug in it: clicking a parent
 * link left focus on that link, so focus-within pinned its panel open, and
 * hovering the next item then opened a second panel over the top of it. One
 * `openMenu` value cannot express that state, which is the point of using it.
 */
export function V2Header() {
  const [open, setOpen] = useState(false);
  /** Label of the one open dropdown, or null. */
  const [menu, setMenu] = useState<string | null>(null);
  const close = () => setMenu(null);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white">
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

        <nav
          aria-label="Main"
          className="hidden items-center xl:flex"
          onKeyDown={(event) => {
            if (event.key === "Escape") close();
          }}
        >
          {v2Nav.map((item) => (
            <div
              key={item.href}
              className="group relative"
              onMouseEnter={() => item.children && setMenu(item.label)}
              onMouseLeave={close}
              // Opening on focus keeps the menus reachable from the keyboard;
              // the matching blur closes only when focus has actually left the
              // item, not when it moves between the trigger and its own links.
              onFocus={() => item.children && setMenu(item.label)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) close();
              }}
            >
              <Link
                href={item.href}
                aria-expanded={item.children ? menu === item.label : undefined}
                // Clicking the parent navigates, so the panel should not be
                // left hanging open behind the new page.
                onClick={close}
                className="flex items-center gap-1 whitespace-nowrap px-3 py-7 text-[15px] font-medium text-fg group-hover:text-flame-600"
              >
                {item.label}
                {item.children ? (
                  <ChevronDown className="h-4 w-4 text-ink-400" aria-hidden />
                ) : null}
              </Link>

              {item.children ? (
                <div
                  className={`absolute left-0 top-full z-10 w-72 border border-navy-100 bg-white py-2 shadow-lg transition-[opacity,visibility] duration-200 ${
                    menu === item.label ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={close}
                          className="block px-5 py-2.5 text-[15px] text-fg hover:bg-navy-50 hover:text-navy-700"
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
            className="hidden whitespace-nowrap rounded-full bg-flame-600 px-5 py-2.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-flame-700 sm:inline-block"
          >
            Contact us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="v2-mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy-100 text-navy-800 xl:hidden"
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
          className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-navy-100 bg-white xl:hidden"
        >
          <ul className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6">
            {v2Nav.map((item) => (
              <li key={item.href} className="border-b border-navy-50 py-1">
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
                className="mt-3 mb-4 block rounded-full bg-flame-600 px-5 py-3 text-center text-base font-semibold text-white"
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
