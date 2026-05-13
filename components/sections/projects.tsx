"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { useT } from "@/lib/i18n";
import { projectMeta } from "@/lib/data";

type ProjectItem = ReturnType<typeof useT>["projects"]["items"][number];
type ProjectMetaItem = (typeof projectMeta)[number];

interface ProjectCardProps {
  item: ProjectItem;
  meta: ProjectMetaItem;
  index: number;
  liveLabel: string;
  codeLabel: string;
  proprietaryLabel: string;
}

function ProjectCard({
  item,
  meta,
  index,
  liveLabel,
  codeLabel,
  proprietaryLabel,
}: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = meta.icon as LucideIcon;
  const showScreenshot = Boolean(meta.screenshot) && !imageFailed;
  const hasLinks = Boolean(meta.live) || Boolean(meta.code);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.04,
      }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-tint/[0.06] bg-tint/[0.02] backdrop-blur-xl transition-all hover:border-tint/[0.14] hover:-translate-y-1"
    >
      <div
        className={`relative aspect-[15/8] overflow-hidden bg-gradient-to-br ${meta.accent}`}
      >
        {showScreenshot ? (
          <Image
            src={meta.screenshot}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <>
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-tint/20 rounded-full scale-150" />
                <Icon
                  strokeWidth={1.25}
                  className="relative size-16 text-white/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                />
              </div>
            </div>
          </>
        )}
        <div className="absolute bottom-3 start-3 z-10">
          <Badge
            variant="default"
            className="text-[10px] border-white/20 bg-black/50 text-white backdrop-blur-md"
          >
            {item.tag}
          </Badge>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {item.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-tint/[0.06] bg-tint/[0.02] p-2.5"
            >
              <p className="font-display text-sm font-semibold text-gradient">
                {m.value}
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {meta.stack.map((s) => (
            <Badge key={s} variant="outline" className="text-[10px]">
              {s}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 pt-5 border-t border-tint/[0.06]">
          {hasLinks ? (
            <>
              {meta.live ? (
                <a
                  href={meta.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-tint/10 bg-tint/[0.04] px-3 py-1.5 text-xs font-medium hover:bg-tint/[0.08] transition-colors"
                >
                  {liveLabel}{" "}
                  <ArrowUpRight className="size-3 rtl:-scale-x-100" />
                </a>
              ) : null}
              {meta.code ? (
                <a
                  href={meta.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-tint/10 bg-transparent px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-tint/[0.04] transition-colors"
                >
                  <Github className="size-3" /> {codeLabel}
                </a>
              ) : null}
            </>
          ) : (
            <p className="text-[11px] text-muted-foreground italic">
              {proprietaryLabel}
            </p>
          )}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-tint/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ maskImage: "linear-gradient(black, transparent)" }}
      />
    </motion.article>
  );
}

export function Projects() {
  const t = useT();
  const items = t.projects.items;

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.projects.discuss}{" "}
            <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((p, i) => {
            const meta =
              projectMeta.find((m) => m.slug === p.slug) ?? projectMeta[i];
            return (
              <ProjectCard
                key={p.slug}
                item={p}
                meta={meta}
                index={i}
                liveLabel={t.projects.live}
                codeLabel={t.projects.code}
                proprietaryLabel={t.projects.proprietary}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
