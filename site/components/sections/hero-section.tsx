"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_STATS } from "@/lib/constants";

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => setVideoError(true));
    }
  }, []);

  if (videoError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900">
        <div className="absolute inset-0 bg-grid opacity-10" />
        {/* Animated orbs for visual interest */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent-600/15 blur-3xl animate-pulse delay-1000" />
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      poster="/hero-poster.jpg"
      onError={() => setVideoError(true)}
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/medias/CliniquePro.mp4" type="video/mp4" />
    </video>
  );
}

export function HeroSection() {
  return (
    <section className="hero-video-container relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video Background */}
      <HeroVideo />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900/95 z-[1]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/90 ring-1 ring-white/20 backdrop-blur-sm">
              <Play className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
              Logiciel intelligent pour cliniques
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            De la première prise en charge
            <br />
            <span className="gradient-text">au dernier encaissement</span>
            <br />
            <span className="text-white/80">sans friction.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            CliniquePro unifie patients, consultations, examens, prescriptions,
            facturation, assurances, caisse et honoraires dans une seule
            plateforme intelligente — pour une clinique fluide, pilotée et
            rentable.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="xl" asChild>
              <a href="#demander-demo">
                Demander une démonstration
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <a href="#fonctionnalites">Découvrir les fonctionnalités</a>
            </Button>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400"
          >
            {[
              "Multi-spécialités",
              "IA intégrée",
              "Adapté au contexte africain",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mx-auto mt-20 grid max-w-lg grid-cols-3 gap-8"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 pt-2"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
