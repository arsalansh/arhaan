'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_METADATA } from '@/lib/content';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const timelineStages = [
    {
      era: "ORIGIN",
      year: "MUMBAI // 19.0760° N",
      title: "Built in Bombay, shaped by real density",
      description: "Rooted in the commercial pulse of Mumbai. The environment taught speed, resourcefulness, contrast, and endurance—pragmatic commercial instincts applied to modern enterprise growth.",
      tag: "FOUNDING GROUNDING",
    },
    {
      era: "EARLY WORK",
      year: "2016–2019",
      title: "Strategy rooms & delivery calendars",
      description: "Ten continuous years advising founders, leadership teams, and growth investors across D2C, retail, FMCG, and high-growth ventures on category positioning and commercial viability.",
      tag: "STRATEGIC ADVISORY",
    },
    {
      era: "BUILDING",
      year: "2019–2022",
      title: "Moving between strategy and reality",
      description: "Testing market hypotheses on live battlegrounds: shaping brands, running multi-channel campaigns, and sitting with operational teams on the days the plan meets reality.",
      tag: "MARKET IMMERSION",
    },
    {
      era: "TBDC",
      year: "2022–PRESENT",
      title: "Co-Founder, The Bombay Digital Company",
      description: "Founded and scaled an integrated execution firm with in-house specialists in brand, content production, digital commerce, performance engineering, and media delivery.",
      tag: "EXECUTION ENGINE",
    },
    {
      era: "TODAY",
      year: "ACTIVE ADVISORY",
      title: "Dual-leverage executive advisory",
      description: "Direct upstream strategic counsel for ambitious founders, backed by the production muscle of an agency trusted by 100+ brands to turn strategy into verified outcomes.",
      tag: "EXECUTIVE PRACTICE",
    },
  ];

  const credentials = [
    {
      number: "01",
      title: "A decade across strategy and delivery",
      description: "Ten continuous years advising founders, leadership teams, and investors across D2C, retail, FMCG, and high-growth technology ventures.",
    },
    {
      number: "02",
      title: "Founder of The Bombay Digital Company",
      description: "Founded and scaled an integrated execution firm with in-house specialists in brand, performance marketing, content production, and digital commerce.",
    },
    {
      number: "03",
      title: "Multidisciplinary production leadership",
      description: "Direct operational leadership across film shoots, complex Shopify Plus engineering builds, and multi-crore media campaigns where accountability is absolute.",
    },
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 01. Documentary Hero Section */}
      <section className="relative w-full px-6 md:px-12 lg:px-16 pt-8 pb-16 border-b border-border">
        {/* Pre-header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span className="uppercase text-foreground font-semibold">ARHAAN SHAIKH</span>
            <span className="text-muted-light">//</span>
            <span className="uppercase">FOUNDER PROFILE & EDITORIAL DOSSIER</span>
          </div>
          <div className="flex items-center gap-6">
            <span>{SITE_METADATA.coordinates}</span>
            <span>•</span>
            <span className="text-foreground">CO-FOUNDER · TBDC</span>
          </div>
        </div>

        {/* Monumental Headline */}
        <div className="pt-10 pb-12 sm:pt-14 sm:pb-16 max-w-6xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-sans font-bold tracking-tighter text-foreground leading-[0.94]">
            Behind the <br className="hidden sm:block" />
            strategy<span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-[var(--accent)] ml-2 sm:ml-3 align-baseline"></span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted font-light max-w-3xl leading-snug">
            Arhaan works at the intersection of business, brand, commerce, and marketing—where growth problems rarely fit neatly into one discipline. Advice built for reality.
          </p>
        </div>

        {/* 2-Column Balanced Split: Narrative & Anchor Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 border-t border-border">
          {/* Left Column (7 cols): Editorial Biography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
                FOUNDER PERSPECTIVE // DUALITY OF PRACTICE
              </span>
              <p className="text-base sm:text-lg text-foreground font-light leading-relaxed">
                Most consultants only hand over slides. Having founded and scaled The Bombay Digital Company, Arhaan provides the rare vantage point of upstream strategic counsel deeply informed by day-to-day delivery accountability.
              </p>
              <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                I’ve spent the last decade moving between strategy rooms and delivery calendars—building positioning for founders, running campaigns, shaping brands, and sitting with teams on the days the plan meets reality.
              </p>
              <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                That mix is the point. I’ve consulted for businesses across categories and markets, and I’ve also built and led the teams that execute: brand, content, digital, performance, and production.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <span>Initiate Strategic Dialogue</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
              </Link>
              <a
                href={SITE_METADATA.agencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-border text-foreground hover:bg-surface font-mono text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-2"
              >
                <span>The Bombay Digital Co. ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Singular Authoritative Founder Portrait */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface border border-border group">
              {/* Coordinate Pill */}
              <div
                aria-hidden="true"
                className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 flex items-center gap-2 bg-background/90 backdrop-blur-xs px-2.5 py-1 border border-border text-[10px] font-mono text-foreground font-bold"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
                <span>19.0760° N</span>
              </div>

              <Image
                src="/images/portrait.jpg"
                alt="Arhaan Shaikh - Documentary portrait in Mumbai studio"
                fill
                priority
                className="object-cover object-top grayscale contrast-125 brightness-95 group-hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 480px"
              />

              <div className="absolute inset-x-0 bottom-0 bg-background/95 backdrop-blur-xs p-4 border-t border-border flex items-center justify-between text-xs font-mono z-20">
                <div>
                  <div className="font-bold text-foreground">ARHAAN SHAIKH</div>
                  <div className="text-[11px] text-muted">CO-FOUNDER // TBDC</div>
                </div>
                <div className="text-right text-[10px] text-muted uppercase">
                  <div>PORTRAIT ARCHIVE</div>
                  <div className="text-foreground font-bold">MUMBAI // 2026</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-muted px-1">
              <span>FIELD REF // 01 FOUNDER VISUAL ANCHOR</span>
              <span>B&W AUTHORITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Visual Founder Timeline (ORIGIN ➔ EARLY WORK ➔ BUILDING ➔ TBDC ➔ TODAY) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-border bg-background">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>CHRONOLOGY // 5 CHAPTERS OF PRACTICE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-foreground leading-tight">
            The Arc of Practice<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-2"></span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted font-light leading-relaxed">
            From the relentless density of Bombay to boardroom strategy and multi-channel production delivery.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {timelineStages.map((stage, idx) => (
            <div
              key={stage.era}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              {/* Stage Identity */}
              <div className="lg:col-span-3 space-y-1 font-mono text-xs">
                <span className="text-[10px] text-muted uppercase tracking-widest block">
                  CHAPTER 0{idx + 1}
                </span>
                <span className="text-lg font-sans font-bold text-foreground block">
                  {stage.era}
                </span>
                <span className="text-muted text-[11px] block">
                  {stage.year}
                </span>
              </div>

              {/* Title & Narrative */}
              <div className="lg:col-span-7 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-foreground group-hover:opacity-80 transition-opacity">
                  {stage.title}
                </h3>
                <p className="text-base text-muted font-light leading-relaxed max-w-2xl">
                  {stage.description}
                </p>
              </div>

              {/* Tag / Status */}
              <div className="lg:col-span-2 flex justify-start lg:justify-end pt-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted border border-border px-3 py-1 bg-surface">
                  {stage.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03. Founder Philosophy (Monumental Editorial Statement with Whitespace) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-28 sm:py-36 border-b border-border bg-surface">
        <div className="max-w-4xl mx-auto space-y-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono uppercase tracking-widest text-muted">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>FOUNDER PHILOSOPHY // GROUNDED REALITY</span>
          </div>

          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-foreground leading-snug">
            “That’s why my advice is built for reality. It’s strategy your business can actually run, hire for, and sustain—not just something that looks clever on paper.”
          </blockquote>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
            <div className="flex items-center gap-3">
              <span className="font-bold text-foreground uppercase">ARHAAN SHAIKH</span>
              <span>—</span>
              <span>EXECUTIVE ADVISOR & FOUNDER</span>
            </div>
            <span>MUMBAI, INDIA · 2026</span>
          </div>
        </div>
      </section>

      {/* 04. TBDC Company Ecosystem (Arhaan ➔ TBDC ➔ Outcomes) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-border bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
              <span>COMPANY ECOSYSTEM // THE ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-foreground leading-tight">
              The execution engine behind the strategy<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-1"></span>
            </h2>
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
              A full-service team across brand, content, digital, and performance, trusted by 100+ brands to turn strategy into results.
            </p>

            {/* Ecosystem Directional Diagram */}
            <div className="p-6 bg-surface border border-border space-y-4 font-mono text-xs">
              <div className="text-muted text-[10px] uppercase tracking-wider">ECOSYSTEM VALUE CHAIN:</div>
              <div className="flex flex-col space-y-2 text-foreground font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                  <span>ARHAAN SHAIKH (Strategic Advisory)</span>
                </div>
                <div className="pl-4 text-muted text-[10px]">↓ Co-Founder</div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span>THE BOMBAY DIGITAL COMPANY</span>
                </div>
                <div className="pl-4 text-muted text-[10px]">↓ Integrated Specialists</div>
                <div className="flex items-center gap-2 text-muted">
                  <span>Brand · Content · Digital · Performance</span>
                </div>
                <div className="pl-4 text-muted text-[10px]">↓ Deployment</div>
                <div className="flex items-center gap-2 text-[var(--accent)] font-bold">
                  <span>VERIFIED COMMERCIAL OUTCOMES</span>
                </div>
              </div>
            </div>

            <a
              href={SITE_METADATA.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-foreground hover:opacity-70 transition-opacity"
            >
              <span>Visit thebombaydigitalcompany.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Column: Tactile Strategy Desk Photo */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface border border-border group">
              <Image
                src="/images/strategy-desk.jpg"
                alt="Tactile strategy materials on craftsman desk"
                fill
                className="object-cover object-center group-hover:scale-101 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-background/90 backdrop-blur-xs p-4 border-t border-border flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-foreground">STRATEGY DESK // TBDC HQ</span>
                <span className="text-[10px] text-muted uppercase">PHYSICAL & DIGITAL PRACTICE</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-muted px-1">
              <span>FIELD REF // 02 STRATEGY ARTIFACTS</span>
              <span>MUMBAI STUDIO</span>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Three Proven Credentials */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-border bg-background">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">
            EXPERIENCE GROUNDING
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-foreground">
            Strategy shaped by the days the plan meets reality<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-1"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {credentials.map((exp) => (
            <div key={exp.number} className="space-y-4">
              <span className="font-mono text-xs font-bold text-muted block">
                {exp.number} // CREDENTIAL
              </span>
              <h3 className="text-2xl font-sans font-bold tracking-tight text-foreground">
                {exp.title}
              </h3>
              <p className="text-sm text-muted font-light leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
          <span className="text-muted">READY TO INITIATE A STRATEGIC DIALOGUE?</span>
          <Link
            href="/contact"
            className="text-foreground hover:opacity-60 uppercase font-bold inline-flex items-center gap-1.5"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
