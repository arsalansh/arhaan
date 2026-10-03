'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DIAGNOSTIC_QUESTIONS } from '@/lib/content';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';

export function DiagnosticGrid() {
  const [activeQuestionId, setActiveQuestionId] = useState<string>("diag-1");

  const activeQuestion = DIAGNOSTIC_QUESTIONS.find(q => q.id === activeQuestionId) || DIAGNOSTIC_QUESTIONS[0];

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-t border-border bg-background">
      {/* Standalone Monumental Section Header */}
      <div className="max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
          <span>SYSTEMIC ROOT-CAUSE DIAGNOSIS // 08 CRITICAL INQUIRIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
          Growth starts with clarity. <br className="hidden sm:block" />
          Clarity starts here<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed max-w-2xl">
          Whether you’re starting or scaling, the right questions come first. Select any inquiry below to inspect the commercial diagnosis and operational prescription.
        </p>
      </div>

      {/* 40% Text / 60% Visual Experience Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (5 cols): Interactive Diagnostic Telemetry Visual Anchor */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div className="p-6 sm:p-8 bg-surface border border-border relative overflow-hidden group">
            {/* Visual Header / Diagnostic Readout */}
            <div className="flex items-center justify-between pb-6 border-b border-border text-xs font-mono text-muted">
              <span className="flex items-center gap-2 text-foreground font-bold">
                <Activity className="w-3.5 h-3.5 text-[var(--accent)]" />
                ACTIVE DIAGNOSTIC READOUT
              </span>
              <span className="text-[10px] uppercase text-muted-light">REAL-TIME</span>
            </div>

            {/* Visual Vector / Category Focus */}
            <div className="py-6 space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-4xl sm:text-5xl font-sans font-bold text-foreground">
                  {activeQuestion.number}
                </span>
                <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-background border border-border text-foreground font-bold">
                  {activeQuestion.category}
                </span>
              </div>

              <div className="text-base sm:text-lg font-sans font-bold text-foreground leading-snug">
                {activeQuestion.question}
              </div>
            </div>

            {/* Diagnostic Data Callouts */}
            <div className="space-y-4 pt-4 border-t border-border text-xs font-mono">
              <div className="p-3.5 bg-background border border-border space-y-1">
                <div className="flex items-center gap-1.5 text-muted uppercase text-[10px] font-bold">
                  <AlertCircle className="w-3 h-3 text-[var(--accent)]" />
                  <span>COMMERCIAL ROOT CAUSE</span>
                </div>
                <p className="text-foreground font-light leading-relaxed text-xs">
                  {activeQuestion.diagnosis}
                </p>
              </div>

              <div className="p-3.5 bg-background border border-border space-y-1">
                <div className="flex items-center gap-1.5 text-muted uppercase text-[10px] font-bold">
                  <CheckCircle2 className="w-3 h-3 text-foreground" />
                  <span>STRATEGIC PRESCRIPTION</span>
                </div>
                <p className="text-foreground font-light leading-relaxed text-xs">
                  {activeQuestion.strategicAction}
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-border flex items-center justify-between">
              <Link
                href={`/contact?topic=${encodeURIComponent(activeQuestion.question)}`}
                className="w-full py-3 bg-foreground text-background text-xs font-mono uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <span>Discuss with Arhaan</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-muted px-1">
            <span>INDEX // 08 STRATEGIC VECTORS</span>
            <span>CLICK TO SWITCH CONSOLE</span>
          </div>
        </div>

        {/* Right Column (7 cols): The 8 Diagnostic Inquiries Console */}
        <div className="lg:col-span-7 divide-y divide-border border-y border-border">
          {DIAGNOSTIC_QUESTIONS.map((q) => {
            const isSelected = activeQuestionId === q.id;

            return (
              <div
                key={q.id}
                onClick={() => setActiveQuestionId(q.id)}
                className={`py-6 sm:py-7 transition-all cursor-pointer group ${
                  isSelected ? 'bg-surface/50 pl-4 sm:pl-6 border-l-2 border-foreground' : 'hover:bg-surface/30'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className={`font-mono text-xs sm:text-sm font-bold pt-1 transition-colors ${
                      isSelected ? 'text-[var(--accent)]' : 'text-muted group-hover:text-foreground'
                    }`}>
                      {q.number}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                          {q.category}
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
                        )}
                      </div>
                      <h3 className={`text-lg sm:text-xl font-sans font-bold tracking-tight transition-colors ${
                        isSelected ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
                      }`}>
                        {q.question}
                      </h3>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-muted group-hover:text-foreground shrink-0 pt-1">
                    {isSelected ? 'ACTIVE ➔' : 'SELECT'}
                  </div>
                </div>

                {/* Inline preview on mobile */}
                <div className="block lg:hidden mt-4 pl-8 sm:pl-10 space-y-3">
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3 pt-2 text-xs"
                      >
                        <div className="p-3 bg-surface border border-border">
                          <strong className="font-mono uppercase text-muted block mb-1">Root Cause:</strong>
                          <span className="text-foreground">{q.diagnosis}</span>
                        </div>
                        <div className="p-3 bg-surface border border-border">
                          <strong className="font-mono uppercase text-muted block mb-1">Prescription:</strong>
                          <span className="text-foreground">{q.strategicAction}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
