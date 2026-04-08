"use client";

import { motion } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { BEFORE_AFTER } from "@/lib/constants";

export function BeforeAfterSection() {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
      aria-labelledby="before-after-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-accent-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-300 ring-1 ring-white/10">
            Transformation
          </span>
          <h2
            id="before-after-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Avant, les médecins ne connaissaient pas toujours
            <br className="hidden sm:block" />
            <span className="gradient-text">
              l&apos;historique complet du patient
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Avec CliniquePro, chaque information est accessible instantanément.
            Découvrez la transformation que notre plateforme apporte à votre
            clinique.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {BEFORE_AFTER.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group grid items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:ring-white/20 sm:grid-cols-[1fr_auto_1fr] sm:gap-6 sm:p-6"
            >
              {/* Before */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                  <X className="h-4 w-4 text-red-400" />
                </div>
                <span className="text-sm font-medium text-slate-400 sm:text-base">
                  {item.before}
                </span>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-brand-400 transition-transform group-hover:translate-x-1" />
              </div>

              {/* After */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/20">
                  <CheckCircle2 className="h-4 w-4 text-accent-400" />
                </div>
                <span className="text-sm font-semibold text-white sm:text-base">
                  {item.after}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
