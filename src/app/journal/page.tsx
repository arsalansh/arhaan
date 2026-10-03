'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { JOURNAL_ARTICLES, JournalArticle } from '@/lib/content';
import { ArrowUpRight, X, BookOpen, Clock, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JournalPage() {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { label: 'All', count: 5 },
    { label: 'Market strategy', count: 1 },
    { label: 'Marketing', count: 1 },
    { label: 'Brand positioning', count: 1 },
    { label: 'Content', count: 1 },
    { label: 'E-commerce', count: 1 },
  ];

  const filteredArticles = activeCategory === 'All'
    ? JOURNAL_ARTICLES
    : JOURNAL_ARTICLES.filter(a => a.category === activeCategory);

  const featuredArticle = JOURNAL_ARTICLES[0];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 01. Journal Editorial Hero Section */}
      <section className="relative w-full px-6 md:px-12 lg:px-16 pt-8 pb-16 border-b border-border">
        {/* Pre-header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span className="uppercase text-foreground font-semibold">ARHAAN SHAIKH</span>
            <span className="text-muted-light">//</span>
            <span className="uppercase">FOUNDER FIELD JOURNAL & ESSAYS</span>
          </div>
          <div className="flex items-center gap-6">
            <span>5 ESSAYS IN CIRCULATION</span>
            <span>•</span>
            <span className="text-foreground">CALM READING PROTOCOL</span>
          </div>
        </div>

        {/* Monumental Headline */}
        <div className="pt-10 pb-12 sm:pt-14 sm:pb-16 max-w-6xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-sans font-bold tracking-tighter text-foreground leading-[0.94]">
            Notes on <br className="hidden sm:block" />
            growth<span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-[var(--accent)] ml-2 sm:ml-3 align-baseline"></span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted font-light max-w-3xl leading-snug">
            Ideas from inside the work—across brands, markets, commerce, and sustainable growth. Article drafts are clearly marked.
          </p>
        </div>

        {/* Filter Strip with Categories */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                  activeCategory === cat.label
                    ? 'border-foreground bg-foreground text-background font-bold'
                    : 'border-border bg-background text-muted hover:text-foreground hover:bg-surface'
                }`}
              >
                <span className="mr-2 opacity-60">0{idx + 1}</span>
                <span>{cat.label}</span>
                <span className="ml-2 px-1.5 py-0.2 bg-border text-[10px]">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-muted">
            INDEX: <span className="text-foreground font-bold">{filteredArticles.length} ESSAYS</span> UNDER {activeCategory.toUpperCase()}
          </div>
        </div>
      </section>

      {/* 02. Featured Cover Essay (Calm Lead Spread) */}
      {activeCategory === 'All' && featuredArticle && (
        <section className="w-full px-6 md:px-12 lg:px-16 py-16 sm:py-24 border-b border-border bg-surface">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Cover */}
            <div className="lg:col-span-6">
              <div 
                onClick={() => setSelectedArticle(featuredArticle)}
                className="relative w-full aspect-[16/10] overflow-hidden bg-background border border-border group cursor-pointer"
              >
                <Image
                  src="/images/strategy-desk.jpg"
                  alt="Tactile strategy documents and working journal"
                  fill
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-xs px-2.5 py-1 border border-border font-mono text-[10px] uppercase text-foreground">
                  FEATURED ESSAY // {featuredArticle.category}
                </div>
              </div>
            </div>

            {/* Narrative Context */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono text-muted">
                <span className="text-foreground font-bold">{featuredArticle.number}</span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>

              <h2 
                onClick={() => setSelectedArticle(featuredArticle)}
                className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-foreground leading-tight hover:opacity-75 transition-opacity cursor-pointer"
              >
                {featuredArticle.title}
              </h2>

              <p className="text-lg text-muted font-light leading-relaxed">
                {featuredArticle.subtitle}
              </p>

              <p className="text-sm text-muted font-light leading-relaxed">
                {featuredArticle.summary}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Read Complete Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 03. Field Notes Archive List */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 sm:py-24">
        <div className="divide-y divide-border border-y border-border">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group cursor-pointer"
            >
              {/* Col 1: Article Identity */}
              <div className="lg:col-span-3 space-y-1 font-mono text-xs text-muted">
                <span className="font-bold text-foreground text-sm block">
                  {article.number} // {article.category}
                </span>
                <div>{article.readTime}</div>
                <div className="text-muted-light">{article.date}</div>
              </div>

              {/* Col 2: Title, Subtitle & Excerpt */}
              <div className="lg:col-span-7 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-foreground group-hover:opacity-70 transition-opacity">
                  {article.title}
                </h3>
                <p className="text-base text-foreground font-light leading-relaxed">
                  {article.subtitle}
                </p>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {article.summary}
                </p>
                <div className="pt-2 text-xs font-mono text-muted group-hover:text-foreground inline-flex items-center gap-1.5 transition-colors font-medium">
                  <span>Read essay thesis & takeaways</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Col 3: Status Badge */}
              <div className="lg:col-span-2 flex justify-start lg:justify-end pt-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted border border-border px-3 py-1 bg-surface">
                  ESSAY DRAFT
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 04. Distraction-Free Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-card border border-border p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 max-h-[92vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 text-muted hover:text-foreground cursor-pointer z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3 border-b border-border pb-6">
                <div className="flex items-center gap-3 text-xs font-mono text-muted">
                  <span className="font-bold text-foreground">{selectedArticle.number}</span>
                  <span>•</span>
                  <span>{selectedArticle.category}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-foreground leading-tight">
                  {selectedArticle.title}
                </h3>
                <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                  {selectedArticle.subtitle}
                </p>
                <div className="text-xs font-mono text-muted pt-1">
                  PUBLISHED {selectedArticle.date} // ARHAAN SHAIKH
                </div>
              </div>

              {/* Core Strategic Takeaway */}
              <div className="p-5 bg-surface border-l-2 border-foreground space-y-2">
                <div className="font-mono text-xs uppercase tracking-wider text-muted">
                  Core Strategic Thesis
                </div>
                <div className="text-base font-medium text-foreground">
                  {selectedArticle.summary}
                </div>
              </div>

              {/* Essay Content */}
              <div className="space-y-4 text-base text-foreground font-light leading-relaxed">
                {selectedArticle.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="space-y-3 p-5 bg-surface border border-border">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-bold block">
                  Actionable Principles for Operators:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm font-mono text-foreground">
                  {selectedArticle.takeaways.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-muted">—</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer */}
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href={`/contact?essay=${encodeURIComponent(selectedArticle.title)}`}
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity text-center"
                >
                  Discuss This Thesis ↗
                </Link>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs font-mono text-muted hover:text-foreground cursor-pointer"
                >
                  Close Essay
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
