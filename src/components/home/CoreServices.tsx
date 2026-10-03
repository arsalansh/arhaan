import React from 'react';
import Link from 'next/link';
import { CORE_SERVICES } from '@/lib/content';
import { ArrowUpRight } from 'lucide-react';

export function CoreServices() {
  // Visual schematic diagrams for each lens (Craft, Endurance, Mechanical clarity)
  const renderDiagram = (index: number) => {
    switch (index) {
      case 0: // GTM Strategy: Wedge & Directional Vector
        return (
          <svg className="w-full h-12 stroke-current opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 200 48" fill="none">
            <line x1="10" y1="24" x2="170" y2="24" strokeWidth="1.5" strokeDasharray="3 3" />
            <polygon points="170,24 155,18 155,30" fill="currentColor" />
            <circle cx="30" cy="24" r="4" fill="var(--accent)" />
            <circle cx="90" cy="24" r="5" strokeWidth="1.5" />
            <circle cx="150" cy="24" r="6" strokeWidth="1.5" />
          </svg>
        );
      case 1: // Growth Strategy: Telemetry Curve & Unit Economics
        return (
          <svg className="w-full h-12 stroke-current opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 200 48" fill="none">
            <path d="M10 40 Q 60 38, 100 24 T 190 8" strokeWidth="1.5" />
            <circle cx="100" cy="24" r="3" fill="var(--accent)" />
            <circle cx="190" cy="8" r="4" fill="currentColor" />
            <line x1="10" y1="44" x2="190" y2="44" strokeWidth="0.75" strokeDasharray="2 2" />
          </svg>
        );
      case 2: // E-commerce & Q-Commerce: Velocity Funnel
        return (
          <svg className="w-full h-12 stroke-current opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 200 48" fill="none">
            <polygon points="10,8 190,8 140,40 60,40" strokeWidth="1.5" />
            <line x1="100" y1="8" x2="100" y2="40" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="100" cy="24" r="3.5" fill="var(--accent)" />
          </svg>
        );
      case 3: // Marketing Strategy: 60/25/15 Capital Allocation Split
        return (
          <svg className="w-full h-12 stroke-current opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 200 48" fill="none">
            <rect x="10" y="16" width="105" height="16" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
            <rect x="120" y="16" width="45" height="16" strokeWidth="1.5" />
            <rect x="170" y="16" width="20" height="16" strokeWidth="1.5" fill="var(--accent)" />
          </svg>
        );
      case 4: // Brand Positioning: Coordinate Matrix (Axis of Differentiation)
        return (
          <svg className="w-full h-12 stroke-current opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 200 48" fill="none">
            <line x1="100" y1="4" x2="100" y2="44" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="10" y1="24" x2="190" y2="24" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="150" cy="12" r="5" fill="var(--accent)" />
            <circle cx="50" cy="36" r="3" strokeWidth="1" />
          </svg>
        );
      case 5: // Digital Strategy: Systemic Connected Nodes
        return (
          <svg className="w-full h-12 stroke-current opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 200 48" fill="none">
            <circle cx="30" cy="24" r="6" strokeWidth="1.5" />
            <line x1="36" y1="24" x2="74" y2="24" strokeWidth="1" />
            <circle cx="80" cy="24" r="6" strokeWidth="1.5" />
            <line x1="86" y1="24" x2="124" y2="24" strokeWidth="1" />
            <circle cx="130" cy="24" r="6" strokeWidth="1.5" fill="var(--accent)" />
            <line x1="136" y1="24" x2="164" y2="24" strokeWidth="1" />
            <circle cx="170" cy="24" r="6" strokeWidth="1.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-t border-border bg-background">
      {/* Standalone Monumental Section Header */}
      <div className="max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
          <span>CAPABILITY ARCHITECTURE // SIX CONNECTED LENSES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
          Six lenses. <br className="hidden sm:block" />
          One business<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed max-w-2xl">
          Growth problems rarely fit neatly into one discipline. Brand positioning, performance economics, and digital architecture work as one connected system.
        </p>
      </div>

      {/* 60% Visual / 40% Text Services Architectural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {CORE_SERVICES.map((service, idx) => (
          <div 
            key={service.number} 
            className="bg-background p-6 sm:p-8 lg:p-10 flex flex-col justify-between group hover:bg-surface transition-colors min-h-[360px] relative overflow-hidden"
          >
            {/* Top Bar: Number + Diagram */}
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="font-bold text-foreground">0{idx + 1} // LENS</span>
                <span className="text-[10px] uppercase text-muted-light">ADVISORY SCOPE</span>
              </div>

              {/* Graphic Technical Vector Anchor (Craft & Density) */}
              <div className="py-2 text-foreground">
                {renderDiagram(idx)}
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-sans font-bold tracking-tight text-foreground group-hover:opacity-90">
                  {service.title}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>
            </div>

            {/* Bottom Deliverables as Annotated Chips */}
            <div className="pt-6 border-t border-border space-y-3 mt-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-light block">
                DELIVERABLE ARTIFACTS:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-foreground">
                {service.deliverables.slice(0, 3).map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-surface border border-border text-[10px] text-muted-dark group-hover:border-foreground/30 transition-colors">
                    — {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Sub-bar */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border text-xs font-mono text-muted">
        <div>CROSS-FUNCTIONAL INTEGRATION // UPSTREAM ➔ DOWNSTREAM</div>
        <Link
          href="/how-i-work"
          className="text-foreground hover:opacity-60 transition-opacity uppercase font-bold inline-flex items-center gap-1.5"
        >
          <span>Explore methodology breakdown</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
