'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SITE_METADATA, FAQS } from '@/lib/content';
import { ArrowUpRight, Mail, Calendar, MapPin, Copy, Check, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: 'Scaling ($1M - $10M)',
    lens: 'Go-to-market strategy',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_METADATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 01. The Final Chapter: Cinematic Architectural Opening */}
      <section className="relative w-full px-6 md:px-12 lg:px-16 pt-8 pb-16 border-b border-border">
        {/* Pre-header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span className="uppercase text-foreground font-semibold">ARHAAN SHAIKH</span>
            <span className="text-muted-light">//</span>
            <span className="uppercase">THE FINAL CHAPTER · DIRECT INTAKE</span>
          </div>
          <div className="flex items-center gap-6">
            <span>MUMBAI · 19.0760° N</span>
            <span>•</span>
            <span className="text-foreground">CONFIDENTIAL & DIRECT</span>
          </div>
        </div>

        {/* Monumental Headline */}
        <div className="pt-10 pb-12 sm:pt-14 sm:pb-16 max-w-6xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-sans font-bold tracking-tighter text-foreground leading-[0.94]">
            Bring the <br className="hidden sm:block" />
            business problem<span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-[var(--accent)] ml-2 sm:ml-3 align-baseline"></span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted font-light max-w-3xl leading-snug">
            Every growth story starts with one honest conversation. Let’s have ours. We review unit economics, positioning bottlenecks, and execution leakage before you commit another rupee.
          </p>
        </div>

        {/* 2-Column Split: Direct Channels & Singular Cinematic Visual Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 border-t border-border">
          {/* Left Column (6 cols): Direct Channels Grid */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
                DIRECT INTAKE // NO INTERMEDIARIES
              </span>
              <p className="text-sm sm:text-base text-foreground font-light leading-relaxed">
                Whether you need a confidential diagnostic review, an urgent second opinion on go-to-market allocation, or full-funnel agency delivery via The Bombay Digital Company, you speak directly with Arhaan.
              </p>
            </div>

            {/* Direct Channels Minimal Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              {/* Channel 01: Email */}
              <div className="bg-background p-4 sm:p-5 flex flex-col justify-between min-h-[100px]">
                <div className="flex items-center justify-between text-xs font-mono text-muted">
                  <span className="font-bold text-foreground">01 EMAIL</span>
                  <button
                    onClick={copyEmail}
                    className="text-[11px] text-foreground hover:opacity-60 cursor-pointer flex items-center gap-1"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-[var(--accent)]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${SITE_METADATA.email}`}
                  className="text-xs sm:text-sm font-mono text-foreground font-medium truncate pt-2 hover:opacity-70"
                >
                  {SITE_METADATA.email}
                </a>
              </div>

              {/* Channel 02: WhatsApp */}
              <div className="bg-background p-4 sm:p-5 flex flex-col justify-between min-h-[100px]">
                <div className="flex items-center justify-between text-xs font-mono text-muted">
                  <span className="font-bold text-foreground">02 WHATSAPP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
                </div>
                <a
                  href={SITE_METADATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans font-bold text-foreground hover:opacity-70 pt-2"
                >
                  Rapid Founder Dispatch ↗
                </a>
              </div>

              {/* Channel 03: Calendar */}
              <div className="bg-background p-4 sm:p-5 flex flex-col justify-between min-h-[100px]">
                <div className="flex items-center justify-between text-xs font-mono text-muted">
                  <span className="font-bold text-foreground">03 CALENDAR</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
                </div>
                <a
                  href={SITE_METADATA.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans font-bold text-foreground hover:opacity-70 pt-2"
                >
                  Schedule 30-Min Call ↗
                </a>
              </div>

              {/* Channel 04: LinkedIn */}
              <div className="bg-background p-4 sm:p-5 flex flex-col justify-between min-h-[100px]">
                <div className="flex items-center justify-between text-xs font-mono text-muted">
                  <span className="font-bold text-foreground">04 LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
                </div>
                <a
                  href={SITE_METADATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans font-bold text-foreground hover:opacity-70 pt-2"
                >
                  Arhaan Shaikh ↗
                </a>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-muted flex items-center justify-between">
              <span>RESPONSE TIME: WITHIN 24 BUSINESS HOURS</span>
              <span className="text-foreground">NDA COVERED</span>
            </div>
          </div>

          {/* Right Column (6 cols): One Strong Cinematic Visual Moment */}
          <div className="lg:col-span-6 flex flex-col space-y-3">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface border border-border group">
              <Image
                src="/images/contact-cinematic.jpg"
                alt="Monumental architectural pavilion in Mumbai at twilight"
                fill
                priority
                className="object-cover object-center group-hover:scale-101 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-background/95 backdrop-blur-xs p-4 border-t border-border flex items-center justify-between text-xs font-mono">
                <div>
                  <div className="font-bold text-foreground">THE APERTURE // DIRECT COMMISSIONS</div>
                  <div className="text-[11px] text-muted">CONFIDENTIAL FOUNDER DIALOGUE</div>
                </div>
                <span className="text-[10px] uppercase text-muted-light">MUMBAI HQ</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-muted px-1">
              <span>FIELD REF // 04 CINEMATIC FINAL CHAPTER</span>
              <span>CALM REFLECTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Consultation Brief Form */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 sm:py-28 border-b border-border bg-surface">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
              <span>SUBMISSION FRAMEWORK // STRUCTURED INTAKE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-foreground">
              Consultation Brief<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-1"></span>
            </h2>
            <p className="text-sm sm:text-base text-muted font-light leading-relaxed max-w-xl">
              Share your current business numbers, bottlenecks, and commercial context to prepare an actionable diagnostic conversation.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 sm:p-12 bg-background border border-border space-y-6">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-black">
                <Check className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
                  STATUS // CONFIRMED
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-foreground tracking-tight">
                  Brief Received.
                </h3>
                <p className="text-sm md:text-base text-muted font-light max-w-lg leading-relaxed">
                  Thank you. Arhaan personally reviews all commercial submissions and will respond to{' '}
                  <span className="text-foreground font-mono font-medium">{formData.email}</span> within 24 business hours.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono uppercase tracking-wider text-muted hover:text-foreground cursor-pointer underline underline-offset-4"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 bg-background border border-border space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase text-muted tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-border text-foreground text-sm font-sans focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase text-muted tracking-wider">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. radhika@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-border text-foreground text-sm font-sans focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase text-muted tracking-wider">
                    Company / Brand *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Lifestyle Co."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-border text-foreground text-sm font-sans focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase text-muted tracking-wider">
                    Current Scale / Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-border text-foreground text-sm font-sans focus:outline-none focus:border-foreground transition-colors cursor-pointer"
                  >
                    <option>Early-Stage / Pre-Launch</option>
                    <option>Seed / Early Traction (&lt;$1M)</option>
                    <option>Scaling ($1M - $10M)</option>
                    <option>Established Leader ($10M+)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase text-muted tracking-wider">
                  Primary Strategic Lens
                </label>
                <select
                  value={formData.lens}
                  onChange={(e) => setFormData({ ...formData, lens: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-border text-foreground text-sm font-sans focus:outline-none focus:border-foreground transition-colors cursor-pointer"
                >
                  <option>Go-to-market strategy</option>
                  <option>Growth strategy & diagnostics</option>
                  <option>E-commerce & quick commerce</option>
                  <option>Marketing strategy & media split</option>
                  <option>Brand positioning & territory</option>
                  <option>Full-funnel digital execution (via TBDC)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase text-muted tracking-wider">
                  What is the core bottleneck holding growth back? *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Briefly describe your current numbers, unit economics, conversion drop-off, or market challenge..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-border text-foreground text-sm font-sans focus:outline-none focus:border-foreground transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Submit Strategic Inquiry</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
              </button>

              <p className="text-[11px] font-mono text-muted text-center">
                All communications remain strictly confidential under customary NDA standards.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* 03. Frequently Asked Questions */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 sm:py-32 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
              BEFORE WE BEGIN // CLEAR CRITERIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-foreground">
              Frequently <br />
              asked questions<span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] ml-1"></span>
            </h2>
            <p className="text-xs sm:text-sm text-muted font-light leading-relaxed max-w-md pt-2">
              Clear answers regarding advisory structure, fees, and execution governance through The Bombay Digital Company.
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-border border-y border-border">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={faq.number} className="py-6 sm:py-8">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full flex items-start justify-between gap-4 text-left cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs font-bold text-muted pt-1">
                        {faq.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-sans font-bold text-foreground group-hover:opacity-70 transition-opacity">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="p-1 text-muted shrink-0">
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
                        <p className="pt-4 pl-8 text-xs sm:text-sm text-muted font-light leading-relaxed max-w-xl">
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
    </div>
  );
}
