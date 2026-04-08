"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Banknote,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { BENEFITS } from "@/lib/constants";

const iconMap = {
  ClipboardList,
  Banknote,
  ShieldCheck,
  BarChart3,
} as const;

export function BenefitsStrip() {
  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit, index) => {
          const Icon = iconMap[benefit.icon];
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/5 ring-1 ring-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
