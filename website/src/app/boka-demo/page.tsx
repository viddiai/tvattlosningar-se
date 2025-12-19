import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Boka Demo',
  description: 'Boka en kostnadsfri demo av våra tvättlösningar',
};

export default function BokaDemoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ken-blue-600 via-ken-blue-500 to-ken-blue-700 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Boka En Kostnadsfri Demo
            </h1>
            <p className="mt-6 text-lg leading-8 text-ken-blue-50">
              Se hur våra tvättlösningar kan minska era kostnader med upp till 40%
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-ken-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-semibold text-lg mb-2">Kostnadsfri analys</h3>
                <p className="text-ken-gray-600">Vi analyserar era behov och visar besparingspotential</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-semibold text-lg mb-2">Skräddarsydd demo</h3>
                <p className="text-ken-gray-600">Anpassad efter er bransch och era specifika behov</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">⏱️</div>
                <h3 className="font-semibold text-lg mb-2">Snabb återkoppling</h3>
                <p className="text-ken-gray-600">Vi kontaktar er inom 24 timmar</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Boka din demo</CardTitle>
                <CardDescription>Fyll i formuläret så kontaktar vi er för att boka en tid</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-ken-gray-900 mb-2">
                        Förnamn *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full rounded-md border border-ken-gray-300 px-4 py-2 focus:border-ken-blue focus:outline-none focus:ring-2 focus:ring-ken-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-ken-gray-900 mb-2">
                        Efternamn *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full rounded-md border border-ken-gray-300 px-4 py-2 focus:border-ken-blue focus:outline-none focus:ring-2 focus:ring-ken-blue"
                      />
                    </div>
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
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full rounded-md border border-ken-gray-300 px-4 py-2 focus:border-ken-blue focus:outline-none focus:ring-2 focus:ring-ken-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-ken-gray-900 mb-2">
                      Företag *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full rounded-md border border-ken-gray-300 px-4 py-2 focus:border-ken-blue focus:outline-none focus:ring-2 focus:ring-ken-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="branch" className="block text-sm font-medium text-ken-gray-900 mb-2">
                      Bransch *
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      required
                      className="w-full rounded-md border border-ken-gray-300 px-4 py-2 focus:border-ken-blue focus:outline-none focus:ring-2 focus:ring-ken-blue"
                    >
                      <option value="">Välj bransch</option>
                      <option value="sjukvard">Sjukvård</option>
                      <option value="hotell">Hotell & Restaurang</option>
                      <option value="raddning">Räddningstjänst</option>
                      <option value="industri">Industri</option>
                      <option value="utbildning">Utbildning</option>
                      <option value="forsvar">Försvar</option>
                      <option value="fastighet">Fastighet</option>
                      <option value="annat">Annat</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ken-gray-900 mb-2">
                      Berätta om era behov
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-md border border-ken-gray-300 px-4 py-2 focus:border-ken-blue focus:outline-none focus:ring-2 focus:ring-ken-blue"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Boka demo
                  </Button>

                  <p className="text-sm text-ken-gray-500 text-center">
                    Vi kontaktar er inom 24 timmar för att boka en tid som passar er
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
