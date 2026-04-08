"use client";

import { motion } from "framer-motion";
import {
  UserRound,
  BrainCircuit,
  Microscope,
  Receipt,
  ShieldCheck,
  LayoutDashboard,
  MessageSquare,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UserRound,
  BrainCircuit,
  Microscope,
  Receipt,
  ShieldCheck,
  LayoutDashboard,
  MessageSquare,
};

const cardColors = [
  { bg: "bg-blue-50", icon: "bg-blue-100 text-blue-600", border: "hover:ring-blue-200" },
  { bg: "bg-violet-50", icon: "bg-violet-100 text-violet-600", border: "hover:ring-violet-200" },
  { bg: "bg-amber-50", icon: "bg-amber-100 text-amber-600", border: "hover:ring-amber-200" },
  { bg: "bg-emerald-50", icon: "bg-emerald-100 text-emerald-600", border: "hover:ring-emerald-200" },
  { bg: "bg-rose-50", icon: "bg-rose-100 text-rose-600", border: "hover:ring-rose-200" },
  { bg: "bg-cyan-50", icon: "bg-cyan-100 text-cyan-600", border: "hover:ring-cyan-200" },
  { bg: "bg-orange-50", icon: "bg-orange-100 text-orange-600", border: "hover:ring-orange-200" },
];

export function FeaturesSection() {
  return (
    <section
      id="fonctionnalites"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="features-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Fonctionnalités"
          title="Une plateforme complète pour chaque aspect de votre clinique"
          description="CliniquePro couvre l'intégralité du parcours patient et de la gestion de votre établissement. Chaque module est pensé pour réduire les frictions, automatiser les tâches et améliorer la prise en charge."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const color = cardColors[index % cardColors.length];
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-2xl bg-white p-7 ring-1 ring-slate-200/80 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 ${color.border}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${color.icon} transition-transform group-hover:scale-110`}
                >
                  {Icon && <Icon className="h-6 w-6" />}
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
