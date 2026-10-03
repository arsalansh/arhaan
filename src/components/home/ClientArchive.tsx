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

  // 12 Curated Logos matching the 4x3 Minimal Hairline Editorial Grid
  const clientLogos = [
    {
      id: 'd2c-wellness',
      name: 'PlumBal',
      label: 'D2C Wellness',
      caseLink: '/work/case-01',
      svg: (
        <div className="flex items-center gap-2.5">
          {/* Interlocking loop mark */}
          <svg className="w-6 h-6 shrink-0 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" opacity="0.15" />
            <path d="M7.5 12c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5-4.5-2.02-4.5-4.5zm2 0c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z" />
            <path d="M12 4.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
          </svg>
          <span className="font-sans font-bold text-base sm:text-lg tracking-tight">PlumBal</span>
        </div>
      ),
    },
    {
      id: 'heritage-silk',
      name: 'Laitdi-la',
      label: 'Heritage Silk',
      caseLink: '/work/case-03',
      svg: (
        <div className="flex flex-col items-center">
          <div className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center font-serif font-bold text-sm leading-none">
            G
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase pt-1 opacity-70">Laitdi·la</span>
        </div>
      ),
    },
    {
      id: 'urban-apparel',
      name: 'Naansclka',
      label: 'Urban Apparel',
      caseLink: null,
      svg: (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-current text-background flex items-center justify-center font-bold text-[10px]">
            &
          </div>
          <span className="font-sans font-semibold text-sm sm:text-base tracking-tight">Naansclka</span>
        </div>
      ),
    },
    {
      id: 'fmcg-platform',
      name: 'nncapos',
      label: 'Consumer Platform',
      caseLink: '/work/case-01',
      svg: (
        <span className="font-sans font-extrabold text-base sm:text-lg tracking-tighter lowercase">
          nrcapos
        </span>
      ),
    },
    {
      id: 'beverage-innovation',
      name: 'broiverg',
      label: 'Beverage Labs',
      caseLink: null,
      svg: (
        <span className="font-sans font-light text-base sm:text-lg tracking-wide lowercase">
          broıverg
        </span>
      ),
    },
    {
      id: 'd2c-commerce',
      name: 'Mased.com',
      label: 'D2C Commerce',
      caseLink: '/work/case-02',
      svg: (
        <span className="font-sans font-bold text-base sm:text-lg tracking-tight">
          Mased<span className="font-normal opacity-70">.com</span>
        </span>
      ),
    },
    {
      id: 'fintech-advisory',
      name: 'IMEO',
      label: 'Fintech Systems',
      caseLink: null,
      svg: (
        <div className="flex items-center gap-1 font-mono font-bold tracking-widest text-base sm:text-lg">
          <span>II\</span>
          <span className="w-3.5 h-3.5 border-2 border-current rotate-45 inline-block"></span>
        </div>
      ),
    },
    {
      id: 'lifestyle-retail',
      name: 'CHIECOS',
      label: 'Consumer Lifestyle',
      caseLink: null,
      svg: (
        <span className="font-sans font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
          CHIECOS
        </span>
      ),
    },
    {
      id: 'consumer-brand',
      name: 'Congoast',
      label: 'Market Entry',
      caseLink: '/work/case-01',
      svg: (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-current text-background flex items-center justify-center font-bold text-xs">
            b
          </div>
          <span className="font-sans font-bold text-sm sm:text-base tracking-tight">Congoast</span>
        </div>
      ),
    },
    {
      id: 'heritage-luxury',
      name: 'VISRAS',
      label: 'Heritage Repositioning',
      caseLink: '/work/case-03',
      svg: (
        <span className="font-serif font-normal text-base sm:text-lg tracking-[0.2em] uppercase">
          VISRAS
        </span>
      ),
    },
    {
      id: 'global-consumer',
      name: 'Heineken',
      label: 'Global Consumer',
      caseLink: null,
      svg: (
        <div className="flex flex-col items-center">
          <svg className="w-3.5 h-3.5 fill-current mb-0.5" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span className="font-serif font-bold text-xs sm:text-sm tracking-wider">
            Heineken
          </span>
        </div>
      ),
    },
    {
      id: 'enterprise-systems',
      name: 'SEFVILGS',
      label: 'Enterprise Infrastructure',
      caseLink: null,
      svg: (
        <span className="font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
          SEFVILGS
        </span>
      ),
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-border bg-background">
      {/* Chapter Pre-Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>TRUSTED BY // SELECTED CLIENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
            Selected brands we’ve built with<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed">
            Selected brands and businesses we’ve built with across early-stage venture to established market leaders. Every relationship is grounded in commercial accountability.
          </p>
        </div>

        <div className="text-xs font-mono text-muted">
          INDEX: <span className="text-foreground font-bold">100+ BRANDS</span> ACROSS 4 SECTORS
        </div>
      </div>

      {/* 4x3 Minimal Hairline Editorial Logo Grid (Matching Reference Image) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
        {clientLogos.map((client) => {
          const content = (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-8 min-h-[110px] sm:min-h-[130px] group transition-colors relative bg-background hover:bg-surface">
              {client.caseLink && (
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[9px] font-mono uppercase text-muted">
                  <span className="text-[var(--accent)] font-bold">CASE</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              )}
              <div className="text-foreground opacity-75 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {client.svg}
              </div>
            </div>
          );

          if (client.caseLink) {
            return (
              <Link
                key={client.id}
                href={client.caseLink}
                className="block focus:outline-hidden"
                title={`${client.name} — View Case Study`}
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={client.id} className="block">
              {content}
            </div>
          );
        })}
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
