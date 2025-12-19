import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Resurser',
  description: 'Guider, whitepapers och resurser om professionella tvättlösningar',
};

export default function ResurserPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Resurser & Kunskap
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Ladda ner guider, whitepapers och få insikter om professionella tvättlösningar
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Guides */}
            <Card>
              <CardHeader>
                <div className="text-4xl mb-3">📘</div>
                <CardTitle>Guider</CardTitle>
                <CardDescription>Praktiska guider för optimal drift</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-ken-gray-600">
                  <li>• Guide till energieffektiv tvätt</li>
                  <li>• Underhållsschema för tvättsystem</li>
                  <li>• Hygienrutiner för sjukvård</li>
                </ul>
              </CardContent>
            </Card>

            {/* Whitepapers */}
            <Card>
              <CardHeader>
                <div className="text-4xl mb-3">📄</div>
                <CardTitle>Whitepapers</CardTitle>
                <CardDescription>Fördjupad kunskap och forskning</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-ken-gray-600">
                  <li>• ROI-analys för tvättsystem</li>
                  <li>• Hållbarhet inom tvättindustrin</li>
                  <li>• Framtidens tvättlösningar</li>
                </ul>
              </CardContent>
            </Card>

            {/* Webinars */}
            <Card>
              <CardHeader>
                <div className="text-4xl mb-3">🎥</div>
                <CardTitle>Webinarier</CardTitle>
                <CardDescription>Inspelade presentationer</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-ken-gray-600">
                  <li>• Energioptimering i praktiken</li>
                  <li>• Case studies från kunder</li>
                  <li>• Ny teknik inom industritvätt</li>
                </ul>
              </CardContent>
            </Card>

            {/* Calculators */}
            <Card>
              <CardHeader>
                <div className="text-4xl mb-3">🧮</div>
                <CardTitle>Kalkylatorer</CardTitle>
                <CardDescription>Interaktiva verktyg</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/verktyg/lcc-kalkylator" className="text-ken-blue hover:underline">
                      • LCC Kalkylator
                    </Link>
                  </li>
                  <li>
                    <Link href="/verktyg/roi-simulator" className="text-ken-blue hover:underline">
                      • ROI Simulator
                    </Link>
                  </li>
                  <li>
                    <Link href="/verktyg/kapacitetsberakning" className="text-ken-blue hover:underline">
                      • Kapacitetsberäkning
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <div className="text-4xl mb-3">❓</div>
                <CardTitle>FAQ</CardTitle>
                <CardDescription>Vanliga frågor</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-ken-gray-600">
                  <li>• Hur fungerar service?</li>
                  <li>• Vad ingår i garantin?</li>
                  <li>• Leveranstider</li>
                </ul>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <div className="text-4xl mb-3">📧</div>
                <CardTitle>Nyhetsbrev</CardTitle>
                <CardDescription>Håll dig uppdaterad</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-ken-gray-600 mb-4">
                  Få tips, nyheter och erbjudanden direkt i din inkorg
                </p>
                <Button size="sm" className="w-full">
                  Prenumerera
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ken-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ken-gray-900 mb-4">
            Behöver ni personlig rådgivning?
          </h2>
          <p className="text-lg text-ken-gray-600 mb-8">
            Våra experter hjälper er gärna
          </p>
          <Button size="lg" asChild>
            <Link href="/kontakt">Kontakta oss</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
