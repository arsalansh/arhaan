'use client';

import React, { useState } from 'react';
import { TESTIMONIALS } from '@/lib/content';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex] || TESTIMONIALS[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-t border-border bg-background">
      {/* Chapter Pre-Header */}
      <div className="max-w-4xl mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
          <span>CLIENT PERSPECTIVE // VERIFIED TESTIMONY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
          Client perspective<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
        </h2>
      </div>

      {/* Large Editorial Quote (One Quote at a Time, Section 23: No Cards) */}
      <div className="border-y border-border py-16 sm:py-24 space-y-12">
        <div className="flex items-center justify-between text-xs font-mono text-muted">
          <span className="font-bold text-foreground">
            RECORD 0{currentIndex + 1} OF 0{TESTIMONIALS.length}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous testimony"
              className="p-2 border border-border hover:bg-surface text-foreground transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimony"
              className="p-2 border border-border hover:bg-surface text-foreground transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <blockquote className="max-w-5xl">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-light text-foreground leading-[1.18] tracking-tight">
            “{current.quote}”
          </p>
        </blockquote>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-sans font-bold text-foreground">
              {current.author}
            </div>
            <div className="text-xs sm:text-sm font-mono text-muted uppercase tracking-wider">
              {current.title} · <span className="text-foreground">{current.company}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-10 bg-foreground'
                    : 'w-3 bg-border hover:bg-muted'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
