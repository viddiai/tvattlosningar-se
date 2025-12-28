'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

const navigation = [
  {
    name: 'Branscher',
    href: '/branscher',
    submenu: [
      { name: 'Bygg & Fastighet', href: '/branscher/bygg-fastighet' },
      { name: 'Bostadsrättsförening', href: '/branscher/brf' },
      { name: 'Hotell & Konferens', href: '/branscher/hotell' },
      { name: 'Vård & Omsorg', href: '/branscher/vard-omsorg' },
      { name: 'Sport & Fritid', href: '/branscher/sport-fritid' },
      { name: 'Djurhållning', href: '/branscher/djurhallning' },
      { name: 'Räddningstjänst', href: '/branscher/raddningstjanst' },
      { name: 'Industri', href: '/branscher/industri' },
    ],
  },
  {
    name: 'Lösningar',
    href: '/losningar',
    submenu: [
      { name: 'Tvättutrustning', href: '/losningar/tvattutrustning' },
      { name: 'Funktionshyra', href: '/losningar/funktionshyra' },
      { name: 'Leasing', href: '/losningar/leasing' },
      { name: 'Service & Underhåll', href: '/losningar/service' },
    ],
  },
  {
    name: 'Verktyg',
    href: '/verktyg',
    submenu: [
      { name: 'Kapacitetsberäknare', href: '/verktyg/kapacitetsberakning' },
      { name: 'ROI-kalkylator', href: '/verktyg/roi-simulator' },
      { name: 'Dimensioneringsguide', href: '/verktyg/dimensionering' },
      { name: 'Checklista', href: '/verktyg/checklista' },
    ],
  },
  { name: 'Kunskap', href: '/resurser' },
  { name: 'Om oss', href: '/om-oss' },
];

// Logo Component
function BranschLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      </div>
      <span className="text-xl font-semibold text-slate-900">
        <span className="text-brand-600">Bransch</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemName: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveSubmenu(itemName);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container flex h-16 items-center justify-between" aria-label="Global">
        {/* Logo */}
        <BranschLogo />

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-slate-700 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Öppna huvudmeny</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-x-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900',
                  activeSubmenu === item.name && 'bg-slate-100 text-slate-900'
                )}
              >
                {item.name}
                {item.submenu && (
                  <svg className={cn('h-4 w-4 text-slate-400 transition-transform', activeSubmenu === item.name && 'rotate-180')} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                )}
              </Link>

              {/* Submenu */}
              {item.submenu && activeSubmenu === item.name && (
                <div
                  className="absolute left-0 top-full pt-2 animate-fade-in"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-elevated">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-3">
          <Button variant="ghost" size="sm" className="text-slate-600">
            <Link href="/kontakt">Kontakta oss</Link>
          </Button>
          <Button size="sm">
            <Link href="/boka-demo">Boka konsultation</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white animate-slide-down">
          <div className="container py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-1 pb-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <Button variant="ghost" className="w-full justify-center">
                <Link href="/kontakt">Kontakta oss</Link>
              </Button>
              <Button className="w-full justify-center">
                <Link href="/boka-demo">Boka konsultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
