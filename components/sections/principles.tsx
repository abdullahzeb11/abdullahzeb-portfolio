"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useT } from "@/lib/i18n";
import { principleIcons } from "@/lib/data";

export function Principles() {
  const t = useT();

  return (
    <section id="principles" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow={t.principles.eyebrow}
          title={t.principles.title}
          description={t.principles.description}
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-tint/[0.06] bg-tint/[0.02] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-3">
          {t.principles.items.map((item, i) => {
            const Icon = principleIcons[i] ?? Sparkles;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative bg-background/30 p-7 transition-colors hover:bg-tint/[0.03]"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-tint/[0.08] bg-tint/[0.04] text-cyan-300 group-hover:scale-105 transition-transform">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
                <span
                  aria-hidden
                  className="absolute start-7 end-7 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/30 transition-colors"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
