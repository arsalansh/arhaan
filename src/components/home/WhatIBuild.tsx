'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function WhatIBuild() {
  const capabilities = [
    {
      number: '01',
      title: 'COMMERCE SYSTEMS',
      category: 'D2C & Omnichannel Architecture',
      description: 'Improving the journey from first consideration to conversion, retention, and repeat value—including Shopify Plus engineering, quick-commerce integrations, and margin-protective cart systems.',
      visual: '/images/case-ecommerce-color.jpg',
      visualAlt: 'E-commerce conversion architecture on Studio Display with live analytics',
      tag: 'CONVERSION ARCHITECTURE',
      link: '/work/case-02',
    },
    {
      number: '02',
      title: 'DIGITAL PRODUCTS',
      category: 'UX Systems & Operating Tools',
      description: 'Brand, performance, content, and technology working as one connected system. Digital products engineered for high utility, intuitive customer journeys, and scalable performance infrastructure.',
      visual: '/images/strategy-desk.jpg',
      visualAlt: 'Tactile product wireframing and digital system design',
      tag: 'PRODUCT SYSTEMS',
      link: '/how-i-work',
    },
    {
      number: '03',
      title: 'BRAND SYSTEMS',
      category: 'Positioning & Category Wedge',
      description: 'What your brand stands for, who it’s for, and why it deserves to be chosen. Distilling core propositions into undeniable strategic territory that commands pricing power and emotional conviction.',
      visual: '/images/case-dtc-color.jpg',
      visualAlt: 'Luxury brand packaging, typography and visual formulation',
      tag: 'CATEGORY POSITIONING',
      link: '/work/case-01',
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-border bg-background">
      {/* Chapter Pre-Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>CAPABILITY PILLARS // THREE CORE DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
            What I build<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed">
            Strategy translated directly into commercial infrastructure. We design and deploy systems that solve growth plateaus through verifiable evidence, not vanity metrics.
          </p>
        </div>

        <Link
          href="/how-i-work"
          className="px-6 py-3.5 border border-border text-foreground hover:bg-surface text-xs font-mono uppercase tracking-widest font-bold transition-colors inline-flex items-center gap-2 shrink-0"
        >
          <span>Explore Capability System</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 3 Major Capability Sections with Real Visual Evidence */}
      <div className="divide-y divide-border border-y border-border">
        {capabilities.map((cap, idx) => (
          <article
            key={cap.number}
            className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start group"
          >
            {/* Number & Identification (Col 3) */}
            <div className="lg:col-span-3 space-y-2">
              <span className="font-mono text-4xl sm:text-5xl font-bold text-foreground block tracking-tight">
                {cap.number}
              </span>
              <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider block font-bold">
                {cap.category}
              </span>
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest block pt-2">
                EVIDENCE // {cap.tag}
              </span>
            </div>

            {/* Narrative & Description (Col 4) */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold tracking-tight text-foreground leading-tight">
                {cap.title}
              </h3>
              <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                {cap.description}
              </p>
              <div className="pt-2">
                <Link
                  href={cap.link}
                  className="text-xs font-mono uppercase tracking-widest text-foreground hover:opacity-60 transition-opacity inline-flex items-center gap-1.5 font-bold"
                >
                  <span>Inspect deployed system</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Real Project / Interface Visual Evidence (Col 5) */}
            <div className="lg:col-span-5">
              <Link href={cap.link} className="block">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface border border-border group/img">
                  <div className="absolute top-3 right-3 z-20 bg-background/90 backdrop-blur-xs px-2.5 py-0.5 border border-border font-mono text-[9px] uppercase text-foreground">
                    REAL PROOF // {cap.number}
                  </div>
                  <Image
                    src={cap.visual}
                    alt={cap.visualAlt}
                    fill
                    className="object-cover object-center group-hover/img:scale-102 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
