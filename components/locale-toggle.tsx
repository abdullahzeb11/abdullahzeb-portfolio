"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export function LocaleToggle() {
  const { locale, toggle, t } = useLocale();
  const next = locale === "en" ? "AR" : "EN";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.a11y.toggleLocale}
      title={t.a11y.toggleLocale}
      className="relative inline-flex h-9 min-w-9 items-center justify-center gap-1 rounded-full border border-tint/10 bg-tint/[0.04] px-3 text-[11px] font-semibold tracking-wider text-foreground transition-colors hover:bg-tint/[0.08] hover:border-tint/20"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={locale}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.18 }}
          className="block leading-none"
        >
          {next}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
