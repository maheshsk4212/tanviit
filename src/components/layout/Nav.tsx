"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { mainNav, type NavItem } from "@/lib/site-content";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

/* The logo already links home and the CTA is the contact route, so the
   desktop bar lists only the sections in between. */
const desktopItems = mainNav.filter((item) => item.href !== "/" && item.href !== "/contact");

function linkClass(active: boolean) {
  return `flex items-center gap-1 rounded-md px-3 py-2 text-[15px] transition-colors ${
    active ? "text-white" : "text-white/75 hover:text-white"
  }`;
}

/**
 * Desktop nav entry with a dropdown panel (hover + keyboard focus). Owns its
 * own open state so it stays a stable, module-scope component.
 */
function MegaItem({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <Link href={item.href} aria-expanded={open} className={linkClass(active)}>
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </Link>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 pt-3"
          >
            <div className="w-80 rounded-xl border border-white/10 bg-deep-900 p-2 shadow-2xl shadow-black/40">
              {item.menu?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                >
                  <span className="block text-sm font-medium text-white">{child.label}</span>
                  <span className="mt-0.5 block text-xs text-white/60">{child.description}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    // Every page opens on a dark hero, so the bar rides transparent over it
    // and turns solid deep once scrolled (or when the mobile menu is open).
    // `fixed`, not `sticky`, so the hero runs up underneath it.
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-white/10 bg-deep-950/90 backdrop-blur-lg" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo tone="dark" />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {desktopItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return item.menu ? (
              <MegaItem key={item.href} item={item} active={active} />
            ) : (
              <Link key={item.href} href={item.href} className={linkClass(active)}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="ghost-dark" arrow={false}>
            Talk to our team
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 bg-deep-950 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-white/85 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                  {item.menu ? (
                    <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                      {item.menu.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-white/60 hover:bg-white/5 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ))}
              <div className="mt-3 border-t border-white/10 px-3 pt-4">
                <Button href="/contact">Talk to our team</Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
