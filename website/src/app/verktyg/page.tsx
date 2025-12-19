import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Interaktiva Verktyg',
  description: 'Kalkylatorer och verktyg för att beräkna besparingar och kapacitet',
};

export default function VerktygPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Interaktiva Verktyg
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Beräkna kostnader, ROI och kapacitet för era tvättbehov
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">💰</div>
                <CardTitle>LCC Kalkylator</CardTitle>
                <CardDescription>Beräkna totala livscykelkostnaden</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-ken-gray-600 mb-6">
                  Jämför olika tvättlösningar baserat på totalkostnad över hela livscykeln
                </p>
                <Button asChild>
                  <Link href="/verktyg/lcc-kalkylator">Öppna kalkylator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">📈</div>
                <CardTitle>ROI Simulator</CardTitle>
                <CardDescription>Beräkna avkastning på investering</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-ken-gray-600 mb-6">
                  Se hur snabbt er investering betalar sig genom energibesparingar
                </p>
                <Button asChild>
                  <Link href="/verktyg/roi-simulator">Öppna simulator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">⚙️</div>
                <CardTitle>Kapacitetsberäkning</CardTitle>
                <CardDescription>Räkna ut rätt systemstorlek</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-ken-gray-600 mb-6">
                  Få rekommendationer för vilken utrustning som passar era volymer
                </p>
                <Button asChild>
                  <Link href="/verktyg/kapacitetsberakning">Starta beräkning</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">📋</div>
                <CardTitle>Behovsanalys</CardTitle>
                <CardDescription>Kartlägg era tvättbehov</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-ken-gray-600 mb-6">
                  Interaktivt verktyg som hjälper er identifiera era specifika behov
                </p>
                <Button asChild>
                  <Link href="/verktyg/behovsanalys">Starta analys</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
