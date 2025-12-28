import Link from 'next/link';

const footerNavigation = {
  branscher: [
    { name: 'Hotel & Restaurang', href: '/branscher/hotell' },
    { name: 'Vård & Omsorg', href: '/branscher/vard-omsorg' },
    { name: 'BRF', href: '/branscher/brf' },
    { name: 'Industri', href: '/branscher/industri' },
  ],
  resurser: [
    { name: 'Leasing', href: '/losningar/leasing' },
    { name: 'Blogg', href: '/blogg' },
    { name: 'Verktyg', href: '/verktyg' },
    { name: 'Om oss', href: '/om-oss' },
  ],
  kontakt: [
    { name: 'info@tvattlosningar.se', href: 'mailto:info@tvattlosningar.se' },
    { name: '08-123 456 78', href: 'tel:+4681234567' },
  ],
};

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
        <span className="text-brand-600">tvättlösningar</span>
        <span className="text-slate-400">.se</span>
      </span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Company info */}
          <div className="lg:col-span-4">
            <BranschLogo />
            <p className="mt-4 text-sm text-slate-500 max-w-xs">
              Din oberoende partner för professionella tvättlösningar.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Branscher
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.branscher.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Resurser
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.resurser.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Kontakt
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.kontakt.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} tvättlösningar.se. Alla rättigheter förbehållna.
            </p>
            <div className="flex gap-6">
              <Link
                href="/integritet"
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
              >
                Integritetspolicy
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
              >
                Cookiepolicy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
