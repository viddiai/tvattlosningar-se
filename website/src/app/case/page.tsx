import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Kundcase',
  description: 'Se hur våra kunder har minskat sina kostnader med våra tvättlösningar',
};

export default function CasePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Kundcase
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Upptäck hur våra kunder har lyckats med våra tvättlösningar
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-3">🏥</div>
                <CardTitle>Karolinska Universitetssjukhuset</CardTitle>
                <CardDescription>Sjukvård</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-ken-gray-600 mb-4">
                  Minskade tvättkostnaderna med 42% genom implementering av energieffektiva system
                </p>
                <p className="text-sm font-semibold text-ken-green">Besparing: 1.2M kr/år</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-3">🏨</div>
                <CardTitle>Grand Hôtel Stockholm</CardTitle>
                <CardDescription>Hotell</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-ken-gray-600 mb-4">
                  Ökade kapaciteten med 35% samtidigt som energiförbrukningen minskade
                </p>
                <p className="text-sm font-semibold text-ken-green">Besparing: 450k kr/år</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-3">🚒</div>
                <CardTitle>Räddningstjänsten Stockholm</CardTitle>
                <CardDescription>Räddningstjänst</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-ken-gray-600 mb-4">
                  Förbättrad hygien och kortare tvättider för skyddsutrustning
                </p>
                <p className="text-sm font-semibold text-ken-green">Besparing: 320k kr/år</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ken-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ken-gray-900 mb-4">
            Vill ni också uppnå dessa resultat?
          </h2>
          <p className="text-lg text-ken-gray-600 mb-8">
            Kontakta oss för en kostnadsfri analys av er besparingspotential
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/kontakt">Kontakta oss</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/boka-demo">Boka demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
