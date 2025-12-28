import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/ui/FAQ';
import { ToolCard } from '@/components/ui/ToolCard';
import { FeatureCard } from '@/components/ui/FeatureCard';

export const metadata: Metadata = {
  title: 'Tvättlösningar för Vård & Hygien | Tvättlösningar Sverige',
  description: 'Hitta professionella tvättlösningar som garanterar optimal hygien och effektivitet för din verksamhet inom vård och omsorg.',
};

// Icons
const IconShield = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const IconSparkles = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const IconLeaf = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const IconBolt = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const IconCalculator = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
  </svg>
);

const IconDocument = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const IconChart = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const IconClipboard = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
);

// Data
const challenges = [
  { label: 'Säkerställa desinfektion' },
  { label: 'Undvika korskontaminering' },
  { label: 'Effektivisera arbetsflöden' },
  { label: 'Minska energiförbrukning' },
  { label: 'Kontrollera driftskostnader' },
  { label: 'Följa strikta hygienregler' },
  { label: 'Hantera stora volymer' },
  { label: 'Spårbarhet och dokumentation' },
];

const solutions = [
  {
    icon: <IconShield />,
    title: 'Barriärtvättmaskiner',
    description: 'Säkerställer en hygienisk barriär mellan smutsig och ren tvätt för att eliminera risken för korskontaminering.',
    features: ['Maximal hygien', 'Ergonomisk design'],
  },
  {
    icon: <IconSparkles />,
    title: 'Mopptvätt',
    description: 'Specialiserade maskiner och program för desinficerande tvätt av moppar och städdukar, vilket garanterar rena ytor.',
    features: ['Effektiv rengöring', 'Förlänger livslängden'],
  },
  {
    icon: <IconBolt />,
    title: 'Anpassade program',
    description: 'Skräddarsydda tvättprogram som uppfyller specifika hygienkrav, optimerar förbrukningen och är enkla att använda.',
    features: ['Garanterad desinfektion', 'Kostnadseffektivt'],
  },
];

const tools = [
  {
    icon: <IconCalculator />,
    title: 'Kapacitetsberäknare',
    description: 'Räkna ut vilken maskinstorlek som passar er verksamhet.',
    time: '~2 min',
    href: '/verktyg/kapacitetsberakning',
    linkText: 'Använd verktyget',
  },
  {
    icon: <IconDocument />,
    title: 'Guide: Välj rätt maskin',
    description: 'En steg-för-steg guide för att hitta rätt utrustning.',
    time: '~5 min',
    href: '/resurser/valj-maskin',
    linkText: 'Läs guiden',
  },
  {
    icon: <IconChart />,
    title: 'ROI-kalkylator',
    description: 'Se hur snabbt er investering lönar sig.',
    time: '~5 min',
    href: '/verktyg/roi-simulator',
    linkText: 'Beräkna ROI',
  },
  {
    icon: <IconClipboard />,
    title: 'Checklista: Hygien',
    description: 'Säkerställ att ni uppfyller alla hygienkrav.',
    time: '~3 min',
    href: '/resurser/hygien-checklista',
    linkText: 'Ladda ner',
  },
];

const faqItems = [
  {
    question: 'Vad är en barriärtvättmaskin och varför behövs den?',
    answer: 'En barriärtvättmaskin har två luckor - en på den smutsiga sidan och en på den rena sidan. Detta skapar en fysisk barriär som förhindrar korskontaminering mellan smutsig och ren tvätt, vilket är kritiskt inom vård och omsorg.',
  },
  {
    question: 'Hur uppnås desinfektion i professionella tvättmaskiner?',
    answer: 'Desinfektion uppnås genom en kombination av temperatur, tid och kemikalier. Våra maskiner har validerade desinfektionsprogram som uppfyller kraven för termisk desinfektion (t.ex. 85°C i 10 minuter).',
  },
  {
    question: 'Kan man tvätta moppar och patientkläder i samma maskin?',
    answer: 'Det rekommenderas att separera mopptvätt från andra textilier för att undvika korskontaminering. Dedikerade mopptvätt-maskiner eller separata tvättcykler är att föredra.',
  },
  {
    question: 'Hur kan vi minska vatten- och energiförbrukningen?',
    answer: 'Moderna tvättmaskiner med värmepumpsteknik och optimerade tvättprogram kan minska energiförbrukningen med upp till 50%. Automatisk dosering och rätt fyllnadsgrad hjälper också till att minimera förbrukningen.',
  },
];

export default function VardOmsorgPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="container py-3">
          <nav className="flex text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Hem</Link>
            <span className="mx-2">/</span>
            <Link href="/branscher" className="hover:text-slate-700">Branscher</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Vård & Hygien</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40">
            <div className="absolute inset-0 bg-[url('/images/laundry-machines.jpg')] bg-cover bg-center opacity-60" />
          </div>
          <div className="container relative h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Tvättlösningar som uppfyller vårdens hygienkrav – utan att spräcka budgeten
              </h1>
              <p className="mt-4 text-lg text-slate-200">
                Hitta professionella tvättlösningar som garanterar optimal hygien och effektivitet för din verksamhet.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button size="lg">
                  <Link href="/boka-demo">Hitta din lösning</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                  <Link href="/kontakt">Kontakta en expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Recognition */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Känner du igen dig i dessa utmaningar?
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Att hantera tvätt inom vård och hygien ställer unika krav på säkerhet, effektivitet och kostnadskontroll. Nedan är några av de vanligaste utmaningarna som våra kunder står inför.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
              >
                <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {challenge.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-slate-50 section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Lösningar anpassade för vård & hygien
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <FeatureCard
                key={solution.title}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Verktyg som hjälper dig välja rätt
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <ToolCard
                key={tool.title}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                time={tool.time}
                href={tool.href}
                linkText={tool.linkText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Vanliga frågor och svar
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-500 section">
        <div className="container text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Redo att säkra er hygien och effektivitet?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100">
            Våra experter är redo att hjälpa dig hitta den bästa tvättlösningen för din verksamhets unika behov. Boka en kostnadsfri konsultation idag och ta första steget mot en säkrare och mer kostnadseffektiv tvätthantering.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-white text-brand-600 hover:bg-slate-50"
            >
              <Link href="/boka-demo">Boka en kostnadsfri konsultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
