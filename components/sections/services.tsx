"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useT } from "@/lib/i18n";
import { serviceIcons } from "@/lib/data";

export function Services() {
  const t = useT();

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-tint/[0.06] bg-tint/[0.02] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((s, i) => {
            const Icon = serviceIcons[i] ?? Building2;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative bg-background/30 p-7 transition-colors hover:bg-tint/[0.03]"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-xl border border-tint/[0.08] bg-tint/[0.04] text-cyan-300 group-hover:scale-105 transition-transform">
                  <Icon className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <span
                  aria-hidden
                  className="absolute start-7 end-7 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/30 transition-colors"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
