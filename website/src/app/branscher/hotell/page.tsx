import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Tvättlösningar för Hotell & Restaurang',
  description: 'Effektiva och pålitliga tvättlösningar för hotell och restauranger',
};

export default function HotellPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 text-6xl">🏨</div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Tvättlösningar för Hotell & Restaurang
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Leverera perfekt renhet varje gång med våra effektiva tvättlösningar för besöksnäringen
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="bg-white text-ken-blue hover:bg-ken-blue-50">
                <Link href="/kontakt">Kontakta oss</Link>
              </Button>
              <Button size="lg" asChild className="bg-ken-green hover:bg-ken-green-600">
                <Link href="/boka-demo">Boka Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-ken-gray-900 mb-6">
              Perfekt renhet för era gäster
            </h2>
            <p className="text-lg text-ken-gray-600 mb-4">
              I besöksnäringen är renhet och snabb omsättning avgörande. Våra tvättlösningar är designade
              för att hantera stora volymer av lakan, handdukar och restaurangduk med minimal energiförbrukning
              och maximal effektivitet.
            </p>
            <p className="text-lg text-ken-gray-600">
              Med vår expertis kan ni minska tvättkostnaderna med upp till 40% samtidigt som ni säkerställer
              högsta kvalitet på era textilier.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ken-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ken-gray-900 mb-4">
            Vill du veta mer?
          </h2>
          <Button size="lg" asChild>
            <Link href="/kontakt">Kontakta oss för en kostnadsfri analys</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
