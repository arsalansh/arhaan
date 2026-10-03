import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASE_STUDIES, CaseStudy } from '@/lib/content';
import { ArrowUpRight, ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Layers, Compass } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({
    slug: c.id,
  }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const currentIdx = CASE_STUDIES.findIndex((c) => c.id === slug);

  if (currentIdx === -1) {
    notFound();
  }

  const study = CASE_STUDIES[currentIdx];
  const nextStudy = CASE_STUDIES[(currentIdx + 1) % CASE_STUDIES.length];

  const caseMedia: Record<string, {
    heroImg: string;
    systemImg: string;
    galleryImgs: { src: string; caption: string }[];
    role: string;
    systemScope: string;
  }> = {
    'case-01': {
      heroImg: '/images/case-dtc-color.jpg',
      systemImg: '/images/case-heritage-color.jpg',
      galleryImgs: [
        { src: '/images/case-dtc-color.jpg', caption: 'Tactile apothecary bottle formulation and packaging' },
        { src: '/images/strategy-desk.jpg', caption: 'Upstream launch roadmap and category sizing documents' },
        { src: '/images/bombay-mill-studio.jpg', caption: 'Creative direction workshop and team delivery sprint' },
      ],
      role: 'Launch Strategy & Go-To-Market Advisory',
      systemScope: 'Audience Reframing · Daily Ritual Wedge · 90-Day Demand Engine',
    },
    'case-02': {
      heroImg: '/images/case-ecommerce-color.jpg',
      systemImg: '/images/case-dtc-color.jpg',
      galleryImgs: [
        { src: '/images/case-ecommerce-color.jpg', caption: 'Shopify Plus custom checkout and 30-day conversion telemetry' },
        { src: '/images/strategy-desk.jpg', caption: 'Full-funnel drop-off analytics and UX architecture' },
        { src: '/images/bombay-mill-studio.jpg', caption: 'Cross-functional engineering and design sprint' },
      ],
      role: 'Digital Commerce & Conversion Architecture',
      systemScope: 'Shopify Plus Re-platforming · Cart Friction Removal · Retention Loop',
    },
    'case-03': {
      heroImg: '/images/case-heritage-color.jpg',
      systemImg: '/images/case-ecommerce-color.jpg',
      galleryImgs: [
        { src: '/images/case-heritage-color.jpg', caption: 'Embossed identity presentation boxes and letterpress stationery' },
        { src: '/images/strategy-desk.jpg', caption: 'Heritage equity extraction and cultural territory mapping' },
        { src: '/images/contact-cinematic.jpg', caption: 'Architectural retail gallery and flagship presence' },
      ],
      role: 'Category Repositioning & Brand Architecture',
      systemScope: 'Craft Narrative Territory · Premium Tier Architecture · Editorial Video',
    },
  };

  const media = caseMedia[study.id] || caseMedia['case-01'];

  return (
    <article className="w-full bg-background min-h-screen text-foreground">
      {/* 01. Pre-Header Bar */}
      <div className="w-full px-6 md:px-12 lg:px-16 pt-8 pb-6 border-b border-border">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted">
          <Link
            href="/work"
            className="hover:text-foreground inline-flex items-center gap-2 uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Case Archive</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-foreground font-bold">CASE {study.caseNumber}</span>
            <span>//</span>
            <span className="uppercase">{study.category}</span>
          </div>
        </div>
      </div>

      {/* 02. Project Title & Introduction */}
      <section className="w-full px-6 md:px-12 lg:px-16 pt-12 pb-16 border-b border-border">
        <div className="max-w-5xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>{study.clientType}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-foreground leading-[0.98]">
            {study.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted font-light leading-relaxed max-w-3xl">
            {study.detailedOverview}
          </p>
        </div>

        {/* Strategic Scope Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 mt-10 border-t border-border font-mono text-xs">
          <div>
            <span className="text-muted block uppercase text-[10px]">Strategic Role:</span>
            <span className="text-foreground font-medium pt-1 block">{media.role}</span>
          </div>
          <div>
            <span className="text-muted block uppercase text-[10px]">Deployed Architecture:</span>
            <span className="text-foreground font-medium pt-1 block">{media.systemScope}</span>
          </div>
          <div>
            <span className="text-muted block uppercase text-[10px]">Verification:</span>
            <span className="text-[var(--accent)] font-medium pt-1 block">TBDC Delivery Record</span>
          </div>
        </div>
      </section>

      {/* 03. Large Hero Visual in Original Authentic Colors */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-12 sm:py-16 border-b border-border bg-surface">
        <div className="relative w-full aspect-[16/9] max-h-[700px] overflow-hidden bg-background border border-border group">
          <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-xs px-3 py-1 border border-border font-mono text-[10px] uppercase text-foreground">
            AUTHENTIC ASSET // {study.caseNumber}
          </div>
          <Image
            src={media.heroImg}
            alt={study.title}
            fill
            priority
            className="object-cover object-center group-hover:scale-101 transition-transform duration-1000"
            sizes="100vw"
          />
        </div>
      </section>

      {/* 04. The Challenge & The Approach (2-Column Asymmetric Deep Dive) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 sm:py-28 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* The Challenge (Col 6) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block">
              01 // THE CHALLENGE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold tracking-tight text-foreground leading-snug">
              Identifying the real barrier to scale<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-1"></span>
            </h2>
            <div className="p-6 bg-surface border-l-2 border-foreground space-y-3">
              <span className="text-[10px] font-mono text-muted uppercase tracking-wider block">
                DIAGNOSTIC BOTTLENECK:
              </span>
              <p className="text-base sm:text-lg text-foreground font-light leading-relaxed">
                {study.challenge}
              </p>
            </div>
          </div>

          {/* The Approach & Strategy (Col 6) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block">
              02 // THE STRATEGY & APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold tracking-tight text-foreground leading-snug">
              Engineering the commercial response<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-1"></span>
            </h2>
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
              {study.strategy}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono text-muted uppercase tracking-wider block">
                SEQUENTIAL FRAMEWORK STEPS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {study.frameworkSteps.map((step, idx) => (
                  <div key={step} className="p-3 bg-surface border border-border font-mono text-xs flex items-center gap-2">
                    <span className="text-[var(--accent)] font-bold">0{idx + 1}.</span>
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. The System & Experience (Visual Evidence) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 sm:py-28 border-b border-border bg-surface">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-muted block">
            03 // THE SYSTEM & EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-foreground">
            Building the actual work<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-1"></span>
          </h2>
          <p className="text-base text-muted font-light leading-relaxed">
            Strategy translated directly into interface, product merchandising, and conversion architecture.
          </p>
        </div>

        <div className="relative w-full aspect-[16/10] overflow-hidden bg-background border border-border group">
          <Image
            src={media.systemImg}
            alt="System architecture and interface deployment"
            fill
            className="object-cover object-center group-hover:scale-101 transition-transform duration-700"
            sizes="100vw"
          />
        </div>
      </section>

      {/* 06. The Outcome (Prominent Commercial Metrics) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 sm:py-28 border-b border-border bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold block">
              04 // THE OUTCOME
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-foreground">
              Performance, not promises<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-1"></span>
            </h2>
            <p className="text-base sm:text-lg text-foreground font-light leading-relaxed pt-2">
              {study.outcome}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {study.metrics.map((m) => (
              <div key={m.label} className="p-6 bg-surface border border-border space-y-2">
                <div className="text-4xl sm:text-5xl font-sans font-bold text-foreground tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs font-mono text-muted uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. Curated Project Gallery */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 sm:py-28 border-b border-border bg-surface">
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted block">
            PROJECT ARCHIVE // GALLERY
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-foreground">
            Curated visual evidence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {media.galleryImgs.map((img, i) => (
            <div key={i} className="space-y-3">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-background border border-border group">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <p className="text-xs font-mono text-muted">{img.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 08. Next Case Study (Continuous Journey Link) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 sm:py-28 bg-background">
        <div className="border border-border p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-surface">
          <div className="space-y-3 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block">
              NEXT CASE STUDY // 0{((currentIdx + 1) % CASE_STUDIES.length) + 1}
            </span>
            <h3 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-foreground">
              {nextStudy.title}
            </h3>
            <p className="text-sm text-muted font-light">
              {nextStudy.category} · {nextStudy.clientType}
            </p>
          </div>

          <Link
            href={`/work/${nextStudy.id}`}
            className="px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-3 shrink-0 self-start lg:self-auto"
          >
            <span>Explore Next Dossier</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
