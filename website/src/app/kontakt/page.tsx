import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Kontakta oss',
  description: 'Kontakta Tvättsystem för en kostnadsfri konsultation',
};

export default function KontaktPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Kontakta Oss
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Vi hjälper er att hitta rätt tvättlösning för er verksamhet
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">📞 Telefon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ken-gray-600">Ring oss på vardagar 08:00-17:00</p>
                <p className="text-lg font-semibold text-ken-blue mt-2">08-123 456 78</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">✉️ E-post</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ken-gray-600">Skicka oss ett meddelande</p>
                <p className="text-lg font-semibold text-ken-blue mt-2">info@tvattsystem.se</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">📍 Besök oss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ken-gray-600">Huvudkontor Stockholm</p>
                <p className="text-lg font-semibold text-ken-blue mt-2">Storgatan 1, 111 22 Stockholm</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="mt-16 max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Skicka oss ett meddelande</CardTitle>
                <CardDescription>Fyll i formuläret så hör vi av oss inom 24 timmar</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ken-gray-900 mb-2">
                      Namn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-md border border-ken-gray-300 px-4 py-2 focus:border-ken-blue focus:outline-none focus:ring-2 focus:ring-ken-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ken-gray-900 mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-md border border-ken-gray-300 px-4 py-2 focus:border-ken-blue focus:outline-none focus:ring-2 focus:ring-ken-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ken-gray-900 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-md border border-ken-gray-300 px-4 py-2 focus:border-ken-blue focus:outline-none focus:ring-2 focus:ring-ken-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-ken-gray-900 mb-2">
                      Företag
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full rounded-md border border-ken-gray-300 px-4 py-2 focus:border-ken-blue focus:outline-none focus:ring-2 focus:ring-ken-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ken-gray-900 mb-2">
                      Meddelande *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-md border border-ken-gray-300 px-4 py-2 focus:border-ken-blue focus:outline-none focus:ring-2 focus:ring-ken-blue"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Skicka meddelande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-ken-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ken-gray-900 mb-4">
            Behöver ni akut support?
          </h2>
          <p className="text-lg text-ken-gray-600 mb-6">
            Vår support är tillgänglig 24/7 för akuta ärenden
          </p>
          <p className="text-2xl font-bold text-ken-blue">
            Support: 08-123 456 99
          </p>
        </div>
      </section>
    </div>
  );
}
