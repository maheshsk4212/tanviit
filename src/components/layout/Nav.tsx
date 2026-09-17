"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  ChevronDown,
  Flag,
  HeartPulse,
  Landmark,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { mainNav, type NavItem } from "@/lib/site-content";
import { serviceIcons } from "@/lib/service-icons";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

/* The logo already links home and the CTA is the contact route, so the
   desktop bar lists only the sections in between. */
const desktopItems = mainNav.filter((item) => item.href !== "/" && item.href !== "/contact");

const industryIcons: Record<string, LucideIcon> = {
  "federal-government": Landmark,
  "state-government": Flag,
  healthcare: HeartPulse,
  "banking-financial-services": Banknote,
};

/** Icon for a menu link, looked up by the slug in its `#hash`. */
function iconFor(href: string): LucideIcon {
  const slug = href.split("#")[1] ?? "";
  return serviceIcons[slug] ?? industryIcons[slug] ?? ArrowRight;
}

/* Solid white, medium weight in every state; the underline alone marks the
   current page, the open menu and hover. */
const BAR_LINK_CLASS =
  "group relative flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-white";

/** Underline that draws in beneath the current/open item, as on alphaomega.com. */
function Underline({ on }: { on: boolean }) {
  return (
    <span
      className={`pointer-events-none absolute inset-x-3 bottom-0.5 h-px origin-left bg-current transition-transform duration-300 ease-out ${
        on ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
      aria-hidden
    />
  );
}

/**
 * Full-width menu panel. One panel belongs to the header rather than one per
 * trigger, so moving between "Services" and "Industries" swaps the contents in
 * place instead of closing one dropdown and opening another.
 */
function MegaPanel({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  // "All industries" duplicates the section link itself, so it becomes the
  // footer link under the list rather than another row.
  const links = (item.menu ?? []).filter((child) => child.href !== item.href);

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1px_1.1fr] lg:gap-14 lg:px-8 lg:py-12">
      <div>
        <p className="font-display text-[1.75rem] font-medium leading-tight tracking-[-0.02em] text-fg">
          {item.label}
        </p>
        <ul className="mt-6 grid gap-1">
          {links.map((child) => {
            const Icon = iconFor(child.href);
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onNavigate}
                  className="group/row -mx-3 flex items-start gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-cream-50 focus-visible:bg-cream-50 focus-visible:outline-none"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-deep-900 text-gold-400 transition-colors duration-300 group-hover/row:bg-gold-500 group-hover/row:text-deep-950">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 text-[17px] font-medium text-fg">
                      {child.label}
                      <ArrowRight
                        className="h-4 w-4 -translate-x-1 text-gold-600 opacity-0 transition-all duration-300 group-hover/row:translate-x-0 group-hover/row:opacity-100"
                        aria-hidden
                      />
                    </span>
                    <span className="mt-0.5 block text-sm text-fg-muted">{child.description}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href={item.href}
          onClick={onNavigate}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-gold-500"
        >
          View all {item.label.toLowerCase()}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <div className="hidden bg-line lg:block" aria-hidden />

      {item.featured ? (
        <div>
          <p className="font-display text-[1.75rem] font-medium leading-tight tracking-[-0.02em] text-fg">
            {item.featured.heading}
          </p>
          <ul className="mt-6 grid gap-6">
            {item.featured.items.map((feature) => (
              <li key={feature.href}>
                <Link
                  href={feature.href}
                  onClick={onNavigate}
                  className="group/card flex items-center gap-5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4"
                >
                  <span className="relative aspect-[16/10] w-44 shrink-0 overflow-hidden rounded-xl bg-deep-900">
                    <Image
                      src={feature.image}
                      alt=""
                      fill
                      sizes="176px"
                      className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
                    />
                    <span
                      className="absolute inset-0 bg-gradient-to-t from-deep-950/60 to-transparent"
                      aria-hidden
                    />
                    <span
                      className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-deep-950/80 text-white ring-1 ring-white/20 transition-colors duration-300 group-hover/card:bg-gold-500 group-hover/card:text-deep-950"
                      aria-hidden
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[17px] font-medium leading-snug text-fg">
                      {feature.title}
                    </span>
                    <span className="mt-1.5 flex items-center gap-2 text-sm text-fg-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                      {feature.meta}
                    </span>
                    <span className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors group-hover/card:decoration-gold-500">
                      {feature.cta}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);
  /** Set by ArrowDown; the effect below moves focus once the panel exists. */
  const focusPanelRef = useRef(false);
  /** Set while Escape hands focus back to a trigger, so it doesn't reopen. */
  const returningFocusRef = useRef(false);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setActiveMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openItem = desktopItems.find((item) => item.href === activeMenu && item.menu);
  const solid = scrolled || mobileOpen || Boolean(openItem);
  const close = () => setActiveMenu(null);

  // Runs after React has committed the panel, so the link is guaranteed to
  // exist — no dependence on animation-frame timing.
  useEffect(() => {
    if (!focusPanelRef.current || !activeMenu) return;
    focusPanelRef.current = false;
    headerRef.current?.querySelector<HTMLElement>("[data-mega-panel] a")?.focus();
  }, [activeMenu]);

  function openMenu(href: string) {
    if (returningFocusRef.current) return;
    setActiveMenu(href);
  }

  return (
    // Every page opens on a dark hero, so the bar rides transparent over it and
    // turns solid once scrolled, or while a menu is open. `fixed`, not
    // `sticky`, so the hero runs up underneath it.
    <header
      ref={headerRef}
      onMouseLeave={close}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) close();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && activeMenu) {
          close();
          returningFocusRef.current = true;
          headerRef.current
            ?.querySelector<HTMLElement>(`[data-menu-trigger="${activeMenu}"]`)
            ?.focus();
          returningFocusRef.current = false;
        }
      }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-white/10 bg-deep-950/95 backdrop-blur-lg" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div onMouseEnter={close}>
          <Logo tone="dark" />
        </div>

        <nav className="hidden h-full items-center gap-0.5 lg:flex" aria-label="Main">
          {desktopItems.map((item) => {
            const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
            if (!item.menu) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={close}
                  onFocus={close}
                  className={BAR_LINK_CLASS}
                >
                  {item.label}
                  <Underline on={current} />
                </Link>
              );
            }
            const isOpen = activeMenu === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                data-menu-trigger={item.href}
                aria-expanded={isOpen}
                aria-haspopup="true"
                onMouseEnter={() => openMenu(item.href)}
                onFocus={() => openMenu(item.href)}
                onClick={close}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    focusPanelRef.current = true;
                    // Already open: activeMenu won't change, so focus directly.
                    if (activeMenu === item.href) {
                      focusPanelRef.current = false;
                      headerRef.current
                        ?.querySelector<HTMLElement>("[data-mega-panel] a")
                        ?.focus();
                    } else {
                      setActiveMenu(item.href);
                    }
                  }
                }}
                className={BAR_LINK_CLASS}
              >
                {item.label}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
                <Underline on={current || isOpen} />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block" onMouseEnter={close}>
          <Button href="/contact" variant="ghost-dark" arrow>
            Talk to our team
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop mega menu. The panel is flush with the bar (no gap), so the
          pointer can travel from a trigger into it without closing it. */}
      <AnimatePresence>
        {openItem ? (
          <motion.div
            key="mega-panel"
            data-mega-panel
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-surface shadow-[0_28px_60px_-28px_rgb(0_0_0/0.45)] lg:block"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={openItem.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.14 }}
              >
                <MegaPanel item={openItem} onNavigate={close} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 bg-deep-950 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-white/5"
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
