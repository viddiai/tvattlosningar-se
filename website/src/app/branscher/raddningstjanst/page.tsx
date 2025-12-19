import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Tvättlösningar för Räddningstjänst',
  description: 'Specialiserade tvättlösningar för räddningstjänst och brandförsvar',
};

export default function RaddningstjanstPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 text-6xl">🚒</div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Tvättlösningar för Räddningstjänst
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Säkra och effektiva lösningar för tvätt av skyddsutrustning och arbetskläder
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

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-ken-gray-900 mb-6">
              Specialiserad tvätt för räddningstjänsten
            </h2>
            <p className="text-lg text-ken-gray-600 mb-4">
              Räddningstjänstens utrustning utsätts för extrema förhållanden och kräver specialiserad tvätt
              för att bibehålla skyddsfunktionen. Våra system är designade för att hantera kraftigt nedsmutsade
              textilier samtidigt som de bevarar materialets egenskaper.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
