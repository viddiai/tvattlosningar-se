import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/ui/FAQ';
import { ProcessTable } from '@/components/ui/ProcessTable';
import { Stats } from '@/components/ui/Stats';
import { ToolCard } from '@/components/ui/ToolCard';
import { Checklist } from '@/components/ui/Checklist';

// Icons
const IconBuilding = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);

const IconUsers = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const IconWrench = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);

const IconChart = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
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
const industries = [
  { name: 'Hotel & Restaurang', icon: <IconBuilding />, href: '/branscher/hotell' },
  { name: 'Vård & Omsorg', icon: <IconUsers />, href: '/branscher/vard-omsorg' },
  { name: 'Bostadsrättsföreningar', icon: <IconBuilding />, href: '/branscher/brf' },
  { name: 'Industri', icon: <IconWrench />, href: '/branscher/industri' },
  { name: 'Stiftfirmor', icon: <IconBuilding />, href: '/branscher/stiftfirmor' },
];

const challenges = [
  {
    title: 'Feldimensionering',
    problem: 'Otillräcklig kapacitet leder till köer och missnöjda boende.',
    solution: 'Behovsanalys och rätt maskinval från start.',
  },
  {
    title: 'Budgetöverskridning',
    problem: 'Oväntade kostnader för installation och anpassning.',
    solution: 'Detaljerad projektering och fasta kostnadsförslag.',
  },
  {
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
    time: '2 min',
    href: '/verktyg/dimensionering',
    linkText: 'Ladda ner',
  },
  {
    icon: <IconDocument />,
    title: 'CAD-ritningar',
    description: 'Färdiga block för din projektering.',
    time: '',
    href: '/verktyg/cad',
    linkText: 'Utforska',
  },
  {
    icon: <IconBook />,
    title: 'Produktkatalog',
    description: 'Se hela vårt utbud av maskiner.',
    time: '',
    href: '/produkter',
    linkText: 'Öppna',
  },
  {
    icon: <IconFolder />,
    title: 'Referenscase',
    description: 'Låt dig inspireras av lyckade projekt.',
    time: '',
    href: '/case',
    linkText: 'Läs mer',
  },
];

const stats = [
  { value: '100+', label: 'Lösningar jämförda' },
  { value: '15+', label: 'Års erfarenhet' },
  { value: '100%', label: 'Oberoende' },
  { value: '24h', label: 'Svarsgaranti' },
];

const whyChooseUs = [
  {
    title: 'Oberoende Rådgivning',
    description: 'Vi jämför leverantörer åt dig för att hitta den bästa lösningen, helt utan kostnad.',
  },
  {
    title: 'Spara Tid & Pengar',
    description: 'Undvik dyra misstag och få de bästa priserna genom vår expertis och upphandlingsgaranti.',
  },
  {
    title: 'Skräddarsydda Lösningar',
    description: 'Oavsett om du behöver hyra, leasa eller köpa, hittar vi en finansieringsmodell som passar dig.',
  },
  {
    title: 'Branschexpertis',
    description: 'Med över 15 års erfarenhet förstår vi de unika utmaningarna i just din bransch.',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container section-lg">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Professionella tvättlösningar för din bransch
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                Din neutrala resurs för att hitta, jämföra och finansiera rätt tvättutrustning för dina behov.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg">
                  <Link href="/boka-demo">Boka rådgivning</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/branscher">Utforska branscher</Link>
                </Button>
              </div>
            </div>

            {/* Blueprint/Floor plan image placeholder */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] rounded-2xl bg-slate-100 bg-blueprint border border-slate-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-full max-w-md mx-auto opacity-60">
                      <svg viewBox="0 0 400 300" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full text-brand-400">
                        {/* Floor plan SVG */}
                        <rect x="20" y="20" width="360" height="260" className="stroke-slate-300" />
                        <rect x="40" y="40" width="100" height="80" className="stroke-slate-400" />
                        <rect x="160" y="40" width="80" height="80" className="stroke-slate-400" />
                        <rect x="260" y="40" width="100" height="80" className="stroke-slate-400" />
                        <rect x="40" y="140" width="140" height="120" className="stroke-slate-400" />
                        <rect x="200" y="140" width="160" height="120" className="stroke-slate-400" />
                        {/* Washing machines */}
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
        </div>
      </section>

      {/* Industry Selection */}
      <section className="bg-slate-50 section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Hitta lösningar anpassade för er bransch
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-200"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  {industry.icon}
                </span>
                <span className="font-medium text-slate-900">{industry.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Varför välja oss?
            </h2>
            <p className="mt-4 text-slate-600">
              Vi är en oberoende partner som hjälper dig navigera i en komplex marknad.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                  <IconChart />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 py-12 border-y border-slate-200">
            <Stats stats={stats} />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Så fungerar det
            </h2>
            <p className="mt-4 text-slate-600">
              Tre enkla steg till den perfekta tvättlösningen för din verksamhet.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white text-xl font-semibold mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Behovsanalys</h3>
              <p className="text-sm text-slate-600">
                Vi börjar med ett kostnadsfritt samtal för att förstå dina specifika behov och utmaningar.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white text-xl font-semibold mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Jämförelse & Offert</h3>
              <p className="text-sm text-slate-600">
                Vi tar in och jämför offerter från ledande leverantörer för att hitta den bästa matchen för dig.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white text-xl font-semibold mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Lösning & Installation</h3>
              <p className="text-sm text-slate-600">
                Du väljer den bästa lösningen och vi koordinerar allt fram till färdig installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Våra Verktyg
            </h2>
            <p className="mt-4 text-slate-600">
              Använd våra kostnadsfria verktyg för att fatta bättre beslut.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.slice(0, 3).map((tool) => (
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

      {/* CTA Section */}
      <section className="bg-brand-500 section">
        <div className="container text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Redo att hitta den bästa tvättlösningen?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100">
            Få kostnadsfri och oberoende rådgivning. Vi hjälper dig att jämföra offerter från Sveriges ledande leverantörer.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-white text-brand-600 hover:bg-slate-50"
            >
              <Link href="/boka-demo">Boka rådgivning nu</Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-brand-200">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Tryggt
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Effektivt
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Bekymmersfritt
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
