import React from 'react';
import Image from 'next/image';

export function FieldArchiveBanner() {
  return (
    <section className="w-full border-t border-border bg-background px-6 md:px-12 lg:px-16 py-12 sm:py-16">
      {/* Wide Editorial Photograph (Visual Reset) */}
      <div className="relative w-full h-[240px] sm:h-[320px] lg:h-[380px] overflow-hidden bg-surface border border-border group">
        {/* Subtle Film Grain Layer */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none z-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Cinematic Wide Bombay Architecture Visual in Natural Cinematic Color */}
        <Image
          src="/images/bombay-documentary.jpg"
          alt="Bombay urban architecture, morning rhythm and commercial infrastructure"
          fill
          priority={false}
          className="object-cover object-center group-hover:scale-101 transition-transform duration-1000"
          sizes="100vw"
        />

        {/* Top-Right Micro Coordinate Badge */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-background/90 backdrop-blur-xs px-2.5 py-1 border border-border font-mono text-[10px] text-foreground flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
          <span>19.0760° N, 72.8777° E</span>
        </div>

        {/* Requested Monospace Caption Overlay */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-background/95 backdrop-blur-xs px-4 py-3 border border-border font-mono text-xs text-foreground flex flex-col space-y-0.5">
          <span className="font-bold tracking-wider">BOMBAY / MUMBAI</span>
          <span className="text-[10px] text-muted tracking-widest uppercase">FIELD ARCHIVE / 01</span>
        </div>
      </div>
    </section>
  );
}
