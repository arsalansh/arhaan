'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/providers/ThemeProvider';
import { SITE_METADATA } from '@/lib/content';
import { Sun, Moon } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { label: 'Overview', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'How I Work', href: '/how-i-work' },
    { label: 'About', href: '/about' },
    { label: 'TBDC', href: '/tbdc' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full pt-8 pb-4 px-6 md:px-12 lg:px-16 flex items-start justify-between text-xs tracking-tight bg-transparent z-40">
      {/* Top Left: Small Constructivist Brand / Index Tag */}
      <div className="flex flex-col space-y-1">
        <Link href="/" className="font-sans font-bold text-foreground tracking-tight text-sm hover:opacity-70 transition-opacity">
          Arhaan Shaikh<span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1"></span>
        </Link>
        <span className="text-[11px] text-muted font-mono">
          {SITE_METADATA.agency}
        </span>
      </div>

      {/* Top Center / Right: Desktop Minimal Horizontal Navigation */}
      <div className="flex items-center gap-6 sm:gap-8">
        <nav className="hidden sm:flex items-center gap-6 text-[13px]">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? 'text-foreground font-semibold border-b border-foreground'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Minimal Theme Switcher */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-1.5 text-muted hover:text-foreground transition-colors cursor-pointer"
        >
          {theme === 'light' ? (
            <Moon className="w-3.5 h-3.5" />
          ) : (
            <Sun className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Direct Contact Action */}
        <Link
          href="/contact"
          className="hidden md:inline-block text-[12px] font-mono uppercase tracking-wider text-foreground hover:text-[var(--accent-vermilion)] transition-colors"
        >
          Let’s talk ↗
        </Link>
      </div>
    </header>
  );
}
