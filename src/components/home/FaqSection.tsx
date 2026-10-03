'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQS, SITE_METADATA } from '@/lib/content';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Mail, Plus, Minus } from 'lucide-react';

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-t border-border bg-background">
      {/* Standalone Monumental Section Header */}
      <div className="max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
          <span>ENGAGEMENT PROTOCOL // FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
          Before we start a <br className="hidden sm:block" />
          conversation<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed max-w-2xl">
          Clear answers regarding advisory structure, fees, and execution through The Bombay Digital Company.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (4 cols): Direct Advisory Contact Card Anchor */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 sm:p-8 bg-surface border border-border space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
              ADVISORY TOUCHPOINTS
            </span>
            <div className="space-y-2">
              <h3 className="text-xl font-sans font-bold text-foreground">
                Have an unaddressed question?
              </h3>
              <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                Reach out directly to Arhaan for confidential questions regarding scope, NDA terms, or tailored sprint timelines.
              </p>
            </div>

            <div className="pt-4 border-t border-border space-y-3 text-xs font-mono">
              <a
                href={`mailto:${SITE_METADATA.email}`}
                className="w-full py-3 px-4 bg-background border border-border text-foreground hover:bg-surface transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-muted" />
                  <span>Confidential Inbox</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={SITE_METADATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-background border border-border text-foreground hover:bg-surface transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-muted" />
                  <span>WhatsApp Direct</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column (8 cols): FAQ Accordion Items */}
        <div className="lg:col-span-8 divide-y divide-border border-y border-border">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.number} className="py-6 sm:py-8">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start justify-between gap-6 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm font-bold text-muted group-hover:text-foreground pt-1">
                      {faq.number}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-sans font-bold text-foreground tracking-tight group-hover:opacity-70 transition-opacity">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="text-muted group-hover:text-foreground shrink-0 pt-1">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 pl-8 sm:pl-10 text-sm sm:text-base text-muted font-light leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
