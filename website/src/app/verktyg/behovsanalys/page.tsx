import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Behovsanalys',
  description: 'Kartlägg era tvättbehov och få skräddarsydda rekommendationer',
};

export default function BehovsanalysPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 text-6xl">📋</div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Behovsanalys
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Kartlägg era tvättbehov och få skräddarsydda rekommendationer
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
                <CardTitle>Varför göra en behovsanalys?</CardTitle>
                <CardDescription>
                  Rätt lösning från start sparar tid, pengar och besvär
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-ken-gray-900 mb-3">
                      Vår behovsanalys kartlägger:
                    </h3>
                    <ul className="space-y-2 text-ken-gray-600">
                      <li>✓ Nuvarande tvättsituation och utmaningar</li>
                      <li>✓ Volymer och typ av textilier</li>
                      <li>✓ Hygien- och kvalitetskrav</li>
                      <li>✓ Tidsramar och arbetsflöden</li>
                      <li>✓ Energi- och hållbarhetsmål</li>
                      <li>✓ Budget och investeringsutrymme</li>
                      <li>✓ Framtida behov och tillväxtplaner</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-ken-blue-50 p-4 rounded-lg">
                      <div className="text-3xl mb-2">1️⃣</div>
                      <h4 className="font-semibold text-ken-gray-900 mb-2">Kartläggning</h4>
                      <p className="text-sm text-ken-gray-600">
                        Vi analyserar era nuvarande behov och utmaningar
                      </p>
                    </div>
                    <div className="bg-ken-blue-50 p-4 rounded-lg">
                      <div className="text-3xl mb-2">2️⃣</div>
                      <h4 className="font-semibold text-ken-gray-900 mb-2">Analys</h4>
                      <p className="text-sm text-ken-gray-600">
                        Vi tar fram skräddarsydda lösningsförslag
                      </p>
                    </div>
                    <div className="bg-ken-blue-50 p-4 rounded-lg">
                      <div className="text-3xl mb-2">3️⃣</div>
                      <h4 className="font-semibold text-ken-gray-900 mb-2">Rekommendation</h4>
                      <p className="text-sm text-ken-gray-600">
                        Ni får en komplett rapport med ROI-analys
                      </p>
                    </div>
                  </div>

                  <div className="bg-ken-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-ken-green mb-2">
                      Boka en kostnadsfri behovsanalys!
                    </h3>
                    <p className="text-ken-gray-700 mb-4">
                      Våra experter gör en grundlig analys av era behov helt kostnadsfritt.
                      Ni får en skriftlig rapport med rekommendationer och kostnadsberäkningar.
                    </p>
                    <ul className="space-y-2 text-sm text-ken-gray-700 mb-4">
                      <li>✓ Platsbesök av våra specialister</li>
                      <li>✓ Detaljerad kartläggning av behov</li>
                      <li>✓ Skriftlig rapport med rekommendationer</li>
                      <li>✓ ROI-beräkning och besparingspotential</li>
                      <li>✓ Förslag på utrustning och lösningar</li>
                    </ul>
                    <Button asChild size="lg">
                      <Link href="/kontakt">Boka kostnadsfri behovsanalys</Link>
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-ken-gray-900 mb-3">
                      Vad ingår i rapporten?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="text-2xl">📊</div>
                        <div>
                          <div className="font-semibold text-ken-gray-900">Nulägesanalys</div>
                          <p className="text-sm text-ken-gray-600">
                            Kartläggning av era nuvarande kostnader, volymer och utmaningar
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-2xl">💡</div>
                        <div>
                          <div className="font-semibold text-ken-gray-900">Lösningsförslag</div>
                          <p className="text-sm text-ken-gray-600">
                            Skräddarsydda rekommendationer baserade på era specifika behov
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-2xl">💰</div>
                        <div>
                          <div className="font-semibold text-ken-gray-900">Ekonomisk analys</div>
                          <p className="text-sm text-ken-gray-600">
                            LCC-beräkning, ROI-analys och besparingspotential
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-2xl">📅</div>
                        <div>
                          <div className="font-semibold text-ken-gray-900">Implementeringsplan</div>
                          <p className="text-sm text-ken-gray-600">
                            Tidsplan för installation, utbildning och driftsättning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="mt-12 bg-ken-blue-600 rounded-lg p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Redo att komma igång?
              </h2>
              <p className="text-lg text-ken-blue-50 mb-6">
                Boka en kostnadsfri behovsanalys idag och ta första steget mot
                en mer effektiv och lönsam tvättlösning
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="outline" asChild className="bg-white text-ken-blue hover:bg-ken-blue-50">
                  <Link href="/kontakt">Kontakta oss</Link>
                </Button>
                <Button size="lg" asChild className="bg-ken-green hover:bg-ken-green-600">
                  <Link href="/boka-demo">Boka möte</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
