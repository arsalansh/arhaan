import React from 'react';
import Link from 'next/link';
import { JOURNAL_ARTICLES } from '@/lib/content';
import { ArrowUpRight } from 'lucide-react';

export function JournalPreview() {
  const articles = JOURNAL_ARTICLES.slice(0, 3);

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-t border-border bg-background">
      {/* Standalone Monumental Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>STRATEGIC WRITING // FIELD NOTES & ESSAYS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
            Notes on growth<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed">
            Ideas from inside the work—across brands, markets, commerce, and sustainable growth.
          </p>
        </div>

        <Link
          href="/journal"
          className="px-6 py-3.5 border border-border text-foreground hover:bg-surface text-xs font-mono uppercase tracking-widest font-bold transition-colors inline-flex items-center gap-2 shrink-0"
        >
          <span>All Articles (5)</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Articles Architectural Grid (60% Visual / 40% Text) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
        {articles.map((art) => (
          <article
            key={art.id}
            className="bg-background p-8 sm:p-10 flex flex-col justify-between group hover:bg-surface transition-colors min-h-[380px] relative"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="font-bold text-foreground">ESSAY // {art.number}</span>
                <span className="text-[10px] uppercase px-2 py-0.5 bg-surface border border-border text-muted">
                  {art.category}
                </span>
              </div>

              <div className="space-y-3">
                <Link href={`/journal#${art.id}`}>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-foreground group-hover:opacity-75 transition-opacity leading-snug">
                    {art.title}
                  </h3>
                </Link>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {art.subtitle}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border mt-8 flex items-center justify-between text-xs font-mono">
              <span className="text-muted">{art.readTime} · {art.date}</span>
              <Link
                href={`/journal#${art.id}`}
                className="text-foreground hover:opacity-60 uppercase font-bold inline-flex items-center gap-1"
              >
                <span>Read Essay</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
