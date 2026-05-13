"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe2,
  Languages,
  Layers,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useT } from "@/lib/i18n";

const pillarIcons = [Building2, Layers, Workflow, ShieldCheck];

export function About() {
  const t = useT();

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 relative overflow-hidden rounded-3xl border border-tint/[0.06] bg-tint/[0.02] backdrop-blur-xl p-8"
          >
            <div className="absolute -top-32 -end-32 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.about.currentlyEyebrow}
              </p>
              <p className="mt-3 font-display text-2xl font-semibold leading-tight">
                {t.about.currentlyLine}{" "}
                <span className="text-gradient-cyan">
                  {t.about.currentlyCompany}
                </span>
                {t.about.currentlyTail}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t.about.labels.languages}
                  </p>
                  <p className="mt-1.5 inline-flex items-center gap-2 text-foreground">
                    <Languages className="size-4 text-cyan-300" />
                    {t.profile.languages}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t.about.labels.based}
                  </p>
                  <p className="mt-1.5 inline-flex items-center gap-2 text-foreground">
                    <Globe2 className="size-4 text-cyan-300" />
                    {t.profile.location}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t.about.labels.experience}
                  </p>
                  <p className="mt-1.5 text-foreground">
                    {t.about.labels.years}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t.about.labels.status}
                  </p>
                  <p className="mt-1.5 text-foreground">
                    {t.profile.availability}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {t.about.pillars.map((p, i) => {
              const Icon = pillarIcons[i] ?? Building2;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-tint/[0.06] bg-tint/[0.02] backdrop-blur-xl p-6 transition-colors hover:border-tint/[0.12]"
                >
                  <div className="inline-flex size-10 items-center justify-center rounded-xl border border-tint/[0.08] bg-tint/[0.04] text-cyan-300">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/40 transition-colors"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
