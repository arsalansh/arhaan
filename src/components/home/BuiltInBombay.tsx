'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function BuiltInBombay() {
  const tenets = [
    { label: 'SPEED', note: 'Decisions calibrated to high-velocity demand cycles.' },
    { label: 'RESOURCEFULNESS', note: 'Solving true constraints before spending capital.' },
    { label: 'DENSITY & CONTRAST', note: 'Operating with clarity amidst extreme commercial complexity.' },
    { label: 'ENDURANCE & CRAFT', note: 'Systems engineered to outlast algorithm shifts.' },
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-border bg-background">
      {/* Chapter Pre-Header */}
      <div className="max-w-4xl mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
          <span>FOUNDER DNA // BOMBAY MENTALITY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
          Built in Bombay. <br />
          Designed for everywhere<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed max-w-2xl">
          Mumbai is a city where complexity is normal, constraints are real, things move quickly, and people learn to figure things out. That mentality informs how Arhaan approaches digital systems, commerce, products, and brands.
        </p>
      </div>

      {/* ONE Strong Architectural Craft Visual (Section 13 & 28) */}
      <div className="space-y-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[560px] overflow-hidden bg-surface border border-border group">
          <Image
            src="/images/bombay-mill-studio.jpg"
            alt="Restored industrial textile mill creative studio in Mumbai with collaborative design workbenches"
            fill
            priority={false}
            className="object-cover object-center group-hover:scale-101 transition-transform duration-1000"
            sizes="100vw"
          />
          <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-xs px-2.5 py-1 border border-border font-mono text-[10px] text-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
            <span>MUMBAI STUDIO · 19.0760° N</span>
          </div>

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-background/95 backdrop-blur-xs px-4 py-3 border border-border font-mono text-xs text-foreground flex flex-col space-y-0.5 max-w-sm">
            <span className="font-bold tracking-wider">THE WORKING GROUND</span>
            <span className="text-[10px] text-muted tracking-widest uppercase">
              INDUSTRIAL TEXTILE MILL ARCHIVE // MODERN DIGITAL WORKBENCH
            </span>
          </div>
        </div>

        {/* 4 Tenets Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {tenets.map((t, idx) => (
            <div key={t.label} className="p-6 bg-background space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span>0{idx + 1}</span>
                <span className="text-[10px] text-[var(--accent)] uppercase font-bold">DNA</span>
              </div>
              <h3 className="text-base font-sans font-bold text-foreground">
                {t.label}
              </h3>
              <p className="text-xs text-muted font-light leading-relaxed">
                {t.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
