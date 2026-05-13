"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import { profile } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.05 * i,
    },
  }),
};

export function Hero() {
  const t = useT();

  return (
    <section
      id="top"
      className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden"
    >
      <div className="container relative">
        <div className="max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-tint/10 bg-tint/[0.03] px-3 py-1 text-xs text-muted-foreground backdrop-blur-md"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
              <span className="relative size-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-medium tracking-wide text-foreground/80">
              {t.hero.status}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-muted-foreground">
              <span className="mx-1 size-1 rounded-full bg-tint/20" />
              <MapPin className="size-3" /> {t.profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.04]"
          >
            <span className="text-gradient">{t.hero.headlineL1}</span>
            <br />
            <span className="text-gradient">{t.hero.headlineL2}</span>{" "}
            <span className="relative inline-block">
              <span className="text-gradient-cyan">{t.hero.headlineHighlight}</span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-1 start-0 end-0 h-px origin-[start] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" variant="default">
              <a href="#projects">
                {t.hero.ctaPrimary} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                {t.hero.ctaSecondary} <Mail className="size-4" />
              </a>
            </Button>
            <a
              href={profile.resume}
              className="ms-1 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.hero.resume}
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="relative mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-tint/[0.06] bg-tint/[0.02] backdrop-blur-xl"
        >
          {t.hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative bg-background/30 p-6 sm:p-7"
            >
              <p className="font-display text-2xl sm:text-3xl font-semibold text-gradient">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </p>
              {i < t.hero.stats.length - 1 ? (
                <span className="hidden sm:block absolute end-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-tint/[0.06] to-transparent" />
              ) : null}
            </div>
          ))}
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-40 h-80 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}
