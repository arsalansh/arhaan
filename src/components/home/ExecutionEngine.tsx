import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_METADATA } from '@/lib/content';
import { ArrowUpRight, Cpu, Layers, Film, ShoppingCart, BarChart3 } from 'lucide-react';

export function ExecutionEngine() {
  const pillars = [
    { number: "01", name: "Brand", desc: "Positioning systems, identity, packaging architecture.", icon: Layers },
    { number: "02", name: "Content", desc: "Film production, social reach, editorial storytelling.", icon: Film },
    { number: "03", name: "Digital", desc: "Shopify Plus engineering, web platforms, conversion UX.", icon: ShoppingCart },
    { number: "04", name: "Performance", desc: "Full-funnel media buying, creative testing, attribution.", icon: BarChart3 },
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-t border-border bg-background relative overflow-hidden">
      {/* Standalone Monumental Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>IN-HOUSE MULTIDISCIPLINARY DELIVERY AGENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
            The Bombay <br className="hidden sm:block" />
            Digital Company<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed">
            A full-service team across brand, content, digital, and performance, trusted by 100+ brands to turn strategy into results.
          </p>
        </div>

        <a
          href={SITE_METADATA.agencyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 bg-foreground text-background text-xs font-mono uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2 shrink-0"
        >
          <span>Visit thebombaydigitalcompany.com</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 60% Visual / 40% Text Architectural Composition (Mechanical Schematic Anchor + 4 Pillars) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Visual Anchor (7 cols): Imposing Mechanical Blueprint (Endurance, Craft, Density) */}
        <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] bg-surface border border-border overflow-hidden group">
          <Image
            src="/images/execution-engine-schematic.jpg"
            alt="The Bombay Digital Company Execution Engine Schematic"
            fill
            className="object-cover object-center grayscale contrast-125 opacity-90 group-hover:scale-102 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 700px"
          />

          {/* Blueprint Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

          {/* Technical Telemetry Annotations (Density & Craft) */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 font-mono text-[10px] uppercase bg-background/90 backdrop-blur-xs px-3 py-1.5 border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
            <span>ENGINE ARCHITECTURE // SYNCHRONIZED EXECUTION</span>
          </div>

          <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 p-4 bg-background/95 backdrop-blur-xs border border-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div>
              <div className="font-bold text-foreground">THE BOMBAY DIGITAL CO.</div>
              <div className="text-[11px] text-muted">FOUNDED BY ARHAAN SHAIKH · 100+ BRANDS</div>
            </div>
            <span className="text-[10px] uppercase px-2 py-0.5 bg-surface border border-border text-muted font-bold">
              EST. MUMBAI
            </span>
          </div>
        </div>

        {/* 4 Pillars Operating Grid (5 cols) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-px bg-border border border-border">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-background p-6 flex flex-col justify-between group hover:bg-surface transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono text-muted pb-3">
                  <span className="font-bold text-foreground">0{pillar.number} // PILLAR</span>
                  <Icon className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-sans font-bold text-foreground">
                    {pillar.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
