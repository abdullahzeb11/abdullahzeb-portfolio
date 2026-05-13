"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useT } from "@/lib/i18n";
import { profile, navHrefs } from "@/lib/data";

export function Footer() {
  const t = useT();

  return (
    <footer className="relative mt-32 border-t border-tint/[0.06]">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-[12px] font-semibold text-white">
                {profile.initials}
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">{t.profile.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.profile.title}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t.footer.sections}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navHrefs.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.nav[l.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t.footer.connect}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="size-4" />
                  <bdi dir="ltr">{profile.email}</bdi>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="size-4" />
                  {t.contact.channels.LinkedIn}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="size-4" />
                  {t.contact.channels.GitHub}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-tint/[0.06] pt-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {t.profile.name}. {t.footer.copyright}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em]">
            {t.footer.built}
          </p>
        </div>
      </div>
    </footer>
  );
}
