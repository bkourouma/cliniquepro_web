"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

type FormState = "idle" | "loading" | "success" | "error";

export function FinalCtaSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [requestType, setRequestType] = useState<"demo" | "devis">("demo");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      clinique: (form.elements.namedItem("clinique") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telephone: (form.elements.namedItem("telephone") as HTMLInputElement).value,
      ville: (form.elements.namedItem("ville") as HTMLInputElement).value,
      type: requestType,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Erreur inconnue");
      }

      setFormState("success");
    } catch (err: unknown) {
      setFormState("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur lors de l'envoi.");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all";

  return (
    <section
      id="demander-demo"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
      aria-labelledby="cta-heading"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-600/20 blur-[128px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent-600/10 blur-3xl" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/90 ring-1 ring-white/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent-400" />
            Transformez votre clinique
          </span>
          <h2
            id="cta-heading"
            className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Demander une{" "}
            <span className="gradient-text">démonstration</span>
            <br />
            ou un devis
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Notre équipe vous répond sous 24h. Démonstration gratuite et sans engagement.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center gap-6 rounded-2xl bg-white/5 p-12 text-center ring-1 ring-white/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/20">
                  <CheckCircle2 className="h-8 w-8 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Message envoyé !</h3>
                  <p className="mt-2 text-slate-400">
                    Merci pour votre intérêt. Notre équipe vous contactera dans les 24h.
                  </p>
                </div>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-sm text-brand-400 hover:text-brand-300 transition-colors"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Type de demande */}
                <div className="flex rounded-xl bg-white/5 p-1 ring-1 ring-white/10">
                  {(["demo", "devis"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setRequestType(t)}
                      className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                        requestType === t
                          ? "bg-brand-600 text-white shadow"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {t === "demo" ? "🗓️ Démonstration" : "📋 Devis"}
                    </button>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">
                      Nom complet <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="nom"
                      required
                      placeholder="Dr. Koné Mamadou"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">
                      Clinique / Établissement
                    </label>
                    <input
                      name="clinique"
                      placeholder="Clinique Sainte-Marie"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="docteur@clinique.ci"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">
                      Téléphone <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="telephone"
                      type="tel"
                      required
                      placeholder="+225 07 00 00 00 00"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">
                    Ville / Pays
                  </label>
                  <input
                    name="ville"
                    placeholder="Abidjan, Côte d'Ivoire"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Décrivez vos besoins, la taille de votre établissement, vos spécialités..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {formState === "error" && (
                  <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400 ring-1 ring-red-500/20">
                    {errorMsg}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={formState === "loading"}
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {requestType === "demo"
                        ? "Demander une démonstration"
                        : "Demander un devis"}
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-slate-500">
                  Réponse garantie sous 24h · Gratuit et sans engagement
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-bold text-white">Nous contacter directement</h3>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-brand-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="mt-0.5 block text-white hover:text-brand-400 transition-colors font-medium"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-brand-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Téléphone</p>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                    className="mt-0.5 block text-white hover:text-brand-400 transition-colors font-medium"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-brand-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Adresse</p>
                  <p className="mt-0.5 text-white font-medium">{SITE_CONFIG.company}</p>
                  <p className="text-slate-400 text-sm">{SITE_CONFIG.address}</p>
                </div>
              </div>
            </div>

            {/* Reassurance */}
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 space-y-3">
              {[
                "Démonstration personnalisée et gratuite",
                "Réponse de notre équipe sous 24h",
                "Accompagnement complet à la mise en service",
                "Support dédié après démarrage",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-400" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
