import React from 'react';
import { AmbientCanvas } from '@/components/effects/AmbientCanvas';
import { Hero } from '@/components/home/Hero';
import { MetricsBanner } from '@/components/home/MetricsBanner';
import { WhatIBuild } from '@/components/home/WhatIBuild';
import { SelectedWork } from '@/components/home/SelectedWork';
import { ProcessRoadmap } from '@/components/home/ProcessRoadmap';
import { DiagnosticGrid } from '@/components/home/DiagnosticGrid';
import { BuiltInBombay } from '@/components/home/BuiltInBombay';
import { ClientArchive } from '@/components/home/ClientArchive';
import { MeetArhaan } from '@/components/home/MeetArhaan';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { JournalPreview } from '@/components/home/JournalPreview';
import { FaqSection } from '@/components/home/FaqSection';
import { FinalCta } from '@/components/home/FinalCta';

export default function HomePage() {
  return (
    <div className="relative w-full">
      <AmbientCanvas />
      <div className="relative z-10">
        {/* 01 — HERO */}
        <Hero />

        {/* 02 — CREDIBILITY */}
        <MetricsBanner />

        {/* 03 — WHAT I BUILD */}
        <WhatIBuild />

        {/* 04 — SELECTED CASE STUDIES */}
        <SelectedWork />

        {/* 05 — HOW WE THINK / HOW WE BUILD */}
        <ProcessRoadmap />
        <DiagnosticGrid />

        {/* 06 — BUILT IN BOMBAY */}
        <BuiltInBombay />

        {/* 07 — CLIENT ARCHIVE */}
        <ClientArchive />

        {/* 08 — FOUNDER */}
        <MeetArhaan />

        {/* CLIENT TRUST, FIELD NOTES & COMMERCIAL FAQS */}
        <TestimonialSection />
        <JournalPreview />
        <FaqSection />

        {/* 09 — FINAL CTA */}
        <FinalCta />
      </div>
    </div>
  );
}
