import Link from 'next/link';

const footerNavigation = {
  branscher: [
    { name: 'Sjukvård', href: '/branscher/sjukvard' },
    { name: 'Hotell', href: '/branscher/hotell' },
    { name: 'Räddningstjänst', href: '/branscher/raddningstjanst' },
    { name: 'Industri', href: '/branscher/industri' },
  ],
  losningar: [
    { name: 'Tvättutrustning', href: '/losningar/tvattutrustning' },
    { name: 'Service', href: '/losningar/service' },
    { name: 'Energioptimering', href: '/losningar/energi' },
    { name: 'Hållbarhet', href: '/losningar/hallbarhet' },
  ],
  resurser: [
    { name: 'Case Studies', href: '/case' },
    { name: 'Blogg', href: '/blogg' },
    { name: 'Guider', href: '/resurser/guider' },
    { name: 'Webinarer', href: '/webinar' },
  ],
  foretag: [
    { name: 'Om KEN', href: '/om-oss' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Karriär', href: '/karriar' },
    { name: 'Nyheter', href: '/nyheter' },
  ],
  legal: [
    { name: 'Integritetspolicy', href: '/integritet' },
    { name: 'Användarvillkor', href: '/villkor' },
    { name: 'Cookies', href: '/cookies' },
  ],
};

const socialMedia = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/ken-sverige',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@kensverige',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/kensverige',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-ken-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company info */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded bg-ken-blue flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <span className="text-2xl font-bold">KEN Sverige</span>
            </div>
            <p className="text-base text-ken-gray-300">
              Ledande leverantör av professionella tvättlösningar för sjukvård, hotell, industri och offentlig sektor.
            </p>
            <div className="flex space-x-6">
              {socialMedia.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-ken-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Branscher</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.branscher.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-ken-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Lösningar</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.losningar.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-ken-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Resurser</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.resurser.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-ken-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Företag</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.foretag.map((item) => (
                    <li key={item.name}> <Link
                        href={item.href}
                        className="text-sm leading-6 text-ken-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-ken-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs leading-5 text-ken-gray-400">
              &copy; {new Date().getFullYear()} KEN Sverige AB. Alla rättigheter förbehållna.
            </p>
            <div className="flex gap-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs leading-5 text-ken-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
