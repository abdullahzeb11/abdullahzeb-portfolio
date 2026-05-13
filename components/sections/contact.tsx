"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useT } from "@/lib/i18n";
import { contactChannels, profile } from "@/lib/data";

type SubmitState = "idle" | "sending" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function Contact() {
  const t = useT();
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!accessKey) {
      setErrorMsg(
        "Form is not configured. Add NEXT_PUBLIC_WEB3FORMS_KEY to .env.local."
      );
      setState("error");
      return;
    }

    setState("sending");
    setErrorMsg("");

    const payload = {
      access_key: accessKey,
      subject: `Project Inquiry — ${data.get("name") ?? "Unknown"}`,
      from_name: String(data.get("name") ?? ""),
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
      replyto: String(data.get("email") ?? ""),
      botcheck: "",
    };

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setState("success");
        form.reset();
      } else {
        setState("error");
        setErrorMsg(json.message ?? t.contact.errorBody);
      }
    } catch (err) {
      setState("error");
      setErrorMsg(t.contact.errorBody);
    }
  };

  const sending = state === "sending";

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.description}
            />

            <div className="mt-10 space-y-3">
              {contactChannels.map((c) => (
                <motion.a
                  key={c.key}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group flex items-center gap-4 rounded-2xl border border-tint/[0.06] bg-tint/[0.02] backdrop-blur-xl p-4 hover:border-tint/[0.14] hover:bg-tint/[0.04] transition-all"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl border border-tint/[0.08] bg-tint/[0.04] text-cyan-300">
                    <c.icon className="size-4" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {t.contact.channels[c.key]}
                    </p>
                    <p
                      className="text-sm font-medium text-foreground"
                      dir="ltr"
                    >
                      {c.value}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground rtl:-scale-x-100 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-tint/[0.06] bg-tint/[0.02] backdrop-blur-xl p-8 md:p-10"
          >
            <div className="absolute -top-32 -start-32 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-32 -end-32 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.contact.formEyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                {t.contact.formTitle}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.contact.formSubtitle}
              </p>

              <AnimatePresence mode="wait" initial={false}>
                {state === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-6 text-center"
                  >
                    <div className="inline-flex size-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                      <CheckCircle2 className="size-6" />
                    </div>
                    <h4 className="mt-4 font-display text-xl font-semibold tracking-tight">
                      {t.contact.successTitle}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {t.contact.successBody}
                    </p>
                    <button
                      type="button"
                      onClick={() => setState("idle")}
                      className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-tint/10 bg-tint/[0.04] px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-tint/[0.08]"
                    >
                      {t.contact.successCta}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="mt-8 grid gap-4"
                  >
                    <AnimatePresence>
                      {state === "error" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3">
                            <AlertCircle className="mt-0.5 size-4 shrink-0 text-red-300" />
                            <div>
                              <p className="text-sm font-medium text-foreground">
                                {t.contact.errorTitle}
                              </p>
                              <p className="mt-0.5 text-xs text-muted-foreground">
                                {errorMsg || t.contact.errorBody}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Honeypot for bots */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                        >
                          {t.contact.labels.name}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          disabled={sending}
                          placeholder={t.contact.placeholders.name}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                        >
                          {t.contact.labels.email}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          disabled={sending}
                          placeholder={t.contact.placeholders.email}
                          className="mt-2"
                          dir="ltr"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        {t.contact.labels.company}
                      </label>
                      <Input
                        id="company"
                        name="company"
                        disabled={sending}
                        placeholder={t.contact.placeholders.company}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        {t.contact.labels.message}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        disabled={sending}
                        placeholder={t.contact.placeholders.message}
                        className="mt-2"
                        rows={6}
                      />
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-2">
                      <p className="text-xs text-muted-foreground">
                        {t.contact.mailHint}{" "}
                        <bdi dir="ltr">{profile.email}</bdi>
                      </p>
                      <Button
                        type="submit"
                        size="lg"
                        variant="default"
                        disabled={sending}
                      >
                        {sending ? (
                          <>
                            {t.contact.submitSending}{" "}
                            <Loader2 className="size-4 animate-spin" />
                          </>
                        ) : (
                          <>
                            {t.contact.submitIdle} <Send className="size-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
