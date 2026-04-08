"use client";

import { useEffect } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { XCircle, CheckCircle2 } from "lucide-react";

declare global {
  interface Window {
    FB?: {
      XFBML: { parse: () => void };
    };
  }
}

export function SocialProofSection() {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <Script
        id="facebook-sdk"
        strategy="lazyOnload"
        src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v22.0"
        crossOrigin="anonymous"
        onLoad={() => {
          if (window.FB) window.FB.XFBML.parse();
        }}
      />
      <div id="fb-root" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Vu sur Facebook"
          title="CliniquePro en action"
          description="Découvrez comment CliniquePro transforme la gestion des cliniques au quotidien."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-start justify-center gap-10 lg:flex-row lg:items-center"
        >
          {/* Facebook Reel Embed — large */}
          <div className="w-full max-w-lg shrink-0 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200 bg-white mx-auto lg:mx-0">
            <div
              className="fb-video"
              data-href="https://www.facebook.com/reel/1891837381533251"
              data-width="500"
              data-show-text="true"
              data-allowfullscreen="true"
            />
          </div>

          {/* Description du reel */}
          <div className="w-full max-w-lg space-y-6">
            <div>
              <p className="text-2xl font-extrabold text-slate-900 leading-snug">
                🚨 Ne subissez plus votre clinique.{" "}
                <span className="text-brand-600">Pilotez-la.</span>
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Vous gérez encore…
              </p>
              {[
                "Des dossiers papier éparpillés",
                "Des files d'attente interminables",
                "Des factures introuvables",
                "Des honoraires non suivis",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-slate-200" />

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Avec CliniquePro…
              </p>
              {[
                "Dossiers patients centralisés et accessibles",
                "Facturation automatique et assurances intégrées",
                "Suivi des honoraires en temps réel",
                "Tableau de bord pour piloter votre clinique",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
