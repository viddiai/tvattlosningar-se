import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

const industries = [
  {
    name: 'Sjukvård',
    description: 'Hygieniska lösningar för sjukhus och vårdenheter',
    icon: '🏥',
    href: '/branscher/sjukvard',
    stats: '200+ vårdenheter',
  },
  {
    name: 'Hotell',
    description: 'Effektiva tvättlösningar för hotell och restaurang',
    icon: '🏨',
    href: '/branscher/hotell',
    stats: '150+ hotell',
  },
  {
    name: 'Räddningstjänst',
    description: 'Specialiserade lösningar för räddningskläder',
    icon: '🚒',
    href: '/branscher/raddningstjanst',
    stats: '80+ brandstationer',
  },
  {
    name: 'Industri',
    description: 'Robusta system för industriell tvätt',
    icon: '🏭',
    href: '/branscher/industri',
    stats: '300+ företag',
  },
];

const features = [
  {
    name: 'Energieffektivitet',
    description: 'Upp till 40% lägre energiförbrukning med våra moderna system',
    icon: '⚡',
  },
  {
    name: 'Hållbarhet',
    description: '35% mindre vattenförbrukning och minskad miljöpåverkan',
    icon: '♻️',
  },
  {
    name: 'Service & Support',
    description: '24/7 support och förebyggande underhåll för maximal drifttid',
    icon: '🛠️',
  },
  {
    name: 'Kvalitet',
    description: 'Certifierade lösningar som uppfyller alla branschstandarder',
    icon: '✓',
  },
];

const tools = [
  {
    name: 'LCC Kalkylator',
    description: 'Beräkna livscykelkostnad och jämför med er nuvarande lösning',
    href: '/verktyg/lcc-kalkylator',
    icon: '💰',
  },
  {
    name: 'ROI Simulator',
    description: 'Simulera avkastning och se payback-period för olika scenarios',
    href: '/verktyg/roi-simulator',
    icon: '📊',
  },
  {
    name: 'Kapacitetsberäkning',
    description: 'Få rekommendationer för optimal tvättlösning baserat på era behov',
    href: '/verktyg/kapacitetsberakning',
    icon: '📐',
  },
];

const caseStudies = [
  {
    company: 'Karolinska Universitetssjukhuset',
    industry: 'Sjukvård',
    result: '45% energibesparing',
    image: '/images/cases/karolinska.jpg',
    href: '/case/karolinska',
  },
  {
    company: 'Grand Hôtel Stockholm',
    industry: 'Hotell',
    result: '30% kostnadsminskning',
    image: '/images/cases/grand-hotel.jpg',
    href: '/case/grand-hotel',
  },
  {
    company: 'Räddningstjänsten Stockholm',
    industry: 'Räddningstjänst',
    result: '99.9% hygienstandard',
    image: '/images/cases/raddning.jpg',
    href: '/case/raddningstjansten',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ken-blue to-ken-blue-700 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl animate-fade-in">
              Professionella Tvättlösningar för Sveriges Företag
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-100 animate-slide-up">
              Vi levererar kompletta, energieffektiva tvättsystem med förstklassig service.
              Minska era kostnader med upp till 40% samtidigt som ni förbättrar hållbarheten.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="outline" className="bg-white text-ken-blue hover:bg-ken-gray-50" asChild>
                <Link href="/boka-demo">Boka Gratis Konsultation</Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10" asChild>
                <Link href="/verktyg/lcc-kalkylator">Beräkna Besparingar →</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold">750+</div>
                <div className="mt-1 text-sm text-ken-blue-100">Nöjda Kunder</div>
              </div>
              <div>
                <div className="text-4xl font-bold">40%</div>
                <div className="mt-1 text-sm text-ken-blue-100">Energibesparing</div>
              </div>
              <div>
                <div className="text-4xl font-bold">24/7</div>
                <div className="mt-1 text-sm text-ken-blue-100">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ken-gray-900 sm:text-4xl">
              Specialiserade Lösningar för Er Bransch
            </h2>
            <p className="mt-4 text-lg text-ken-gray-600">
              Vi förstår de unika utmaningarna inom olika branscher och levererar skräddarsydda lösningar
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link key={industry.name} href={industry.href}>
                <Card className="h-full transition-all hover:shadow-ken hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <div className="text-5xl mb-4">{industry.icon}</div>
                    <CardTitle className="text-xl">{industry.name}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm font-semibold text-ken-blue">{industry.stats}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/branscher">Se Alla Branscher →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-ken-gray-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ken-gray-900 sm:text-4xl">
              Varför Välja KEN?
            </h2>
            <p className="mt-4 text-lg text-ken-gray-600">
              Vi kombinerar moderna tvättlösningar med förstklassig service och support
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ken-blue text-3xl text-white">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ken-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-ken-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ken-gray-900 sm:text-4xl">
              Interaktiva Verktyg
            </h2>
            <p className="mt-4 text-lg text-ken-gray-600">
              Använd våra verktyg för att beräkna besparingar och planera er tvättlösning
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
            {tools.map((tool) => (
              <Card key={tool.name} className="hover:shadow-ken transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <CardTitle>{tool.name}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={tool.href}>Prova Verktyget →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-ken-gray-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ken-gray-900 sm:text-4xl">
              Framgångshistorier från Våra Kunder
            </h2>
            <p className="mt-4 text-lg text-ken-gray-600">
              Se hur vi har hjälpt företag att minska kostnader och förbättra hållbarheten
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <Link key={caseStudy.company} href={caseStudy.href}>
                <Card className="h-full overflow-hidden hover:shadow-ken transition-all hover:scale-105 cursor-pointer">
                  <div className="aspect-video bg-ken-gray-200" />
                  <CardHeader>
                    <div className="text-sm font-semibold text-ken-blue">{caseStudy.industry}</div>
                    <CardTitle className="text-xl">{caseStudy.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-ken-green">{caseStudy.result}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/case">Läs Fler Case Studies →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ken-blue py-24 text-white">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Redo att Minska Era Tvättkostnader?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ken-blue-100">
            Boka en kostnadsfri konsultation med våra experter. Vi analyserar era behov och visar hur mycket ni kan spara.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="outline" className="bg-white text-ken-blue hover:bg-ken-gray-50" asChild>
              <Link href="/boka-demo">Boka Gratis Konsultation</Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10" asChild>
              <Link href="/kontakt">Kontakta Oss →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
