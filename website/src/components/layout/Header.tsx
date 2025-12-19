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
      { name: 'Sjukvård', href: '/branscher/sjukvard' },
      { name: 'Hotell & Restaurang', href: '/branscher/hotell' },
      { name: 'Räddningstjänst', href: '/branscher/raddningstjanst' },
      { name: 'Industri', href: '/branscher/industri' },
      { name: 'Utbildning', href: '/branscher/utbildning' },
      { name: 'Försvar', href: '/branscher/forsvar' },
      { name: 'Fastighet', href: '/branscher/fastighet' },
    ],
  },
  {
    name: 'Lösningar',
    href: '/losningar',
    submenu: [
      { name: 'Tvättutrustning', href: '/losningar/tvattutrustning' },
      { name: 'Serviceprogram', href: '/losningar/service' },
      { name: 'Energioptimering', href: '/losningar/energi' },
      { name: 'Hållbarhet', href: '/losningar/hallbarhet' },
    ],
  },
  {
    name: 'Verktyg',
    href: '/verktyg',
    submenu: [
      { name: 'LCC Kalkylator', href: '/verktyg/lcc-kalkylator' },
      { name: 'ROI Simulator', href: '/verktyg/roi-simulator' },
      { name: 'Kapacitetsberäkning', href: '/verktyg/kapacitetsberakning' },
      { name: 'Behovsanalys', href: '/verktyg/behovsanalys' },
    ],
  },
  { name: 'Case', href: '/case' },
  { name: 'Resurser', href: '/resurser' },
  { name: 'Om KEN', href: '/om-oss' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemName: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveSubmenu(itemName);
  };

  const handleMouseLeave = () => {
    // Delay closing the menu by 200ms
    closeTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 200);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ken-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Tvättsystem</span>
            <span className="text-3xl font-bold text-ken-blue">Tvättsystem</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-ken-gray-700"
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
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className="flex items-center gap-x-1 text-base font-semibold leading-6 text-ken-gray-900 hover:text-ken-blue transition-colors"
              >
                {item.name}
                {item.submenu && (
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>

              {/* Submenu */}
              {item.submenu && activeSubmenu === item.name && (
                <div
                  className="absolute left-0 top-full mt-3 w-64 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 animate-fade-in"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-3 text-sm text-ken-gray-700 hover:bg-ken-blue-50 hover:text-ken-blue transition-colors"
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

        {/* CTA buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" asChild>
            <Link href="/kontakt">Kontakta oss</Link>
          </Button>
          <Button asChild>
            <Link href="/boka-demo">Gratis rådgivning</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden animate-slide-down">
          <div className="space-y-2 px-4 pb-6 pt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-ken-gray-900 hover:bg-ken-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block rounded-lg px-3 py-2 text-sm leading-7 text-ken-gray-600 hover:bg-ken-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 space-y-2">
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/kontakt">Kontakta oss</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/boka-demo">Gratis rådgivning</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
