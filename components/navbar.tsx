"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleToggle } from "@/components/locale-toggle";
import { useT } from "@/lib/i18n";
import { navHrefs, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container">
        <motion.nav
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative flex items-center justify-between rounded-full border px-4 transition-all duration-500",
            scrolled
              ? "border-tint/[0.08] bg-background/70 backdrop-blur-xl py-2 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]"
              : "border-tint/[0.04] bg-tint/[0.02] backdrop-blur-md py-2.5"
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2 px-2 group"
            aria-label={t.profile.name}
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-[11px] font-semibold text-white shadow-[0_4px_20px_-4px_rgba(56,189,248,0.6)]">
              {profile.initials}
              <span className="absolute inset-0 rounded-full bg-tint/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                {t.profile.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {t.profile.role}
              </span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1 text-sm">
            {navHrefs.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-tint/[0.04]"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LocaleToggle />
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              variant="default"
              className="hidden md:inline-flex"
            >
              <a href="#contact">
                {t.profile.cta} <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
              </a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-tint/10 bg-tint/[0.04]"
              aria-label={t.a11y.menu}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden container mt-2"
          >
            <div className="glass-strong rounded-2xl p-3">
              <ul className="flex flex-col">
                {navHrefs.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-tint/[0.04] transition-colors"
                    >
                      {t.nav[link.key]}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="p-2 pt-0">
                <Button asChild className="w-full">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    {t.profile.cta} <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
