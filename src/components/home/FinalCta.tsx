'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_METADATA } from '@/lib/content';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export function FinalCta() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_METADATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-28 sm:py-36 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>NEXT CHAPTER // STRATEGIC INITIATION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-sans font-bold tracking-tighter text-foreground leading-[0.96]">
            Have an ambitious <br />
            problem to solve?<span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[var(--accent)] ml-2 sm:ml-3 align-baseline"></span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted font-light max-w-2xl leading-relaxed pt-2">
            Every growth story starts with one honest conversation. Let’s build the system.
          </p>
        </div>

        {/* Direct Channel Access Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {/* Email */}
          <div className="p-6 bg-surface flex flex-col justify-between min-h-[120px] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-muted">
              <span>01 DIRECT DISPATCH</span>
              <button
                onClick={copyEmail}
                className="text-[11px] text-foreground hover:opacity-60 cursor-pointer flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3 text-[var(--accent)]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <a
              href={`mailto:${SITE_METADATA.email}`}
              className="text-sm font-mono text-foreground font-medium truncate hover:opacity-70"
            >
              {SITE_METADATA.email}
            </a>
          </div>

          {/* Calendar */}
          <div className="p-6 bg-surface flex flex-col justify-between min-h-[120px] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-muted">
              <span>02 CALENDAR</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
            </div>
            <a
              href={SITE_METADATA.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-sans font-bold text-foreground hover:opacity-70"
            >
              Schedule 30-Min Call ↗
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-6 bg-surface flex flex-col justify-between min-h-[120px] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-muted">
              <span>03 LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
            </div>
            <a
              href={SITE_METADATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-sans font-bold text-foreground hover:opacity-70"
            >
              Arhaan Shaikh ↗
            </a>
          </div>

          {/* WhatsApp */}
          <div className="p-6 bg-surface flex flex-col justify-between min-h-[120px] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-muted">
              <span>04 RAPID CHANNEL</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
            </div>
            <a
              href={SITE_METADATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-sans font-bold text-foreground hover:opacity-70"
            >
              WhatsApp Founder Line ↗
            </a>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-muted">
          <span>THE BOMBAY DIGITAL COMPANY · MUMBAI HQ</span>
          <Link
            href="/contact"
            className="text-foreground hover:opacity-60 font-bold uppercase inline-flex items-center gap-1.5"
          >
            <span>Open Consultation Brief</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
