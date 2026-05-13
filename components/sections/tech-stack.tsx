"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { useT } from "@/lib/i18n";
import { techStack } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TechStack() {
  const t = useT();

  return (
    <section id="stack" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow={t.stack.eyebrow}
          title={t.stack.title}
          description={t.stack.description}
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px overflow-hidden rounded-3xl border border-tint/[0.06] bg-tint/[0.02] backdrop-blur-xl"
        >
          {techStack.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className={cn(
                "group relative flex flex-col items-start justify-between gap-3 bg-background/30 p-5 min-h-[120px] hover:bg-tint/[0.03] transition-colors"
              )}
            >
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-foreground/0 to-transparent group-hover:via-cyan-400/40 transition-colors" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t.stack.categories[item.category]}
              </p>
              <p className="font-display text-base font-semibold tracking-tight text-foreground">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 overflow-hidden mask-fade-edges">
          <div className="flex gap-12 animate-marquee whitespace-nowrap text-xs uppercase tracking-[0.25em] text-muted-foreground/60">
            {[...techStack, ...techStack, ...techStack].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-12">
                {item.name}
                <span className="size-1 rounded-full bg-tint/10" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
