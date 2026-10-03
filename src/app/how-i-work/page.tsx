'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROCESS_STEPS, CORE_SERVICES } from '@/lib/content';
import { ArrowUpRight, ArrowRight, Check, Compass, Cpu, Target, LineChart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function HowIWorkPage() {
  const [activeCapability, setActiveCapability] = useState<number>(0);

  const steps = [
    { number: '01', label: 'Listen', sub: 'Founding Context & Metrics' },
    { number: '02', label: 'Audit', sub: 'Diagnostic & Value Leaks' },
    { number: '03', label: 'Strategize', sub: 'Positioning & Roadmap' },
    { number: '04', label: 'Execute', sub: 'Delivery & Governance' },
  ];

  const engagementModels = [
    {
      name: "Strategic Sprint",
      duration: "30 Days",
      bestFor: "Brands needing urgent root-cause diagnostic clarity, GTM blueprint, or pre-scale stress testing.",
      deliverable: "Diagnostic Audit Report + 90-Day Execution Roadmap + Margin & Unit Economics Model",
    },
    {
      name: "Quarterly Growth Advisory",
      duration: "3 - 6 Months",
      bestFor: "Scaling founders and CMOs seeking ongoing strategic governance, budget allocation, and creative steering.",
      deliverable: "Bi-weekly strategy steering sessions + Channel telemetry audits + Creative testing frameworks",
    },
    {
      name: "Full-Funnel Strategic Delivery",
      duration: "Ongoing",
      bestFor: "Brands requiring both executive advisory and complete execution across brand, content, tech & media.",
      deliverable: "End-to-end strategic governance + full multidisciplinary execution via The Bombay Digital Company.",
    },
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 01. Editorial Methodology Hero Section */}
      <section className="relative w-full px-6 md:px-12 lg:px-16 pt-8 pb-16 border-b border-border">
        {/* Pre-header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span className="uppercase text-foreground font-semibold">ARHAAN SHAIKH</span>
            <span className="text-muted-light">//</span>
            <span className="uppercase">ADVISORY METHODOLOGY & CAPABILITY SYSTEM</span>
          </div>
          <div className="flex items-center gap-6">
            <span>UPSTREAM REASONING</span>
            <span>•</span>
            <span className="text-foreground">FOUR SEQUENTIAL PHASES</span>
          </div>
        </div>

        {/* Monumental Headline */}
        <div className="pt-10 pb-12 sm:pt-14 sm:pb-16 max-w-6xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-sans font-bold tracking-tighter text-foreground leading-[0.94]">
            Roadmap <br className="hidden sm:block" />
            before spend<span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-[var(--accent)] ml-2 sm:ml-3 align-baseline"></span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted font-light max-w-3xl leading-snug">
            Strategy is not a deck of ideas. It is a disciplined process for deciding what matters, what does not, and what happens next. Every engagement begins upstream of marketing.
          </p>
        </div>

        {/* 2-Column Balanced Split: Narrative & Visual Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 border-t border-border">
          {/* Left Column (7 cols): Editorial Principles + 4 Sequence Blocks */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
                SEQUENTIAL ADVISORY DISCIPLINE // UPSTREAM REASONING
              </span>
              <p className="text-base sm:text-lg text-foreground font-light leading-relaxed">
                The work connects business ambition to customer reality, so execution has a reason to exist. Most agencies begin by spending media budget. We begin by interrogating product-market fit, unit economics, and operational constraints to ensure capital is never squandered.
              </p>
            </div>

            {/* Structured 4-Phase Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              {steps.map((st) => (
                <div
                  key={st.number}
                  className="bg-background p-4 sm:p-5 flex flex-col justify-between min-h-[96px]"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-muted">
                    <span className="font-bold text-foreground">{st.number}</span>
                    <span className="text-[10px] uppercase text-muted-light">PHASE</span>
                  </div>
                  <div>
                    <h3 className="text-base font-sans font-bold text-foreground">
                      {st.label}
                    </h3>
                    <p className="text-xs font-mono text-muted pt-0.5">
                      {st.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <span>Initiate Diagnostic Audit</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Strategy Desk Working Visual */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface border border-border group">
              <div
                aria-hidden="true"
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-3.5 h-3.5 rounded-full bg-[var(--accent)] z-20 shadow-sm"
              ></div>
              <Image
                src="/images/strategy-desk.jpg"
                alt="Executive strategy desk materials and working documents"
                fill
                priority
                className="object-cover object-center group-hover:scale-101 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-background/90 backdrop-blur-xs p-3.5 border-t border-border flex items-center justify-between text-xs font-mono">
                <div>
                  <div className="font-bold text-foreground">WORKING SESSIONS</div>
                  <div className="text-[11px] text-muted">PHYSICAL STRATEGY ARTIFACTS</div>
                </div>
                <span className="text-[10px] uppercase text-muted-light">MUMBAI</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-muted px-1">
              <span>FIELD REF // 03 METHODOLOGY TOOLS</span>
              <span>TACTILE WORK</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. The 4 Sequential Phases Breakdown */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-border bg-background">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>PROCESS ARCHITECTURE // CLARITY IN SEQUENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-foreground leading-tight">
            How the work unfolds<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-2"></span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted font-light leading-relaxed">
            Every step builds a verified foundation for the next. No guesswork, no premature scaling.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              id={step.title.toLowerCase()}
              className="py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Col 1: Phase Number & Identity */}
              <div className="lg:col-span-4 space-y-2">
                <span className="font-mono text-4xl sm:text-5xl font-bold text-foreground block tracking-tight">
                  {step.number}
                </span>
                <h3 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <div className="text-xs font-mono text-muted uppercase tracking-wider">
                  {step.subtitle}
                </div>
              </div>

              {/* Col 2: Description, Activities & Audited Deliverable */}
              <div className="lg:col-span-8 space-y-6">
                <p className="text-lg sm:text-xl text-foreground font-light leading-relaxed">
                  {step.description}
                </p>

                <div className="p-6 bg-surface border border-border space-y-3">
                  <span className="text-[11px] font-mono uppercase text-muted block tracking-wider">
                    Key Activities:
                  </span>
                  <ul className="space-y-2 font-mono text-xs text-foreground">
                    {step.activities.map((act) => (
                      <li key={act} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] font-bold">—</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[var(--accent)]" />
                    <span className="text-muted uppercase">AUDITED DELIVERABLE:</span>
                    <strong className="text-foreground">{step.deliverable}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03. Capabilities System (Rule 18: Large Typographic System + Technical Diagrams) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-border bg-surface">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>CAPABILITY SYSTEM // 06 STRATEGIC LENSES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-foreground leading-tight">
            Six lenses. One business.<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-2"></span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted font-light leading-relaxed">
            Connected growth disciplines unified under a single commercial logic.
          </p>
        </div>

        {/* Large Typographic System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols): Interactive Capability Selector */}
          <div className="lg:col-span-5 divide-y divide-border border-y border-border">
            {CORE_SERVICES.map((service, idx) => (
              <button
                key={service.number}
                onClick={() => setActiveCapability(idx)}
                className={`w-full py-5 text-left transition-colors flex items-center justify-between cursor-pointer px-2 ${
                  activeCapability === idx ? 'bg-background font-bold' : 'hover:bg-background/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-muted">{service.number}</span>
                  <span className="text-base sm:text-lg font-sans text-foreground">{service.title}</span>
                </div>
                {activeCapability === idx && (
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Right Column (7 cols): Active Capability Detail & Technical Verification */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-background border border-border space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-muted border-b border-border pb-4">
              <span>LENS {CORE_SERVICES[activeCapability].number} // DIAGNOSTIC SCOPE</span>
              <span className="text-[var(--accent)] font-bold">VERIFIED PRACTICE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-sans font-bold text-foreground">
              {CORE_SERVICES[activeCapability].title}
            </h3>

            <p className="text-base text-foreground font-light leading-relaxed">
              {CORE_SERVICES[activeCapability].shortDesc}
            </p>

            <p className="text-sm text-muted font-light leading-relaxed">
              {CORE_SERVICES[activeCapability].extendedScope}
            </p>

            <div className="p-4 bg-surface border-l-2 border-foreground space-y-1">
              <div className="text-[10px] font-mono uppercase text-muted tracking-wider">DIAGNOSTIC QUERY:</div>
              <div className="text-sm font-medium text-foreground italic">
                “{CORE_SERVICES[activeCapability].diagnosticQuery}”
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono uppercase text-muted block">KEY DELIVERABLES:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CORE_SERVICES[activeCapability].deliverables.map((del) => (
                  <div key={del} className="p-2.5 bg-surface border border-border text-xs font-mono text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Three Ways to Engage */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-border bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-wider text-muted block mb-2">
              ENGAGEMENT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-foreground">
              Three ways to engage<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-1"></span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed max-w-xl">
              Structured for businesses at inflection points—whether you require pure strategic clarity or synchronized multidisciplinary execution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {engagementModels.map((model, idx) => (
            <div key={model.name} className="flex flex-col justify-between space-y-6 p-6 sm:p-8 bg-surface border border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-muted border-b border-border pb-3">
                  <span>0{idx + 1}</span>
                  <span className="text-foreground font-bold">{model.duration}</span>
                </div>
                <h3 className="text-2xl font-sans font-bold tracking-tight text-foreground">
                  {model.name}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {model.bestFor}
                </p>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <div className="text-xs font-mono text-foreground font-medium">
                  {model.deliverable}
                </div>
                <Link
                  href={`/contact?engagement=${encodeURIComponent(model.name)}`}
                  className="text-xs font-mono uppercase tracking-wider text-foreground hover:opacity-60 transition-opacity inline-flex items-center gap-1.5 font-bold pt-2"
                >
                  <span>Inquire on this format</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HowIWorkPage;
