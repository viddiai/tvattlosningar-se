import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Om Tvättsystem',
  description: 'Läs mer om Tvättsystem och vårt uppdrag',
};

export default function OmOssPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Om Tvättsystem
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Sveriges ledande leverantör av professionella tvättlösningar
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-ken-gray-900 mb-6">
              Vårt uppdrag
            </h2>
            <p className="text-lg text-ken-gray-600 mb-4">
              Vi levererar energieffektiva och kostnadsbesparande tvättlösningar till Sveriges företag och organisationer.
              Med över 20 års erfarenhet hjälper vi våra kunder att minska sina driftskostnader med upp till 40% samtidigt
              som vi bidrar till en hållbar framtid.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ken-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4 max-w-5xl mx-auto text-center">
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-ken-blue mb-2">750+</div>
                <p className="text-ken-gray-600">Nöjda kunder</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-ken-blue mb-2">40%</div>
                <p className="text-ken-gray-600">Kostnadsbesparing</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-ken-blue mb-2">24/7</div>
                <p className="text-ken-gray-600">Support</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-ken-blue mb-2">20+</div>
                <p className="text-ken-gray-600">År i branschen</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-ken-gray-900 mb-12 text-center">
              Våra värderingar
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-ken-blue mb-2">🌱 Hållbarhet</h3>
                <p className="text-ken-gray-600">
                  Vi är engagerade i att minska miljöpåverkan genom energieffektiva lösningar
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ken-blue mb-2">🤝 Partnerskap</h3>
                <p className="text-ken-gray-600">
                  Vi bygger långsiktiga relationer med våra kunder baserade på förtroende
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ken-blue mb-2">💡 Innovation</h3>
                <p className="text-ken-gray-600">
                  Vi investerar kontinuerligt i ny teknik för att leverera bästa möjliga lösningar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ken-blue-600 py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vill ni veta mer om oss?
          </h2>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" variant="outline" asChild className="bg-white text-ken-blue hover:bg-ken-blue-50">
              <Link href="/kontakt">Kontakta oss</Link>
            </Button>
            <Button size="lg" asChild className="bg-ken-green hover:bg-ken-green-600">
              <Link href="/boka-demo">Boka demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
