'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ClientArchive() {
  const brandCategories = [
    { name: 'D2C & Direct Commerce', count: '40+ Brands', detail: 'Shopify Plus, Quick Commerce, FMCG' },
    { name: 'Heritage & Enterprise Retail', count: '25+ Brands', detail: 'Category Repositioning & Omnichannel' },
    { name: 'Consumer Lifestyle & Wellness', count: '20+ Brands', detail: 'Go-To-Market & Formulation Launch' },
    { name: 'Digital Products & Platforms', count: '15+ Brands', detail: 'Custom Web Apps & UX Systems' },
  ];

  const clientMonograms = [
    { name: 'Consumer Brand', sector: 'FMCG / Market Entry', verified: 'CASE 01', href: '/work/case-01' },
    { name: 'D2C Apparel Co.', sector: 'Shopify Plus / CRO', verified: 'CASE 02', href: '/work/case-02' },
    { name: 'Heritage Luxury', sector: 'Brand Repositioning', verified: 'CASE 03', href: '/work/case-03' },
    { name: 'Digital Studio Lab', sector: 'Platform Systems', verified: 'TBDC ECOSYSTEM', href: 'https://thebombaydigitalcompany.com' },
    { name: 'Modern Beverage Co.', sector: 'GTM & Launch Architecture', verified: 'ADVISORY SPRINT', href: '/contact' },
    { name: 'Omnichannel Retail', sector: 'Unified Commerce Stack', verified: 'COMMERCE AUDIT', href: '/how-i-work' },
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-border bg-surface">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>CLIENT TRUST // PROVEN ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
            Selected brands we’ve built with<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed">
            100+ brands supported by the ecosystem across early-stage venture to established market leaders. Every relationship is grounded in commercial accountability.
          </p>
        </div>

        <div className="text-xs font-mono text-muted">
          INDEX: <span className="text-foreground font-bold">100+ BRANDS</span> ACROSS 4 SECTORS
        </div>
      </div>

      {/* Editorial Monogram & Verification Grid (Rule 09 & 22) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {clientMonograms.map((client) => (
          <Link
            key={client.name}
            href={client.href}
            className="p-6 sm:p-8 bg-background hover:bg-surface transition-colors flex flex-col justify-between min-h-[140px] group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-muted">
              <span className="text-[10px] tracking-wider uppercase text-[var(--accent)] font-bold">{client.verified}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>

            <div className="pt-4">
              <h3 className="text-lg sm:text-xl font-sans font-bold text-foreground group-hover:opacity-90">
                {client.name}
              </h3>
              <p className="text-xs font-mono text-muted pt-1">
                {client.sector}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Category Footprint */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-border">
        {brandCategories.map((cat) => (
          <div key={cat.name} className="space-y-1">
            <div className="text-xl sm:text-2xl font-sans font-bold text-foreground">{cat.count}</div>
            <div className="text-xs font-sans font-medium text-foreground">{cat.name}</div>
            <div className="text-[11px] font-mono text-muted">{cat.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
