"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-tint/10 bg-tint/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground",
          align === "center" && "mx-auto"
        )}
      >
        <span className="size-1 rounded-full bg-cyan-400 animate-pulse-slow" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gradient leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
