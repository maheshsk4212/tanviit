"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { mainNav, type NavItem } from "@/lib/site-content";
import { Logo } from "./Logo";
import { ThemeSwitch } from "@/components/theme/ThemeSwitch";

/**
 * Desktop nav entry with a mega-menu panel (hover + keyboard focus). Owns its
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
      <Link
        href={item.href}
        aria-expanded={open}
        className={`group relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
          active ? "text-fg" : "text-fg-muted hover:text-fg"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
        <span
          className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold-500 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
            active ? "scale-x-100" : ""
          }`}
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
            <div className="w-80 rounded-card border border-line bg-surface p-2 shadow-elevated-lg">
              {item.menu?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-control px-3 py-2.5 transition-colors hover:bg-surface-muted"
                >
                  <span className="block text-sm font-semibold text-fg">
                    {child.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-fg-muted">
                    {child.description}
                  </span>
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-surface/85 backdrop-blur-lg"
          : "border-b border-transparent bg-surface/50 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            if (item.menu) {
              return <MegaItem key={item.href} item={item} active={active} />;
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold-500 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ThemeSwitch />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-control p-2 text-fg lg:hidden"
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
            className="overflow-hidden border-t border-line bg-surface lg:hidden"
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
                    className="block rounded-control px-3 py-2.5 text-base font-medium text-fg-muted hover:bg-surface-muted hover:text-fg"
                  >
                    {item.label}
                  </Link>
                  {item.menu ? (
                    <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-line pl-3">
                      {item.menu.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-control px-3 py-2 text-sm text-fg-subtle hover:bg-surface-muted hover:text-fg"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ))}
              <div className="mt-3 border-t border-line px-3 pt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Theme
                </p>
                <ThemeSwitch />
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
