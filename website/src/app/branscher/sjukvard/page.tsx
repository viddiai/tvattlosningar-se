import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tvättlösningar för Sjukvård',
  description:
    'Specialiserade tvättlösningar för sjukhus och vårdenheter. Hygien, energieffektivitet och 24/7 support. Uppfyller alla vårdstandarder.',
};

const challenges = [
  {
    icon: '🦠',
    title: 'Strikt Hygienkrav',
    description: 'Krav på dekontaminering och desinficering enligt SOSFS och ISO-standarder',
  },
  {
    icon: '⏱️',
    title: 'Hög Tillgänglighet',
    description: 'Kontinuerlig tillgång till rent linne är kritisk för patientvården',
  },
  {
    icon: '💰',
    title: 'Budget & Kostnader',
    description: 'Behov av kostnadseffektiva lösningar med långsiktig hållbarhet',
  },
  {
    icon: '📋',
    title: 'Dokumentation & Spårbarhet',
    description: 'Fullständig dokumentation och spårbarhet av tvättprocesser',
  },
];

const solutions = [
  {
    title: 'Termisk Desinfektion',
    description:
      'Specialiserade program som uppfyller RAO 2004:4 och säkerställer fullständig dekontaminering av smittförande textilier.',
    features: [
      'A0-värde >600 för säker desinfektion',
      'Validerade tvättprogram',
      'Automatisk dokumentation',
      'Spårbarhet per cykel',
    ],
  },
  {
    title: 'Kemisk Desinfektion',
    description:
      'Kemotermal desinfektion för känsliga textilier med komplett validering och dokumentation.',
    features: [
      'Certifierade desinfektionsmedel',
      'Lågtemperaturprogram (30-40°C)',
      'Skonsamt för textilier',
      'Verifierad mikrobiologisk effekt',
    ],
  },
  {
    title: 'Barriärtvättar',
    description:
      'Fysisk separation mellan smutsigt och rent linne för maximal smittskyddssäkerhet.',
    features: [
      'Dubbla dörrar (smutsig/ren sida)',
      'Förhindrar kontamination',
      'Uppfyller EU-direktiv',
      'Optimal för OR och IVA',
    ],
  },
  {
    title: 'Ozonbehandling',
    description: 'Miljövänlig desinfektion med ozon som reducerar kemikalieanvändning.',
    features: [
      'Kraftfull desinfektion',
      'Minskar kemikalier med 50%',
      'Lägre vattentemperatur',
      'Reducerad miljöpåverkan',
    ],
  },
];

const benefits = [
  {
    metric: '99.99%',
    label: 'Hygienstandard',
    description: 'Validerad enligt ISO 15883',
  },
  {
    metric: '45%',
    label: 'Energibesparing',
    description: 'Jämfört med standard system',
  },
  {
    metric: '99.9%',
    label: 'Drifttid',
    description: '24/7 support & backup',
  },
  {
    metric: '100%',
    label: 'Spårbarhet',
    description: 'Komplett dokumentation',
  },
];

const caseStudies = [
  {
    hospital: 'Karolinska Universitetssjukhuset',
    location: 'Stockholm',
    solution: 'Komplett tvättsystem med barriärtvättar',
    results: [
      '45% lägre energikostnad',
      '100% uppfyllnad av hygienkrav',
      '30% kortare tvättcykel',
      'Payback på 2.8 år',
    ],
    quote:
      'KEN:s lösning har inte bara halverat våra energikostnader utan även höjt hygienstandarden markant.',
    author: 'Eva Lindström, Fastighetschef',
  },
  {
    hospital: 'Region Uppsala',
    location: 'Uppsala',
    solution: '15 decentraliserade tvättsystem',
    results: [
      '40% minskad vattenkonsumtion',
      'Eliminerade outsourcing-kostnader',
      '35% snabbare omsättning',
      'ROI på 18 månader',
    ],
    quote:
      'Decentraliseringen gav oss kontroll över både kvalitet och kostnader. Fantastiskt resultat!',
    author: 'Anders Johansson, Inköpschef',
  },
];

const resources = [
  {
    type: 'Guide',
    title: 'Komplett Guide: Hygieniska Tvättsystem för Sjukvård',
    description: '42-sidig guide om SOSFS-krav, validering och optimal systemdesign',
    pages: '42 sidor',
    href: '/resurser/guide-sjukvard',
  },
  {
    type: 'Whitepaper',
    title: 'ROI-analys: On-premise vs Outsourcing för Sjukhus',
    description: 'Jämförande studie baserad på 25 svenska sjukhus',
    pages: '18 sidor',
    href: '/resurser/roi-sjukhus',
  },
  {
    type: 'Checklista',
    title: 'Upphandlingschecklista för Sjukvårdstvätt',
    description: 'Komplett kravspecifikation mall med 150+ punkter',
    pages: 'PDF',
    href: '/resurser/checklista-upphandling',
  },
];

export default function SjukvardPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ken-blue-600 to-ken-blue-800 py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-6 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
                Sjukvård & Vård
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Hygieniska Tvättlösningar för Sjukvård
              </h1>
              <p className="mt-6 text-lg leading-8 text-ken-blue-100">
                Specialiserade system som uppfyller SOSFS 2015:10 och ISO 15883. Säker desinfektion,
                fullständig spårbarhet och 99.9% drifttid med vår 24/7 support.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-white text-ken-blue hover:bg-ken-gray-50">
                  Boka Konsultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ladda Ner Branschguide
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6 text-ken-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">ISO 15883 Certifierad</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6 text-ken-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">SOSFS-Godkänd</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6 text-ken-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">200+ Vårdenheter</span>
                </div>
              </div>
            </div>

            {/* Video/Image placeholder */}
            <div className="relative">
              <div className="aspect-video rounded-lg bg-white/10 backdrop-blur">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                      <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <p className="text-sm">Se hur det fungerar (3:45)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ken-gray-900 sm:text-4xl">
              Utmaningar inom Sjukvårdstvätt
            </h2>
            <p className="mt-4 text-lg text-ken-gray-600">
              Vi förstår de unika krav och utmaningar som sjukvårdssektorn ställs inför
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map((challenge) => (
              <Card key={challenge.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ken-blue-50 text-4xl">
                    {challenge.icon}
                  </div>
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-ken-gray-50 py-24 sm:py-32">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ken-gray-900 sm:text-4xl">
              Våra Lösningar för Sjukvård
            </h2>
            <p className="mt-4 text-lg text-ken-gray-600">
              Specialiserade system som säkerställer högsta hygienstandarder
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
            {solutions.map((solution) => (
              <Card key={solution.title} className="hover:shadow-ken transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-ken-green"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-ken-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.label}>
                <div className="text-5xl font-bold text-ken-blue">{benefit.metric}</div>
                <div className="mt-2 text-lg font-semibold text-ken-gray-900">{benefit.label}</div>
                <div className="mt-1 text-sm text-ken-gray-600">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-ken-gray-50 py-24 sm:py-32">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ken-gray-900 sm:text-4xl">
              Framgångshistorier från Sjukvården
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-7xl space-y-8">
            {caseStudies.map((study) => (
              <Card key={study.hospital} className="overflow-hidden">
                <div className="grid gap-8 lg:grid-cols-2">
                  <CardHeader className="lg:p-12">
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-ken-blue">{study.location}</div>
                      <CardTitle className="text-3xl">{study.hospital}</CardTitle>
                      <div className="mt-2 text-base text-ken-gray-600">{study.solution}</div>
                    </div>

                    <div className="space-y-3">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-start gap-3">
                          <svg
                            className="mt-0.5 h-6 w-6 flex-shrink-0 text-ken-green"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="font-semibold text-ken-gray-900">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 border-l-4 border-ken-blue pl-4">
                      <blockquote className="text-lg italic text-ken-gray-700">"{study.quote}"</blockquote>
                      <p className="mt-2 text-sm font-semibold text-ken-gray-900">— {study.author}</p>
                    </div>
                  </CardHeader>

                  <div className="relative bg-ken-gray-200 lg:min-h-[400px]">
                    {/* Image placeholder */}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/case?branch=sjukvard">Läs Fler Case Studies →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ken-gray-900 sm:text-4xl">
              Resurser för Sjukvårdssektorn
            </h2>
            <p className="mt-4 text-lg text-ken-gray-600">
              Ladda ner guider, checklistor och whitepapers för att fördjupa er kunskap
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource.title} className="hover:shadow-ken transition-shadow">
                <CardHeader>
                  <div className="mb-2 text-sm font-semibold text-ken-blue">{resource.type}</div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-ken-gray-500">{resource.pages}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={resource.href}>Ladda Ner</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ken-blue py-24 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Redo att Optimera Er Tvättlösning?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ken-blue-100">
            Boka en kostnadsfri konsultation med våra sjukvårdsexperter. Vi analyserar era behov och visar
            konkreta besparingsmöjligheter.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-ken-blue hover:bg-ken-gray-50">
              Boka Gratis Konsultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/verktyg/lcc-kalkylator">Beräkna Besparingar →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
