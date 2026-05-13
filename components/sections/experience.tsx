"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { useT } from "@/lib/i18n";
import { experienceTech } from "@/lib/data";

export function Experience() {
  const t = useT();

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute start-4 md:start-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-tint/[0.08] to-transparent"
          />

          <ol className="space-y-12 md:space-y-20">
            {t.experience.items.map((exp, i) => {
              const left = i % 2 === 0;
              const tech = experienceTech[i] ?? [];
              return (
                <motion.li
                  key={exp.company + i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.05,
                  }}
                  className="relative grid md:grid-cols-2 gap-6 md:gap-12 items-start"
                >
                  <span
                    aria-hidden
                    className="absolute start-4 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 top-2 size-3 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 shadow-[0_0_0_4px_rgba(56,189,248,0.12)]"
                  />

                  <div
                    className={`ps-12 md:ps-0 ${
                      left ? "md:pe-12 md:text-end" : "md:order-2 md:ps-12"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {exp.period}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm text-foreground/80">
                      <Briefcase className="size-3.5" /> {exp.company}
                      <span className="size-1 rounded-full bg-tint/20" />
                      <MapPin className="size-3.5" /> {exp.location}
                    </p>
                  </div>

                  <div
                    className={`ps-12 md:ps-0 ${
                      left ? "md:order-2 md:ps-12" : "md:pe-12"
                    }`}
                  >
                    <div className="rounded-2xl border border-tint/[0.06] bg-tint/[0.02] backdrop-blur-xl p-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.summary}
                      </p>
                      <ul className="mt-5 space-y-2 text-sm">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex gap-2 text-foreground/80"
                          >
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan-300" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {tech.map((technology) => (
                          <Badge key={technology} variant="default">
                            {technology}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
