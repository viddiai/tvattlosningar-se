import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/ui/FAQ';
import { ProcessTable } from '@/components/ui/ProcessTable';
import { Checklist } from '@/components/ui/Checklist';
import { ToolCard } from '@/components/ui/ToolCard';

export const metadata: Metadata = {
  title: 'Tvättlösningar för Bygg & Fastighet | Tvättlösningar Sverige',
  description: 'Säkerställ att ditt bygg- eller fastighetsprojekt inkluderar en effektiv, hållbar och korrekt dimensionerad tvättlösning från start.',
};

// Icons
const IconRuler = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);

const IconCurrency = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconCog = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
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

const IconBook = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const IconFolder = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
);

// Data
const challenges = [
  {
    icon: <IconRuler />,
    title: 'Feldimensionering',
    problem: 'Otillräcklig kapacitet leder till köer och missnöjda boende.',
    solution: 'Behovsanalys och rätt maskinval från start.',
  },
  {
    icon: <IconCurrency />,
    title: 'Budgetöverskridning',
    problem: 'Oväntade kostnader för installation och anpassning.',
    solution: 'Detaljerad projektering och fasta kostnadsförslag.',
  },
  {
    icon: <IconCog />,
    title: 'Driftproblem',
    problem: 'Höga energi- och vattenkostnader, frekventa maskinfel.',
    solution: 'Val av energieffektiva maskiner och serviceavtal.',
  },
];

const processPhases = [
  { phase: 'Förstudie', content: 'Analys av behov, kapacitetsberäkning och initiala rekommendationer för layout och maskinval.' },
  { phase: 'Projektering', content: 'Detaljerad planering, VVS- och el-ritningar, och skapande av kompletta förfrågningsunderlag.' },
  { phase: 'Installation', content: 'Samordning av leverans, installation och driftsättning av all utrustning i enlighet med tidsplan.' },
  { phase: 'Överlämning', content: 'Funktionskontroll, utbildning av personal/boende och överlämning av all nödvändig dokumentation.' },
];

const checklistItems = [
  { label: 'Kapacitetsbehov' },
  { label: 'Energikrav och hållbarhet' },
  { label: 'Tillgänglighet (P-plintar)' },
  { label: 'Säkerhet och reglemente' },
];

const faqItems = [
  {
    question: 'Vilka lagar och regler gäller?',
    answer: 'För gemensamma tvättstugor gäller bland annat Boverkets byggregler (BBR), arbetsmiljölagen vid kommersiell verksamhet, samt lokala föreskrifter. Vi hjälper er att säkerställa att alla krav uppfylls.',
  },
  {
    question: 'Hur optimerar man energiförbrukningen?',
    answer: 'Genom att välja energieffektiva maskiner med A+++-klassning, optimera programval baserat på textiltyp, och regelbundet underhåll. Moderna värmepumpstorktumlare kan minska energiförbrukningen med upp till 60%.',
  },
  {
    question: 'Vad ingår i ett serviceavtal?',
    answer: 'Våra serviceavtal inkluderar förebyggande underhåll, prioriterad support, alla reservdelar och arbetskostnad vid reparation, samt garanterad responstid inom 24 timmar.',
  },
];

const tools = [
  {
    icon: <IconCalculator />,
    title: 'Dimensioneringsguide',
    description: 'Räkna ut rätt kapacitet för ditt projekt.',
    href: '/verktyg/dimensionering',
    linkText: 'Ladda ner',
  },
  {
    icon: <IconDocument />,
    title: 'CAD-ritningar',
    description: 'Färdiga block för din projektering.',
    href: '/verktyg/cad',
    linkText: 'Utforska',
  },
  {
    icon: <IconBook />,
    title: 'Produktkatalog',
    description: 'Se hela vårt utbud av maskiner.',
    href: '/produkter',
    linkText: 'Öppna',
  },
  {
    icon: <IconFolder />,
    title: 'Referenscase',
    description: 'Låt dig inspireras av lyckade projekt.',
    href: '/case',
    linkText: 'Läs mer',
  },
];

export default function ByggFastighetPage() {
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
            <span className="text-slate-900">Bygg & Fastighet</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container section-lg">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Eliminera projektrisken med tvättsystem – från första ritningen till lycklig överlämning
              </h1>
              <p className="mt-6 text-lg text-slate-600">
                Säkerställ att ditt bygg- eller fastighetsprojekt inkluderar en effektiv, hållbar och korrekt dimensionerad tvättlösning från start. Vi hjälper dig navigera genom hela processen.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg">
                  <Link href="/boka-demo">Boka Rådgivning</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/losningar">Utforska Lösningar</Link>
                </Button>
              </div>
            </div>

            {/* Blueprint/Floor plan image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 bg-blueprint border border-slate-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-sm mx-auto opacity-60 p-8">
                    <svg viewBox="0 0 400 300" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full text-brand-400">
                      <rect x="20" y="20" width="360" height="260" className="stroke-slate-300" />
                      <rect x="40" y="40" width="100" height="80" className="stroke-slate-400" />
                      <rect x="160" y="40" width="80" height="80" className="stroke-slate-400" />
                      <rect x="260" y="40" width="100" height="80" className="stroke-slate-400" />
                      <rect x="40" y="140" width="140" height="120" className="stroke-slate-400" />
                      <rect x="200" y="140" width="160" height="120" className="stroke-slate-400" />
                      <circle cx="70" cy="70" r="15" className="stroke-brand-500 fill-brand-50" />
                      <circle cx="110" cy="70" r="15" className="stroke-brand-500 fill-brand-50" />
                      <circle cx="200" cy="70" r="15" className="stroke-brand-500 fill-brand-50" />
                      <circle cx="290" cy="70" r="15" className="stroke-brand-500 fill-brand-50" />
                      <circle cx="330" cy="70" r="15" className="stroke-brand-500 fill-brand-50" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-slate-50 section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Vanliga utmaningar i byggprojekt
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-card-hover transition-all duration-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                  {challenge.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{challenge.title}</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-600">
                    <span className="font-medium text-slate-700">Problem:</span> {challenge.problem}
                  </p>
                  <p className="text-slate-600">
                    <span className="font-medium text-emerald-600">Lösning:</span> {challenge.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Table Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Vårt stöd genom hela projektet
            </h2>
          </div>

          <ProcessTable phases={processPhases} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Checklist and FAQ Section */}
      <section className="bg-slate-50 section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Checklist */}
            <div>
              <Checklist
                title="Checklista för en lyckad tvättstuga"
                items={checklistItems}
              />
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Vanliga frågor</h3>
              <FAQ items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Verktyg och resurser för ditt projekt
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <ToolCard
                key={tool.title}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                href={tool.href}
                linkText={tool.linkText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-500 section">
        <div className="container text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Redo att säkra ert byggprojekt?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100">
            Låt oss hjälpa er att planera och implementera en tvättlösning som fungerar från dag ett. Boka en kostnadsfri konsultation idag.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-white text-brand-600 hover:bg-slate-50"
            >
              <Link href="/boka-demo">Boka kostnadsfri konsultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
