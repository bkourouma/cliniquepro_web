"use client";

import { motion } from "framer-motion";
import { Check, Star, Wrench, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PRICING_PLANS, PRICING_ADDONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section
      id="tarifs"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tarifs"
          title="Un investissement adapté à votre stratégie"
          description="CliniquePro propose un modèle flexible adapté à la taille et à la stratégie de votre établissement. Licence perpétuelle ou abonnement mensuel, choisissez la formule qui vous convient."
        />

        {/* Main pricing cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={cn(
                "relative rounded-3xl p-8 sm:p-10 transition-all duration-300",
                plan.highlighted
                  ? "bg-slate-950 text-white ring-2 ring-brand-500 shadow-2xl shadow-brand-500/20"
                  : "bg-white ring-1 ring-slate-200 shadow-xl shadow-slate-900/5 hover:shadow-2xl"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3
                  className={cn(
                    "text-lg font-semibold",
                    plan.highlighted ? "text-brand-300" : "text-brand-600"
                  )}
                >
                  {plan.subtitle}
                </h3>
                <div className="mt-2">
                  <span
                    className={cn(
                      "block text-4xl font-extrabold tracking-tight whitespace-nowrap sm:text-5xl",
                      plan.highlighted ? "text-white" : "text-slate-900"
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block text-sm font-medium",
                      plan.highlighted ? "text-slate-400" : "text-slate-500"
                    )}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed",
                    plan.highlighted ? "text-slate-300" : "text-slate-600"
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                        plan.highlighted
                          ? "bg-accent-500/20 text-accent-400"
                          : "bg-accent-50 text-accent-600"
                      )}
                    >
                      <Check className="h-3 w-3" />
                    </div>
                    <span
                      className={cn(
                        "text-sm",
                        plan.highlighted ? "text-slate-200" : "text-slate-700"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button
                  size="lg"
                  variant={plan.highlighted ? "default" : "secondary"}
                  className="w-full"
                  asChild
                >
                  <a href="#demander-demo">
                    Demander une démonstration
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {PRICING_ADDONS.map((addon, index) => {
            const AddonIcon = index === 0 ? Wrench : Cloud;
            return (
              <div
                key={addon.name}
                className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/80 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm ring-1 ring-slate-100">
                    <AddonIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {addon.name}
                    </h4>
                    <p className="text-sm font-semibold text-brand-600">
                      {addon.price}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {addon.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild>
            <a href="#demander-demo">
              Demander une démonstration
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#demander-demo">Obtenir un devis</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
