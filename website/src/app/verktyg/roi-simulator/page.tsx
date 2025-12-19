import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'ROI Simulator - Avkastning på investering',
  description: 'Beräkna hur snabbt din investering i tvättlösningar betalar sig',
};

export default function ROISimulatorPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 text-6xl">📈</div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              ROI Simulator
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Se hur snabbt er investering betalar sig genom energibesparingar
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
                <CardTitle>Vad är ROI?</CardTitle>
                <CardDescription>
                  Return on Investment (ROI) visar hur lönsam en investering är
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-ken-gray-900 mb-3">
                      Simulatorn beräknar:
                    </h3>
                    <ul className="space-y-2 text-ken-gray-600">
                      <li>✓ Återbetalningstid (payback period)</li>
                      <li>✓ Årliga besparingar</li>
                      <li>✓ Total besparing över 10 år</li>
                      <li>✓ ROI i procent</li>
                      <li>✓ Kumulativa besparingar över tid</li>
                    </ul>
                  </div>

                  <div className="bg-ken-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-ken-green mb-2">
                      Typisk besparing: 40%
                    </h3>
                    <p className="text-ken-gray-700 mb-4">
                      Våra kunder sparar i genomsnitt 40% på sina tvättkostnader. För ett
                      medelstort system innebär det besparingar på 200 000 - 500 000 kr per år.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-ken-green">1-2 år</div>
                        <div className="text-sm text-ken-gray-600">Återbetalningstid</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-ken-green">40%</div>
                        <div className="text-sm text-ken-gray-600">Kostnadsbesparing</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-ken-green">2.5M kr</div>
                        <div className="text-sm text-ken-gray-600">Besparing/10 år</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-ken-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-ken-blue mb-2">
                      Interaktiv simulator kommer snart!
                    </h3>
                    <p className="text-ken-gray-700 mb-4">
                      Vår interaktiva ROI-simulator är under utveckling. Kontakta oss så hjälper vi er
                      med en personlig ROI-analys baserad på era faktiska siffror.
                    </p>
                    <Button asChild>
                      <Link href="/kontakt">Boka kostnadsfri ROI-analys</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Tools */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-ken-gray-900 mb-6">Andra användbara verktyg</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Link href="/verktyg/lcc-kalkylator">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>LCC Kalkylator</CardTitle>
                      <CardDescription>Beräkna totala livscykelkostnaden</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
                <Link href="/verktyg/behovsanalys">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>Behovsanalys</CardTitle>
                      <CardDescription>Kartlägg era tvättbehov</CardDescription>
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
