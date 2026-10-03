'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CASE_STUDIES, CaseStudy } from '@/lib/content';
import { ArrowUpRight, X, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function SelectedWork() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const projectImages = [
    { src: '/images/case-dtc-color.jpg', alt: 'Consumer Brand launch architecture tactile packaging and apothecary bottles' },
    { src: '/images/case-ecommerce-color.jpg', alt: 'D2C e-commerce conversion architecture and live checkout analytics' },
    { src: '/images/case-heritage-color.jpg', alt: 'Legacy brand modernization, embossed stationery and editorial lookbook' },
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-t border-border bg-background">
      {/* Standalone Monumental Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 sm:mb-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>VERIFIED CASE ARCHIVE // 04 COMMERCIAL RECORDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
            Performance, <br className="hidden sm:block" />
            not promises<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed">
            These are transparent demonstration structures until approved client names, visuals, and results are supplied. Every case maps the true commercial barrier to the verified outcome.
          </p>
        </div>

        <Link
          href="/work"
          className="px-6 py-3.5 border border-border text-foreground hover:bg-surface text-xs font-mono uppercase tracking-widest font-bold transition-colors inline-flex items-center gap-2 shrink-0"
        >
          <span>View All Cases ({CASE_STUDIES.length})</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Editorial Spreads (Alternating Compositions: Right, Left, Wide Cinematic, Small with Whitespace) */}
      <div className="divide-y divide-border border-y border-border">
        {/* Project 01: Large Image Aligned Right */}
        {CASE_STUDIES[0] && (
          <article className="py-20 sm:py-28 space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted pb-4 border-b border-border">
              <span className="font-bold text-foreground">PROJECT 01 // {CASE_STUDIES[0].category.toUpperCase()}</span>
              <span>{CASE_STUDIES[0].clientType}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Text & Metadata (6 cols) */}
              <div className="lg:col-span-6 space-y-8">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-foreground leading-tight">
                  {CASE_STUDIES[0].title}
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-muted font-light leading-relaxed">
                  <p>
                    <strong className="text-foreground font-medium block text-xs font-mono uppercase tracking-wider mb-1">Challenge:</strong>
                    {CASE_STUDIES[0].challenge}
                  </p>
                  <p>
                    <strong className="text-foreground font-medium block text-xs font-mono uppercase tracking-wider mb-1">Strategy:</strong>
                    {CASE_STUDIES[0].strategy}
                  </p>
                  <p className="text-foreground font-medium">
                    <strong className="block text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-1">Outcome:</strong>
                    {CASE_STUDIES[0].outcome}
                  </p>
                </div>

                {/* Primary Metrics */}
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                  {CASE_STUDIES[0].metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="space-y-1">
                      <div className="text-4xl sm:text-5xl font-sans font-bold text-foreground tracking-tight">{m.value}</div>
                      <div className="text-xs font-mono text-muted uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/work/${CASE_STUDIES[0].id}`}
                    className="px-5 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
                  >
                    <span>View Case Study →</span>
                  </Link>
                  <button
                    onClick={() => setSelectedCase(CASE_STUDIES[0])}
                    className="text-xs font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Quick dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Large Image Aligned Right (6 cols) */}
              <div className="lg:col-span-6">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface border border-border group">
                  <div className="absolute top-4 right-4 z-20 bg-background/90 px-2 py-0.5 border border-border font-mono text-[9px] uppercase">
                    EDITORIAL RECORD // 01
                  </div>
                  <Image
                    src={projectImages[0].src}
                    alt={projectImages[0].alt}
                    fill
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Project 02: Large Image Aligned Left */}
        {CASE_STUDIES[1] && (
          <article className="py-20 sm:py-28 space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted pb-4 border-b border-border">
              <span className="font-bold text-foreground">PROJECT 02 // {CASE_STUDIES[1].category.toUpperCase()}</span>
              <span>{CASE_STUDIES[1].clientType}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Large Image Aligned Left (6 cols) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface border border-border group">
                  <div className="absolute top-4 left-4 z-20 bg-background/90 px-2 py-0.5 border border-border font-mono text-[9px] uppercase">
                    EDITORIAL RECORD // 02
                  </div>
                  <Image
                    src={projectImages[1].src}
                    alt={projectImages[1].alt}
                    fill
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
              </div>

              {/* Text & Metadata (6 cols) */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-foreground leading-tight">
                  {CASE_STUDIES[1].title}
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-muted font-light leading-relaxed">
                  <p>
                    <strong className="text-foreground font-medium block text-xs font-mono uppercase tracking-wider mb-1">Challenge:</strong>
                    {CASE_STUDIES[1].challenge}
                  </p>
                  <p>
                    <strong className="text-foreground font-medium block text-xs font-mono uppercase tracking-wider mb-1">Strategy:</strong>
                    {CASE_STUDIES[1].strategy}
                  </p>
                  <p className="text-foreground font-medium">
                    <strong className="block text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-1">Outcome:</strong>
                    {CASE_STUDIES[1].outcome}
                  </p>
                </div>

                {/* Primary Metrics */}
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                  {CASE_STUDIES[1].metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="space-y-1">
                      <div className="text-4xl sm:text-5xl font-sans font-bold text-foreground tracking-tight">{m.value}</div>
                      <div className="text-xs font-mono text-muted uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/work/${CASE_STUDIES[1].id}`}
                    className="px-5 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
                  >
                    <span>View Case Study →</span>
                  </Link>
                  <button
                    onClick={() => setSelectedCase(CASE_STUDIES[1])}
                    className="text-xs font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Quick dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Project 03: Wide Cinematic Image */}
        {CASE_STUDIES[2] && (
          <article className="py-20 sm:py-28 space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted pb-4 border-b border-border">
              <span className="font-bold text-foreground">PROJECT 03 // {CASE_STUDIES[2].category.toUpperCase()}</span>
              <span>{CASE_STUDIES[2].clientType}</span>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-foreground leading-tight max-w-4xl">
                {CASE_STUDIES[2].title}
              </h3>

              {/* Wide Cinematic Image Across Width */}
              <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[500px] overflow-hidden bg-surface border border-border group">
                <div className="absolute top-4 right-4 z-20 bg-background/90 px-2 py-0.5 border border-border font-mono text-[9px] uppercase">
                  CINEMATIC IDENTITY ARCHIVE // 03
                </div>
                <Image
                  src={projectImages[2].src}
                  alt={projectImages[2].alt}
                  fill
                  className="object-cover object-center group-hover:scale-101 transition-transform duration-1000"
                  sizes="100vw"
                />
              </div>

              {/* 2-Column Split below Wide Image */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-6">
                <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-muted font-light leading-relaxed">
                  <p>
                    <strong className="text-foreground font-medium block text-xs font-mono uppercase tracking-wider mb-1">Challenge:</strong>
                    {CASE_STUDIES[2].challenge}
                  </p>
                  <p>
                    <strong className="text-foreground font-medium block text-xs font-mono uppercase tracking-wider mb-1">Strategy:</strong>
                    {CASE_STUDIES[2].strategy}
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <div className="p-6 bg-surface border border-border space-y-3">
                    <strong className="block text-xs font-mono uppercase tracking-wider text-[var(--accent)]">Outcome:</strong>
                    <p className="text-sm font-sans font-bold text-foreground">{CASE_STUDIES[2].outcome}</p>
                    <div className="pt-2 border-t border-border flex items-baseline justify-between text-xs font-mono">
                      <span className="text-muted">{CASE_STUDIES[2].metrics[0].label}:</span>
                      <span className="text-2xl font-bold font-sans text-foreground">{CASE_STUDIES[2].metrics[0].value}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={`/work/${CASE_STUDIES[2].id}`}
                      className="px-5 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
                    >
                      <span>View Case Study →</span>
                    </Link>
                    <button
                      onClick={() => setSelectedCase(CASE_STUDIES[2])}
                      className="text-xs font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Quick dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-card border border-border p-8 sm:p-12 shadow-2xl space-y-8 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between border-b border-border pb-6">
                <div>
                  <div className="text-xs font-mono text-muted uppercase mb-1">
                    CASE {selectedCase.caseNumber} // {selectedCase.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-foreground">
                    {selectedCase.title}
                  </h3>
                  <div className="text-xs font-mono text-muted mt-1">
                    {selectedCase.clientType}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-1 text-muted hover:text-foreground cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-surface border border-border">
                {selectedCase.metrics.map((m) => (
                  <div key={m.label} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-bold font-sans text-foreground">{m.value}</div>
                    <div className="text-[11px] font-mono text-muted uppercase">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Full Breakdown */}
              <div className="space-y-6 text-sm text-foreground leading-relaxed">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-1">
                    Diagnostic Challenge
                  </h4>
                  <p className="text-muted font-light">{selectedCase.challenge}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-1">
                    Strategic Lever
                  </h4>
                  <p className="text-muted font-light">{selectedCase.strategy}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-1">
                    Verified Outcome
                  </h4>
                  <p className="text-foreground font-medium">{selectedCase.outcome}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-1">
                    Detailed Overview
                  </h4>
                  <p className="text-muted font-light leading-relaxed">{selectedCase.detailedOverview}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between text-xs font-mono">
                <Link
                  href={`/contact?case=${encodeURIComponent(selectedCase.title)}`}
                  onClick={() => setSelectedCase(null)}
                  className="px-6 py-3 bg-foreground text-background font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Discuss Similar Problem ↗
                </Link>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-xs font-mono text-muted hover:text-foreground cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
