import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_METADATA, CASE_STUDIES } from '@/lib/content';
import { ArrowUpRight, ArrowDown, ArrowRight, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function TbdcPage() {
  const ecosystemFlow = [
    { step: '01', actor: 'ARHAAN SHAIKH', role: 'Strategic Founder & Advisor', note: 'Upstream diagnostic, commercial thesis & positioning' },
    { step: '02', actor: 'CO-FOUNDER ROLE', role: 'Executive Direction', note: 'Direct founder oversight and roadmap governance' },
    { step: '03', actor: 'THE BOMBAY DIGITAL COMPANY', role: 'Full-Service Digital Firm', note: 'Integrated in-house specialists across brand, tech & media' },
    { step: '04', actor: 'DIGITAL SYSTEMS', role: 'Engineered Infrastructure', note: 'Shopify Plus, custom web apps, CRO & creative pipelines' },
    { step: '05', actor: 'CLIENT WORK', role: 'Verified Market Scale', note: '100+ brands moving from strategy to sustainable growth' },
  ];

  const operatingDivisions = [
    {
      number: '01',
      title: 'COMMERCE SYSTEMS',
      scope: 'Shopify Plus, headless web stores, quick-commerce fulfillment integration, cart abandonment recovery, and margin-protective bundling.',
      visual: '/images/case-ecommerce-color.jpg',
      link: '/work/case-02',
    },
    {
      number: '02',
      title: 'DIGITAL PRODUCTS & UX',
      scope: 'Custom web interfaces, operational internal tools, client portals, and performance-optimized digital platforms designed with extreme clarity.',
      visual: '/images/strategy-desk.jpg',
      link: '/how-i-work',
    },
    {
      number: '03',
      title: 'BRAND & CONTENT SYSTEMS',
      scope: 'Sharp category positioning, visual identity architectures, editorial campaign production, and social proof engines that command pricing power.',
      visual: '/images/case-dtc-color.jpg',
      link: '/work/case-01',
    },
  ];

  return (
    <div className="w-full bg-background min-h-screen text-foreground">
      {/* 01. Pre-Header Bar */}
      <section className="relative w-full px-6 md:px-12 lg:px-16 pt-8 pb-16 border-b border-border">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span className="uppercase text-foreground font-semibold">ARHAAN SHAIKH</span>
            <span className="text-muted-light">//</span>
            <span className="uppercase">THE BOMBAY DIGITAL COMPANY (TBDC)</span>
          </div>
          <div className="flex items-center gap-6">
            <span>MUMBAI STUDIO · 19.0760° N</span>
            <span>•</span>
            <span className="text-foreground">ESTABLISHED OPERATING ENGINE</span>
          </div>
        </div>

        {/* Monumental Headline */}
        <div className="pt-10 pb-12 sm:pt-14 sm:pb-16 max-w-6xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-sans font-bold tracking-tighter text-foreground leading-[0.94]">
            The execution <br className="hidden sm:block" />
            engine<span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-[var(--accent)] ml-2 sm:ml-3 align-baseline"></span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted font-light max-w-3xl leading-snug">
            Strategy without delivery muscle is speculation. The Bombay Digital Company is the integrated digital firm co-founded by Arhaan to turn positioning, commerce architectures, and brand systems into verified commercial reality.
          </p>
        </div>

        {/* 02. Ecosystem Architecture Flow (Section 21) */}
        <div className="pt-10 border-t border-border">
          <div className="mb-6 flex items-center justify-between text-xs font-mono text-muted">
            <span className="uppercase tracking-widest font-bold text-foreground">
              ECOSYSTEM ARCHITECTURE // DIRECT LINEAGE OF VALUE
            </span>
            <span>INDEX: 01 ➔ 05</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border border border-border">
            {ecosystemFlow.map((item, idx) => (
              <div
                key={item.step}
                className="bg-background p-6 flex flex-col justify-between min-h-[220px] group hover:bg-surface transition-colors relative"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-muted pb-4 border-b border-border">
                    <span className="font-bold text-foreground">{item.step}</span>
                    {idx < 4 ? (
                      <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:translate-x-1 group-hover:text-foreground transition-all hidden md:block" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
                    )}
                  </div>
                  <h2 className="text-base sm:text-lg font-sans font-bold text-foreground pt-4 leading-tight">
                    {item.actor}
                  </h2>
                  <div className="text-xs font-mono text-[var(--accent)] pt-1 uppercase font-bold">
                    {item.role}
                  </div>
                </div>

                <p className="text-xs font-light text-muted pt-4 leading-relaxed border-t border-border mt-4">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Studio Grounding Visual (Restored Mill Studio in Mumbai) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 sm:py-24 border-b border-border bg-surface">
        <div className="space-y-6">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[560px] overflow-hidden bg-background border border-border group">
            <Image
              src="/images/bombay-mill-studio.jpg"
              alt="The Bombay Digital Company studio workshop and creative engineering floor in Mumbai"
              fill
              className="object-cover object-center group-hover:scale-101 transition-transform duration-1000"
              sizes="100vw"
            />
            <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-xs px-3 py-1 border border-border font-mono text-[10px] uppercase text-foreground">
              MUMBAI STUDIO HQ // TEXTILE MILL RESTORATION
            </div>
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-background/95 backdrop-blur-xs px-4 py-3 border border-border font-mono text-xs text-foreground max-w-sm">
              <span className="font-bold tracking-wider block">THE BOMBAY DIGITAL COMPANY</span>
              <span className="text-[10px] text-muted tracking-widest uppercase">
                INTEGRATED EXECUTION FIRM // BRAND · COMMERCE · PRODUCTS · MEDIA
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 font-mono text-xs text-muted">
            <div>
              <span className="text-foreground font-bold block">10+ YEARS PRACTICE</span>
              <span>Continuous delivery across strategy rooms and live shoot floors.</span>
            </div>
            <div>
              <span className="text-foreground font-bold block">100+ BRANDS SUPPORTED</span>
              <span>Early-stage venture to established market leaders.</span>
            </div>
            <div>
              <span className="text-foreground font-bold block">MUMBAI ROOTS, GLOBAL CLIENTELE</span>
              <span>Built with Bombay speed and craft, operating internationally.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Three Operating Domains & Proof */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-border bg-background">
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>CAPABILITY PROOF // THREE CORE DISCIPLINES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
            What the firm builds<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted font-light leading-relaxed max-w-2xl">
            TBDC operates with dedicated craft and engineering specialists under Arhaan’s strategic direction. Every system is built to generate durable commercial lift.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {operatingDivisions.map((division) => (
            <article
              key={division.number}
              className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group"
            >
              <div className="lg:col-span-3 space-y-2">
                <span className="font-mono text-4xl sm:text-5xl font-bold text-foreground">
                  {division.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted block pt-1">
                  CORE DIVISION
                </span>
              </div>

              <div className="lg:col-span-4 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-foreground">
                  {division.title}
                </h3>
                <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                  {division.scope}
                </p>
                <div className="pt-2">
                  <Link
                    href={division.link}
                    className="text-xs font-mono uppercase tracking-widest text-foreground hover:opacity-60 transition-opacity inline-flex items-center gap-1.5 font-bold"
                  >
                    <span>Inspect verified case record</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface border border-border group/img">
                  <Image
                    src={division.visual}
                    alt={division.title}
                    fill
                    className="object-cover object-center group-hover/img:scale-102 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 05. Selected Case Studies Proof Strip */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 sm:py-28 border-b border-border bg-surface">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-2">
              DELIVERY PROOF // VERIFIED WORK
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-bold text-foreground">
              Recent client engagements
            </h2>
          </div>
          <Link
            href="/work"
            className="text-xs font-mono uppercase tracking-widest text-foreground hover:opacity-60 font-bold inline-flex items-center gap-1.5"
          >
            <span>View all cases ({CASE_STUDIES.length})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {CASE_STUDIES.map((c) => (
            <Link
              key={c.id}
              href={`/work/${c.id}`}
              className="p-6 bg-background hover:bg-surface transition-colors flex flex-col justify-between min-h-[200px] group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span>CASE {c.caseNumber}</span>
                <span className="text-[10px] text-[var(--accent)] uppercase font-bold">{c.category}</span>
              </div>

              <div className="my-4">
                <h3 className="text-lg font-sans font-bold text-foreground group-hover:opacity-90 leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs text-muted font-light line-clamp-2 pt-2">
                  {c.outcome}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-foreground font-bold">
                <span>Read Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 06. Final CTA */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs font-mono uppercase tracking-widest text-muted block">
            ENGAGEMENT // ARHAAN SHAIKH & TBDC
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.02]">
            Ready to build <br />
            the system?<span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)] ml-2 align-baseline"></span>
          </h2>
          <p className="text-base sm:text-lg text-muted font-light max-w-xl mx-auto leading-relaxed">
            Whether for high-level founder advisory or full-funnel agency delivery, conversations start with an honest diagnostic.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <span>Initiate Strategic Brief</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
            </Link>
            <a
              href={SITE_METADATA.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-border text-foreground hover:bg-surface font-mono text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-2"
            >
              <span>Visit Agency Site ↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
