import React from 'react';
import Link from 'next/link';
import { SITE_METADATA } from '@/lib/content';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-t border-border bg-background text-foreground">
      {/* Big Constructivist Statement Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-muted block">
            Let’s talk
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
            Have a business problem <br />
            worth solving<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-1"></span>
          </h2>
          <p className="text-base sm:text-lg text-muted font-light leading-relaxed max-w-xl pt-2">
            Every growth story starts with one honest conversation. Let’s look at what is really holding you back before you commit more spend.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between space-y-4 pt-4 lg:pt-8">
          <Link
            href="/contact"
            className="px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-85 transition-opacity inline-flex items-center gap-2"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a
            href={SITE_METADATA.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono uppercase tracking-wider text-muted hover:text-foreground transition-colors"
          >
            Book 30-min strategy call ↗
          </a>
        </div>
      </div>

      {/* Directory Columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border text-xs font-mono">
        <div className="space-y-2">
          <div className="text-muted uppercase text-[10px] tracking-wider">Practice</div>
          <div className="text-foreground font-bold">Arhaan Shaikh</div>
          <div className="text-muted">Business Consultant & Growth Strategist</div>
        </div>

        <div className="space-y-2">
          <div className="text-muted uppercase text-[10px] tracking-wider">Agency Engine</div>
          <a
            href={SITE_METADATA.agencyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline block font-bold"
          >
            The Bombay Digital Co. ↗
          </a>
          <div className="text-muted">Brand · Content · Digital · Performance</div>
        </div>

        <div className="space-y-2">
          <div className="text-muted uppercase text-[10px] tracking-wider">Dispatch</div>
          <div>
            <a href={`mailto:${SITE_METADATA.email}`} className="text-foreground hover:underline block">
              {SITE_METADATA.email}
            </a>
          </div>
          <div>
            <a href={SITE_METADATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
              WhatsApp ↗
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-muted uppercase text-[10px] tracking-wider">Location</div>
          <div className="text-foreground">{SITE_METADATA.coordinates}</div>
          <div className="text-muted">72.8777° E</div>
        </div>
      </div>

      {/* Sub-bar */}
      <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono text-muted">
        <div>
          © 2026 Arhaan Shaikh. All rights reserved. Mumbai, India.
        </div>
        <div>
          MINIMALIST CONSTRUCTIVIST SYSTEM // AIRY NEGATIVE SPACE
        </div>
      </div>
    </footer>
  );
}
