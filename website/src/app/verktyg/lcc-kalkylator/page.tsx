import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'LCC Kalkylator - Livscykelkostnad',
  description: 'Beräkna den totala livscykelkostnaden för olika tvättlösningar',
};

export default function LCCKalkylatorPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 text-6xl">💰</div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              LCC Kalkylator
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Beräkna den totala livscykelkostnaden (Life Cycle Cost) för olika tvättlösningar
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Vad är LCC?</CardTitle>
                <CardDescription>
                  Livscykelkostnad (Life Cycle Cost) inkluderar alla kostnader under produktens livstid
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-ken-gray-900 mb-3">
                      Kalkylatorn beräknar:
                    </h3>
                    <ul className="space-y-2 text-ken-gray-600">
                      <li>✓ Inköpskostnad</li>
                      <li>✓ Installationskostnader</li>
                      <li>✓ Energikostnader (el, vatten, värme)</li>
                      <li>✓ Underhåll och service</li>
                      <li>✓ Kemikaliekostnader</li>
                      <li>✓ Reparationskostnader</li>
                      <li>✓ Restvärde</li>
                    </ul>
                  </div>

                  <div className="bg-ken-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-ken-blue mb-2">
                      Interaktiv kalkylator kommer snart!
                    </h3>
                    <p className="text-ken-gray-700 mb-4">
                      Vår interaktiva LCC-kalkylator är under utveckling. Kontakta oss så hjälper vi er
                      med en personlig LCC-analys idag.
                    </p>
                    <Button asChild>
                      <Link href="/kontakt">Boka kostnadsfri LCC-analys</Link>
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-ken-gray-900 mb-3">
                      Varför är LCC viktigt?
                    </h3>
                    <p className="text-ken-gray-600 mb-3">
                      Genom att titta på totalkostnaden över hela livscykeln istället för bara inköpspriset
                      kan ni göra mer ekonomiskt fördelaktiga val. Ofta är en dyrare maskin med lägre
                      driftskostnader billigare i längden.
                    </p>
                    <p className="text-ken-gray-600">
                      <strong>Exempel:</strong> En maskin som kostar 100 000 kr mer i inköp men sparar
                      50 000 kr/år i energi har tjänat in sin merkostnad på bara 2 år.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Tools */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-ken-gray-900 mb-6">Andra användbara verktyg</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Link href="/verktyg/roi-simulator">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>ROI Simulator</CardTitle>
                      <CardDescription>Beräkna avkastning på investering</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
                <Link href="/verktyg/kapacitetsberakning">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>Kapacitetsberäkning</CardTitle>
                      <CardDescription>Räkna ut rätt systemstorlek</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
