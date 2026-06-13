"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/sections/projects";
import { useT } from "@/lib/i18n";
import { projectMeta } from "@/lib/data";

export default function ProjectsPage() {
  const t = useT();
  const items = t.projects.items;

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative">
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5 rtl:-scale-x-100" />
              {t.projects.backHome}
            </Link>

            <div className="mt-6">
              <SectionHeading
                eyebrow={t.projects.eyebrow}
                title={t.projects.allTitle}
                description={t.projects.allDescription}
              />
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
      </main>
      <Footer />
    </>
  );
}
