import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Branscher',
  description: 'Vi levererar skräddarsydda tvättlösningar för olika branscher',
};

const branches = [
  {
    name: 'Sjukvård',
    href: '/branscher/sjukvard',
    description: 'Hygieniska lösningar för sjukhus och vårdenheter',
    icon: '🏥',
    stats: '200+ vårdenheter',
  },
  {
    name: 'Hotell & Restaurang',
    href: '/branscher/hotell',
    description: 'Effektiva tvättlösningar för besöksnäringen',
    icon: '🏨',
    stats: '150+ hotell',
  },
  {
    name: 'Räddningstjänst',
    href: '/branscher/raddningstjanst',
    description: 'Specialiserade lösningar för räddningstjänst och brandförsvar',
    icon: '🚒',
    stats: '80+ brandstationer',
  },
  {
    name: 'Industri',
    href: '/branscher/industri',
    description: 'Robusta system för industriell tvätt',
    icon: '🏭',
    stats: '120+ företag',
  },
  {
    name: 'Utbildning',
    href: '/branscher/utbildning',
    description: 'Kostnadseffektiva lösningar för skolor och universitet',
    icon: '🎓',
    stats: '90+ institutioner',
  },
  {
    name: 'Försvar',
    href: '/branscher/forsvar',
    description: 'Säkra tvättlösningar för Försvarsmakten',
    icon: '🛡️',
    stats: '30+ enheter',
  },
  {
    name: 'Fastighet',
    href: '/branscher/fastighet',
    description: 'Tvättlösningar för bostadsrättsföreningar och fastighetsbolag',
    icon: '🏢',
    stats: '200+ fastigheter',
  },
];

export default function BrancherPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Specialiserade Lösningar för Er Bransch
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Vi förstår att varje bransch har unika behov. Därför levererar vi skräddarsydda tvättlösningar
              som är optimerade för just er verksamhet.
            </p>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch) => (
              <Link key={branch.name} href={branch.href}>
                <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
                  <CardHeader>
                    <div className="mb-4 text-5xl">{branch.icon}</div>
                    <CardTitle>{branch.name}</CardTitle>
                    <CardDescription>{branch.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-ken-blue">{branch.stats}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ken-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-ken-gray-900">
              Hitta inte er bransch?
            </h2>
            <p className="mt-4 text-lg text-ken-gray-600">
              Kontakta oss så hjälper vi er att hitta rätt lösning
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/kontakt">Kontakta oss</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
