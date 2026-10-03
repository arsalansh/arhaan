'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CASE_STUDIES, CaseStudy } from '@/lib/content';
import { ArrowUpRight, X, Layers, Activity, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filters = [
    { label: 'All', count: 3 },
    { label: 'Market Entry', count: 1 },
    { label: 'E-commerce', count: 1 },
    { label: 'Repositioning', count: 1 },
  ];

  const caseVisuals: Record<string, { src: string; alt: string; role: string; system: string }> = {
    'case-01': {
      src: '/images/case-dtc-color.jpg',
      alt: 'Consumer brand luxury apothecary packaging and hero formulation',
      role: 'Launch Strategy & Go-To-Market Advisory',
      system: 'Audience Reframing · Daily Ritual Wedge · 90-Day Demand Engine',
    },
    'case-02': {
      src: '/images/case-ecommerce-color.jpg',
      alt: 'D2C e-commerce checkout interface and conversion analytics',
      role: 'Digital Commerce & Conversion Architecture',
      system: 'Shopify Plus Re-platforming · Cart Friction Removal · Retention Loop',
    },
    'case-03': {
      src: '/images/case-heritage-color.jpg',
      alt: 'Heritage luxury brand modernized identity and editorial lookbook',
      role: 'Category Repositioning & Brand Architecture',
      system: 'Craft Narrative Territory · Premium Tier Architecture · Editorial Video',
    },
  };

  const filteredCases = activeFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.category === activeFilter);

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 01. Editorial Archive Hero Section */}
      <section className="relative w-full px-6 md:px-12 lg:px-16 pt-8 pb-16 border-b border-border">
        {/* Pre-header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span className="uppercase text-foreground font-semibold">ARHAAN SHAIKH</span>
            <span className="text-muted-light">//</span>
            <span className="uppercase">VERIFIED COMMERCIAL ARCHIVE</span>
          </div>
          <div className="flex items-center gap-6">
            <span>STRATEGIC DELIVERY · 2016–2026</span>
            <span>•</span>
            <span className="text-foreground">03 CASE RECORDS</span>
          </div>
        </div>

        {/* Monumental Headline */}
        <div className="pt-10 pb-12 sm:pt-14 sm:pb-16 max-w-6xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-sans font-bold tracking-tighter text-foreground leading-[0.94]">
            Performance, <br className="hidden sm:block" />
            not promises<span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-[var(--accent)] ml-2 sm:ml-3 align-baseline"></span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted font-light max-w-3xl leading-snug">
            These are transparent demonstration structures until approved client names, visuals, and results are supplied. Every case maps the true commercial barrier to the verified outcome.
          </p>
        </div>

        {/* Filter Strip with Monospace Counter */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((cat, idx) => (
              <button
                key={cat.label}
                onClick={() => setActiveFilter(cat.label)}
                className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                  activeFilter === cat.label
                    ? 'border-foreground bg-foreground text-background font-bold'
                    : 'border-border bg-background text-muted hover:text-foreground hover:bg-surface'
                }`}
              >
                <span className="mr-2 opacity-60">0{idx + 1}</span>
                <span>{cat.label}</span>
                <span className="ml-2 px-1.5 py-0.2 bg-border text-[10px]">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-muted">
            SHOWING: <span className="text-foreground font-bold">{filteredCases.length} CASE RECORDS</span> UNDER {activeFilter.toUpperCase()}
          </div>
        </div>
      </section>

      {/* 02. Editorial Project Archive (Varied Asymmetric Compositions) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-12 sm:py-20 divide-y divide-border border-b border-border">
        {filteredCases.map((study, idx) => {
          const visual = caseVisuals[study.id] || caseVisuals['case-01'];
          const isEven = idx % 2 === 1;

          // Case 03 composition: Full-Width Cinematic Header with 2-Column Split Below
          if (study.caseNumber === '03') {
            return (
              <article key={study.id} className="py-20 sm:py-28 space-y-10">
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted pb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-foreground">PROJECT {study.caseNumber}</span>
                    <span>//</span>
                    <span className="uppercase">{study.category}</span>
                  </div>
                  <span>{study.clientType}</span>
                </div>

                <div className="space-y-8">
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-tight max-w-4xl">
                    {study.title}
                  </h2>

                  {/* Wide Cinematic Visual Anchor in Original Colors */}
                  <div className="relative w-full h-[320px] sm:h-[460px] lg:h-[560px] overflow-hidden bg-surface border border-border group">
                    <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-xs px-2.5 py-1 border border-border font-mono text-[10px] uppercase text-foreground">
                      CINEMATIC IDENTITY ARCHIVE // {study.caseNumber}
                    </div>
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      className="object-cover object-center group-hover:scale-101 transition-transform duration-1000"
                      sizes="100vw"
                    />
                  </div>

                  {/* 2-Column Breakdown: Narrative & System Architecture */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-4">
                    <div className="lg:col-span-7 space-y-6 text-base text-muted font-light leading-relaxed">
                      <div>
                        <strong className="text-foreground font-mono text-xs uppercase tracking-wider block mb-1">
                          The Challenge:
                        </strong>
                        <p>{study.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-foreground font-mono text-xs uppercase tracking-wider block mb-1">
                          The Strategy:
                        </strong>
                        <p>{study.strategy}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                      <div className="p-6 bg-surface border border-border space-y-4 font-mono text-xs">
                        <div>
                          <span className="text-muted block text-[10px] uppercase">ADVISORY ROLE:</span>
                          <span className="text-foreground font-medium">{visual.role}</span>
                        </div>
                        <div className="pt-2 border-t border-border">
                          <span className="text-muted block text-[10px] uppercase">DEPLOYED SYSTEM:</span>
                          <span className="text-foreground font-medium">{visual.system}</span>
                        </div>
                        <div className="pt-2 border-t border-border">
                          <span className="text-[var(--accent)] block text-[10px] uppercase font-bold">VERIFIED OUTCOME:</span>
                          <p className="text-foreground font-sans font-bold text-sm pt-0.5">{study.outcome}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <Link
                            href={`/work/${study.id}`}
                            className="px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                          >
                            <span>View Case Study →</span>
                          </Link>
                          <button
                            onClick={() => setSelectedCase(study)}
                            className="px-4 py-3.5 border border-border text-foreground hover:bg-surface font-mono text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <span>Quick Dossier</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl sm:text-3xl font-bold font-sans text-foreground">{study.metrics[0].value}</span>
                          <span className="block text-[10px] font-mono text-muted uppercase">{study.metrics[0].label}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          // Case 01 and 02: Alternating Asymmetric Spreads
          return (
            <article key={study.id} className="py-20 sm:py-28 space-y-10">
              {/* Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-foreground">PROJECT {study.caseNumber}</span>
                  <span>//</span>
                  <span className="uppercase">{study.category}</span>
                </div>
                <span>{study.clientType}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Visual Anchor (Col 6) - Left or Right based on index */}
                <div className={`lg:col-span-6 ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface border border-border group">
                    <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-xs px-2.5 py-1 border border-border font-mono text-[10px] uppercase text-foreground">
                      RECORD // {study.caseNumber}
                    </div>
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 600px"
                    />
                  </div>
                  <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-muted px-1">
                    <span>ROLE: {visual.role}</span>
                    <span>ORIGINAL ASSET</span>
                  </div>
                </div>

                {/* Narrative & Metrics (Col 6) */}
                <div className={`lg:col-span-6 space-y-8 ${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-foreground leading-tight">
                      {study.title}
                    </h2>

                    <div className="space-y-4 text-sm sm:text-base text-muted font-light leading-relaxed pt-2">
                      <p>
                        <strong className="text-foreground font-mono text-xs uppercase tracking-wider block mb-1">
                          The Challenge:
                        </strong>
                        {study.challenge}
                      </p>
                      <p>
                        <strong className="text-foreground font-mono text-xs uppercase tracking-wider block mb-1">
                          The Strategy:
                        </strong>
                        {study.strategy}
                      </p>
                      <p className="text-foreground font-medium">
                        <strong className="block text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-1">
                          The Outcome:
                        </strong>
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  {/* System Tags */}
                  <div className="p-4 bg-surface border border-border font-mono text-xs space-y-1">
                    <div className="text-[10px] uppercase text-muted tracking-wider">DEPLOYED SYSTEM:</div>
                    <div className="text-foreground font-medium">{visual.system}</div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                    {study.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="space-y-1">
                        <div className="text-3xl sm:text-4xl font-sans font-bold text-foreground tracking-tight">
                          {m.value}
                        </div>
                        <div className="text-[11px] font-mono text-muted uppercase">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/work/${study.id}`}
                      className="px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                    >
                      <span>View Case Study →</span>
                    </Link>
                    <button
                      onClick={() => setSelectedCase(study)}
                      className="px-4 py-3.5 border border-border text-foreground hover:bg-surface font-mono text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Quick Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* 03. Case Study Visual Narrative Modal (Rule 15 Structure) */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-card border border-border p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 max-h-[92vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 text-muted hover:text-foreground cursor-pointer z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* 1. OPENING VISUAL */}
              <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-surface border border-border">
                <Image
                  src={caseVisuals[selectedCase.id]?.src || '/images/case-dtc-color.jpg'}
                  alt={selectedCase.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 z-10 bg-background/90 px-2.5 py-1 border border-border font-mono text-[10px] text-foreground uppercase">
                  CASE {selectedCase.caseNumber} // {selectedCase.category}
                </div>
              </div>

              {/* 2. PROJECT TITLE & INTRODUCTION */}
              <div className="space-y-2 border-b border-border pb-6">
                <div className="text-xs font-mono text-muted uppercase">
                  {selectedCase.clientType}
                </div>
                <h3 className="text-2xl sm:text-4xl font-sans font-bold text-foreground">
                  {selectedCase.title}
                </h3>
                <p className="text-sm sm:text-base text-muted font-light pt-2 leading-relaxed">
                  {selectedCase.detailedOverview}
                </p>
              </div>

              {/* 3. THE PROBLEM */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-muted block">
                  The Problem // Diagnostic Challenge
                </span>
                <p className="text-base text-foreground font-light leading-relaxed p-4 bg-surface border-l-2 border-foreground">
                  {selectedCase.challenge}
                </p>
              </div>

              {/* 4. THE SYSTEM & PROCESS */}
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-muted block">
                  The System // Strategic Intervention & Process
                </span>
                <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                  {selectedCase.strategy}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {selectedCase.frameworkSteps.map((step, sIdx) => (
                    <div key={step} className="p-3 bg-surface border border-border font-mono text-xs flex items-center gap-2">
                      <span className="text-[var(--accent)] font-bold">0{sIdx + 1}.</span>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. THE RESULT (Metrics & Commercial Evidence) */}
              <div className="space-y-3 border-t border-border pt-6">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] block font-bold">
                  The Result // Commercial Outcome
                </span>
                <p className="text-base font-sans font-bold text-foreground">
                  {selectedCase.outcome}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3">
                  {selectedCase.metrics.map((m) => (
                    <div key={m.label} className="p-3 bg-surface border border-border space-y-1">
                      <div className="text-2xl sm:text-3xl font-sans font-bold text-foreground tracking-tight">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-muted uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href={`/contact?case=${encodeURIComponent(selectedCase.title)}`}
                  onClick={() => setSelectedCase(null)}
                  className="w-full sm:w-auto px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity text-center"
                >
                  Discuss Similar Engagement ↗
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
    </div>
  );
}
