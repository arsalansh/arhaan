import React from 'react';
import { METRICS } from '@/lib/content';

export function MetricsBanner() {
  return (
    <section className="w-full border-t border-border bg-background relative overflow-hidden">
      {/* Background Architectural Grid Texture (Density & Endurance) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-16 sm:py-20 lg:py-24">
        {/* Section Telemetry Bar */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-border text-[11px] font-mono text-muted uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
            <span>DATA TELEMETRY // VERIFIED FOUNDER SCALE</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-muted-light">
            <span>AUDITED METRIC TRACKS</span>
            <span>•</span>
            <span>2016 ➔ 2026 CONTINUOUS PRACTICE</span>
          </div>
        </div>

        {/* Monumental Kinetic Data Grid (60% Visual Weight / 40% Text) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {METRICS.map((metric, idx) => (
            <div 
              key={metric.value} 
              className="bg-background p-6 sm:p-8 lg:p-10 flex flex-col justify-between group hover:bg-surface transition-colors min-h-[220px] relative overflow-hidden"
            >
              {/* Top Tag & Directional Coordinate */}
              <div className="flex items-center justify-between text-xs font-mono text-muted group-hover:text-foreground transition-colors">
                <span className="font-bold">0{idx + 1} // TRACK</span>
                <span className="text-[10px] opacity-40 uppercase">METRIC</span>
              </div>

              {/* Massive Monumental Metric Callout (Ambition & Contrast) */}
              <div className="my-6">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-sans font-bold tracking-tighter text-foreground leading-none flex items-baseline">
                  <span>{metric.value}</span>
                  <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--accent)] ml-1.5 align-baseline opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>
              </div>

              {/* Supporting Editorial Information (Labels & Detail) */}
              <div className="space-y-1 pt-4 border-t border-border">
                <div className="text-xs sm:text-sm font-sans font-bold text-foreground tracking-tight">
                  {metric.label}
                </div>
                <div className="text-[11px] font-mono text-muted leading-relaxed">
                  {metric.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
