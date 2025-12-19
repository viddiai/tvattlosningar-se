import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Våra Lösningar',
  description: 'Kompletta tvättlösningar för professionell användning',
};

export default function LosningarPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Våra Lösningar
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Kompletta tvättlösningar anpassade efter era behov
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <Link href="/losningar/tvattutrustning">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl mb-4">🔧</div>
                  <CardTitle>Tvättutrustning</CardTitle>
                  <CardDescription>Professionella tvättmaskiner och torktumlare</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-ken-gray-600">
                    Högkvalitativ utrustning från ledande tillverkare med branschens bästa prestanda
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/losningar/service">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl mb-4">🛠️</div>
                  <CardTitle>Serviceprogram</CardTitle>
                  <CardDescription>Förebyggande underhåll och snabb support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-ken-gray-600">
                    24/7 support, förebyggande underhåll och snabba reparationer för minimal stilleståndstid
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/losningar/energi">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl mb-4">⚡</div>
                  <CardTitle>Energioptimering</CardTitle>
                  <CardDescription>Minska era driftskostnader</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-ken-gray-600">
                    Avancerade system för värmeåtervinning och energieffektiv drift
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/losningar/hallbarhet">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl mb-4">🌱</div>
                  <CardTitle>Hållbarhet</CardTitle>
                  <CardDescription>Miljövänliga tvättlösningar</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-ken-gray-600">
                    Certifierade system som minskar både miljöpåverkan och kostnader
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
