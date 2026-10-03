import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function MeetArhaan() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-t border-border bg-background">
      {/* Standalone Monumental Section Header */}
      <div className="max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
          <span>EXECUTIVE ADVISOR // ARHAAN SHAIKH</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
          A decade on both <br className="hidden sm:block" />
          sides of growth<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
        </h2>
      </div>

      {/* Premium Magazine Spread Composition (50% Visual / 50% Editorial) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column (6 cols): Clean, Spacious Editorial Narrative */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-6 text-base sm:text-lg text-foreground font-light leading-relaxed">
            <p>
              I’ve spent the last decade moving between strategy rooms and delivery calendars—building positioning for founders, running campaigns, shaping brands, and sitting with teams on the days the plan meets reality.
            </p>
            <p className="text-muted">
              I’ve also built and led the teams that execute across brand, content, digital, performance, and production. So every plan is built for what a business can actually run, hire for, and sustain.
            </p>
          </div>

          {/* Quotation Callout */}
          <div className="p-6 bg-surface border-l-2 border-foreground space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
              OPERATIONAL REALITY
            </span>
            <p className="text-lg sm:text-xl font-sans font-bold text-foreground leading-snug">
              “That’s why my advice is built for reality. It’s strategy your business can actually run, hire for, and sustain—not just something that looks clever on paper.”
            </p>
          </div>

          <div className="pt-2 flex items-center gap-6 text-xs font-mono">
            <Link
              href="/about"
              className="px-6 py-3.5 bg-foreground text-background uppercase tracking-wider font-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span>About Arhaan</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/work"
              className="px-6 py-3.5 border border-border text-foreground hover:bg-surface uppercase tracking-wider font-bold inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Case studies ↗</span>
            </Link>
          </div>
        </div>

        {/* Right Column (6 cols): Large Monochrome Centerpiece Portrait of Arhaan (50% Visual Territory) */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface border border-border group shadow-sm">
            {/* Electric Yellow Geometric Shape Intervention */}
            <div
              aria-hidden="true"
              className="absolute top-5 right-5 z-30 flex items-center gap-2 bg-background/95 backdrop-blur-xs px-3 py-1.5 border border-border text-[10px] font-mono text-foreground font-bold"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]"></span>
              <span>ARCHIVE // FOUNDER 02</span>
            </div>

            {/* Subtle Film Grain Layer */}
            <div 
              aria-hidden="true" 
              className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none z-20 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />

            {/* Large Monochrome Portrait */}
            <Image
              src="/images/portrait.jpg"
              alt="Arhaan Shaikh - Strategic Advisor & Founder"
              fill
              className="object-cover object-top grayscale contrast-125 brightness-95 group-hover:scale-102 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 650px"
            />

            {/* Bottom Archival Metadata Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-background/95 backdrop-blur-xs p-4 border-t border-border flex items-center justify-between text-xs font-mono z-20">
              <div>
                <div className="font-bold text-foreground">ARHAAN SHAIKH</div>
                <div className="text-[11px] text-muted">A DECADE ON BOTH SIDES OF GROWTH</div>
              </div>
              <span className="text-[10px] uppercase text-muted-light font-bold">MUMBAI · 19.0760° N</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-muted px-1">
            <span>FOUNDER CENTERPIECE // 2026 ARCHIVE</span>
            <span>STRATEGY ROOMS & SHOOT FLOORS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
