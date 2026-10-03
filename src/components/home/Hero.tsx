'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_METADATA } from '@/lib/content';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const disciplines = [
    { number: '01', label: 'Go-to-market strategy', href: '/how-i-work' },
    { number: '02', label: 'Growth strategy & diagnostics', href: '/how-i-work' },
    { number: '03', label: 'E-commerce & quick commerce', href: '/how-i-work' },
    { number: '04', label: 'Marketing strategy & media split', href: '/how-i-work' },
    { number: '05', label: 'Brand positioning & narrative', href: '/how-i-work' },
    { number: '06', label: 'Full-funnel digital delivery', href: 'https://thebombaydigitalcompany.com' },
  ];

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 pt-8 pb-20 border-b border-border">
      {/* Top Pre-Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border text-xs font-mono text-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
          <span className="uppercase text-foreground font-semibold">ARHAAN SHAIKH</span>
          <span className="text-muted-light">//</span>
          <span className="uppercase">CO-FOUNDER, THE BOMBAY DIGITAL COMPANY</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden sm:inline">{SITE_METADATA.coordinates}</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-foreground">Q2/Q3 ADVISORY: ACTIVE</span>
        </div>
      </div>

      {/* Monumental Headline at the Top (Commanding Standalone Typography) */}
      <div className="pt-10 pb-12 sm:pt-14 sm:pb-16 max-w-6xl">
        <motion.h1 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-sans font-bold tracking-tighter text-foreground leading-[0.94]"
        >
          Turning business <br className="hidden sm:block" />
          problems into growth<span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-[var(--accent)] ml-2 sm:ml-3 align-baseline"></span>
        </motion.h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted font-light max-w-3xl leading-snug">
          Decisions before deliverables. Upstream strategic advisory backed by full-funnel digital execution through The Bombay Digital Company.
        </p>
      </div>

      {/* Balanced 2-Column Editorial Grid (Left: Thesis & Disciplines | Right: Cinematic Portrait) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 border-t border-border">
        {/* Left Column (7 cols): Editorial Narrative + Structured Advisory Disciplines */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
              ADVISORY THESIS // ROOT-CAUSE RESOLUTION
            </span>
            <p className="text-base sm:text-lg text-foreground font-light leading-relaxed">
              In 10+ years across strategy rooms and delivery calendars, Arhaan works directly with founders and leadership teams to diagnose what is really holding growth back—then builds the exact go-to-market, e-commerce, and marketing engine required to move forward sustainably.
            </p>
          </div>

          {/* Structured Advisory Disciplines Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-muted pb-1">
              <span>CORE ADVISORY DISCIPLINES</span>
              <span>INDEX // 01–06</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              {disciplines.map((item) => (
                <Link
                  key={item.number}
                  href={item.href}
                  className="bg-background hover:bg-surface p-4 sm:p-5 flex flex-col justify-between group transition-colors min-h-[96px]"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-muted group-hover:text-foreground">
                    <span>{item.number}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-sm font-sans font-bold text-foreground group-hover:opacity-90 pt-2">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/work"
              className="px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <span>View Selected Work</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
            </Link>

            <Link
              href="/about"
              className="px-6 py-3.5 border border-border text-foreground hover:bg-surface font-mono text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-2"
            >
              <span>About Arhaan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/contact"
              className="px-4 py-3.5 text-muted hover:text-foreground font-mono text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-1.5"
            >
              <span>Start Conversation →</span>
            </Link>
          </div>
        </div>

        {/* Right Column (5 cols): Cinematic 35mm Founder Portrait with Technical Annotations & Yellow Accent */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col space-y-4"
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface border border-border group">
            {/* Electric Yellow Geometric Accent Intervention */}
            <div
              aria-hidden="true"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-30 flex items-center gap-2 bg-background/90 backdrop-blur-xs px-2.5 py-1 border border-border text-[10px] font-mono text-foreground font-bold"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"></span>
              <span>19.0760° N</span>
            </div>

            {/* Subtle Film Grain Layer */}
            <div 
              aria-hidden="true" 
              className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none z-20 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />

            {/* High-Contrast 35mm Editorial Portrait */}
            <Image
              src="/images/portrait.jpg"
              alt="Arhaan Shaikh - Business Consultant & Growth Strategist"
              fill
              priority
              className="object-cover object-top grayscale contrast-125 brightness-95 group-hover:scale-102 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 480px"
            />

            {/* In-Photo Bottom Archival Metadata Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-background/95 backdrop-blur-xs p-4 border-t border-border flex items-center justify-between text-xs font-mono z-20">
              <div>
                <div className="font-bold text-foreground">ARHAAN SHAIKH</div>
                <div className="text-[11px] text-muted">FOUNDER // THE BOMBAY DIGITAL CO.</div>
              </div>
              <div className="text-right text-[10px] text-muted uppercase">
                <div>35MM ARCHIVE</div>
                <div className="text-foreground font-bold">MUMBAI // 2026</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-muted px-1">
            <span>FIELD REF // 01 FOUNDER PORTRAIT</span>
            <span>STRATEGY & DELIVERY</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Credibility Strip (4 Columns) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-border">
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-sans font-bold text-foreground">10+ Years</div>
          <div className="text-xs font-mono text-muted">Advisory & Delivery Practice</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-sans font-bold text-foreground">₹100Cr+</div>
          <div className="text-xs font-mono text-muted">Commercial Value Scaled</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-sans font-bold text-foreground">40+ Audits</div>
          <div className="text-xs font-mono text-muted">Growth Diagnostic Engagements</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-sans font-bold text-foreground">Dual Capability</div>
          <div className="text-xs font-mono text-muted">Upstream Advisory + TBDC Agency</div>
        </div>
      </div>
    </section>
  );
}
