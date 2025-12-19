import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Kapacitetsberäkning',
  description: 'Räkna ut rätt systemstorlek för era tvättbehov',
};

export default function KapacitetsberakningPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 text-6xl">⚙️</div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Kapacitetsberäkning
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Få rekommendationer för vilken utrustning som passar era volymer
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
                <CardTitle>Rätt kapacitet är avgörande</CardTitle>
                <CardDescription>
                  För liten kapacitet skapar flaskhalsar, för stor kapacitet slösar pengar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-ken-gray-900 mb-3">
                      Verktyget hjälper er att bestämma:
                    </h3>
                    <ul className="space-y-2 text-ken-gray-600">
                      <li>✓ Antal maskiner som behövs</li>
                      <li>✓ Maskinernas storlek (kg-kapacitet)</li>
                      <li>✓ Antal tvättcykler per dag</li>
                      <li>✓ Peak-kapacitet vs. normalkapacitet</li>
                      <li>✓ Buffertkapacitet för toppar</li>
                      <li>✓ Optimal maskinpark för er verksamhet</li>
                    </ul>
                  </div>

                  <div className="bg-ken-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-ken-blue mb-3">
                      Faktorer vi analyserar:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-ken-gray-700">
                      <div>
                        <div className="font-semibold mb-1">Volym</div>
                        <ul className="space-y-1 text-ken-gray-600">
                          <li>• Kg tvätt per dag/vecka</li>
                          <li>• Typ av textilier</li>
                          <li>• Smutsnivå</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Tidsramar</div>
                        <ul className="space-y-1 text-ken-gray-600">
                          <li>• Öppettider</li>
                          <li>• Omsättningstid</li>
                          <li>• Topptimmar</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Utrymme</div>
                        <ul className="space-y-1 text-ken-gray-600">
                          <li>• Tillgänglig yta</li>
                          <li>• Takhöjd</li>
                          <li>• Infrastruktur</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Framtid</div>
                        <ul className="space-y-1 text-ken-gray-600">
                          <li>• Planerad tillväxt</li>
                          <li>• Säsongsvariationer</li>
                          <li>• Utbyggnadsmöjligheter</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-ken-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-ken-green mb-2">
                      Interaktivt verktyg kommer snart!
                    </h3>
                    <p className="text-ken-gray-700 mb-4">
                      Vår interaktiva kapacitetsberäkning är under utveckling. Kontakta oss så hjälper
                      vi er med en professionell analys av era behov redan idag.
                    </p>
                    <Button asChild>
                      <Link href="/kontakt">Boka kostnadsfri kapacitetsanalys</Link>
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-ken-gray-900 mb-3">
                      Vanliga dimensioneringsregler:
                    </h3>
                    <div className="space-y-3 text-ken-gray-600">
                      <div className="p-4 bg-white border border-ken-gray-200 rounded-lg">
                        <div className="font-semibold text-ken-gray-900 mb-1">Sjukvård</div>
                        <p className="text-sm">1.5-2 kg tvättutrustning per vårdplats</p>
                      </div>
                      <div className="p-4 bg-white border border-ken-gray-200 rounded-lg">
                        <div className="font-semibold text-ken-gray-900 mb-1">Hotell</div>
                        <p className="text-sm">0.8-1.2 kg tvättutrustning per rum</p>
                      </div>
                      <div className="p-4 bg-white border border-ken-gray-200 rounded-lg">
                        <div className="font-semibold text-ken-gray-900 mb-1">Räddningstjänst</div>
                        <p className="text-sm">15-25 kg tvättutrustning per station</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Tools */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-ken-gray-900 mb-6">Andra användbara verktyg</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Link href="/verktyg/behovsanalys">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>Behovsanalys</CardTitle>
                      <CardDescription>Kartlägg era specifika behov</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
                <Link href="/verktyg/lcc-kalkylator">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>LCC Kalkylator</CardTitle>
                      <CardDescription>Beräkna totala livscykelkostnaden</CardDescription>
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
