import React from 'react';
import Link from 'next/link';
import { PROCESS_STEPS } from '@/lib/content';
import { ArrowUpRight, ArrowRight, CheckSquare } from 'lucide-react';

export function ProcessRoadmap() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-t border-border bg-background">
      {/* Standalone Monumental Section Header */}
      <div className="max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
          <span>SEQUENTIAL DELIVERY PIPELINE // FOUR DISCIPLINARY STAGES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
          Clarity, built <br className="hidden sm:block" />
          in sequence<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed max-w-2xl">
          Strategy is not an ungrounded deck of ideas. It is a disciplined process for deciding what matters, what does not, and what happens next.
        </p>
      </div>

      {/* Sequential Directional Pipeline Grid (Speed, Directional Flow, Endurance) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {PROCESS_STEPS.map((step, idx) => (
          <div 
            key={step.number} 
            className="bg-background p-6 sm:p-8 lg:p-10 flex flex-col justify-between group hover:bg-surface transition-colors min-h-[380px] relative"
          >
            {/* Top Phase Header with Directional Arrow */}
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="font-bold text-foreground">PHASE {step.number}</span>
                {idx < 3 ? (
                  <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:translate-x-1 group-hover:text-foreground transition-all" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
                )}
              </div>

              {/* Oversized Number + Title */}
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-sans font-bold tracking-tighter text-foreground">
                  {step.title}
                </div>
                <div className="text-[11px] font-mono text-muted uppercase tracking-wider">
                  {step.subtitle}
                </div>
              </div>

              {/* Core Description */}
              <p className="text-sm text-foreground font-light leading-relaxed pt-2">
                {step.description}
              </p>
            </div>

            {/* Deliverable Artifact Tag (Visual Callout) */}
            <div className="pt-6 border-t border-border mt-8 space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted">
                <CheckSquare className="w-3 h-3 text-[var(--accent)]" />
                <span>AUDITED DELIVERABLE</span>
              </div>
              <div className="p-3 bg-surface border border-border text-xs font-mono font-medium text-foreground leading-snug">
                {step.deliverable}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Sub-bar */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border text-xs font-mono text-muted">
        <div>STAGE-GATE PROGRESSION // NO PREMATURE CAPITAL COMMITMENT</div>
        <Link
          href="/how-i-work"
          className="text-foreground hover:opacity-60 transition-opacity uppercase font-bold inline-flex items-center gap-1.5"
        >
          <span>Inspect 30-Day Sprint & Advisory Formats</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
