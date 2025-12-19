# FAS 3: TEKNISK WEBBPLATSIMPLEMENTATION
## KEN Sverige - Komplett Utvecklingsspecifikation

**Uppdaterad:** 2025-12-11
**Fas:** 3 - Teknisk Implementation
**Status:** Färdig för utveckling
**Budget:** 4,890,000 kr
**Tidslinje:** 24 veckor

---

## INNEHÅLLSFÖRTECKNING

1. [Executive Overview](#executive-overview)
2. [Teknisk Arkitektur](#teknisk-arkitektur)
3. [Frontend Utveckling](#frontend-utveckling)
4. [Backend & CRM Integration](#backend--crm-integration)
5. [Interaktiva Verktyg - Teknisk Spec](#interaktiva-verktyg---teknisk-spec)
6. [Content Management System](#content-management-system)
7. [Analytics & Tracking](#analytics--tracking)
8. [Säkerhet & Compliance](#säkerhet--compliance)
9. [Performance & Optimering](#performance--optimering)
10. [Utvecklingstidslinje](#utvecklingstidslinje)
11. [Team & Resurser](#team--resurser)
12. [Testing & QA](#testing--qa)
13. [Deployment & DevOps](#deployment--devops)
14. [Budget & Kostnader](#budget--kostnader)

---

## EXECUTIVE OVERVIEW

### Projektmål
Utveckla en modern, högpresterande B2B-webbplats för KEN Sverige som:
- Konverterar besökare genom personaliserade rollresor
- Hanterar komplex lead generation och nurturing
- Integrerar sömlöst med CRM (HubSpot/Salesforce)
- Levererar interaktiva beslutsverktyg
- Optimeras kontinuerligt baserat på data

### Teknisk Vision
- **Modern stack:** Next.js 14 + TypeScript + Tailwind CSS
- **Headless CMS:** Sanity.io för flexibel innehållshantering
- **Cloud-native:** Vercel hosting för optimal performance
- **API-first:** RESTful och GraphQL endpoints
- **Mobile-first:** Responsive design för alla enheter
- **SEO-optimerad:** Server-side rendering och strukturerad data

### Nyckeltal
- **Sidladdning:** <2 sekunder (First Contentful Paint)
- **Performance Score:** >90 (Google Lighthouse)
- **Tillgänglighet:** WCAG 2.1 AA-certifierad
- **Uptime:** 99.9% SLA
- **Säkerhet:** SSL/TLS, GDPR-compliant

---

## TEKNISK ARKITEKTUR

### 1. SYSTEMÖVERSIKT

```
┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                        │
│  Next.js 14 (App Router) + TypeScript + Tailwind CSS       │
│  - Branch Landing Pages (7)                                  │
│  - Role Journey Pages (7 paths x 8 stages)                  │
│  - Interactive Tools (10)                                    │
│  - Resource Library                                          │
│  - Blog & Case Studies                                       │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                     API LAYER                                │
│  Next.js API Routes + GraphQL (Apollo Server)               │
│  - Authentication & Authorization                            │
│  - Form Submissions & Validation                            │
│  - Interactive Tool Calculations                            │
│  - Content Delivery (from Sanity)                           │
│  - CRM Integration Middleware                               │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                   DATA & SERVICES LAYER                      │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  Sanity.io   │  │   HubSpot    │  │  Vercel KV   │     │
│  │     CMS      │  │     CRM      │  │   (Redis)    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Google Tag   │  │   Hotjar     │  │  Sendgrid    │     │
│  │   Manager    │  │  Analytics   │  │    Email     │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                 INFRASTRUCTURE LAYER                         │
│  Vercel (Edge Network) + Cloudflare (CDN & Security)        │
│  - Global CDN (150+ edge locations)                         │
│  - DDoS Protection                                          │
│  - SSL/TLS Certificates                                     │
│  - Image Optimization                                       │
└─────────────────────────────────────────────────────────────┘
```

### 2. TEKNOLOGISTACK

#### Frontend
```typescript
{
  "framework": "Next.js 14.2",
  "language": "TypeScript 5.4",
  "styling": "Tailwind CSS 3.4 + CSS Modules",
  "uiComponents": "Radix UI + Headless UI",
  "animation": "Framer Motion",
  "forms": "React Hook Form + Zod validation",
  "stateManagement": "Zustand + React Context",
  "dataFetching": "TanStack Query (React Query)"
}
```

#### Backend & Services
```typescript
{
  "hosting": "Vercel (Edge Functions)",
  "cms": "Sanity.io v3",
  "database": "Vercel KV (Redis) + Sanity Content Lake",
  "crm": "HubSpot API v3",
  "email": "SendGrid API",
  "analytics": [
    "Google Analytics 4",
    "Google Tag Manager",
    "Hotjar",
    "Vercel Analytics"
  ],
  "cdn": "Cloudflare",
  "monitoring": "Sentry + Vercel Monitoring"
}
```

#### Development Tools
```typescript
{
  "packageManager": "pnpm",
  "linting": "ESLint + Prettier",
  "testing": "Vitest + Playwright + React Testing Library",
  "ci/cd": "GitHub Actions + Vercel",
  "versionControl": "Git + GitHub",
  "projectManagement": "Linear + Notion"
}
```

### 3. MILJÖER

```yaml
Development:
  url: localhost:3000
  cms: Sanity.dev
  crm: HubSpot Sandbox

Staging:
  url: staging.kensverige.se
  cms: Sanity.staging
  crm: HubSpot Sandbox
  protection: Password protected

Production:
  url: www.kensverige.se
  cms: Sanity.production
  crm: HubSpot Production
  cdn: Cloudflare
  monitoring: Full stack
```

---

## FRONTEND UTVECKLING

### 1. NEXT.JS APP STRUKTUR

```
app/
├── (marketing)/              # Marketing site group
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Marketing layout
│   │
│   ├── branscher/           # Branch pages
│   │   ├── page.tsx         # Branch overview
│   │   ├── sjukvard/
│   │   │   ├── page.tsx     # Healthcare landing
│   │   │   └── _components/ # Healthcare-specific components
│   │   ├── hotell/
│   │   ├── raddningstjanst/
│   │   ├── industri/
│   │   ├── utbildning/
│   │   ├── forsvar/
│   │   └── fastighet/
│   │
│   ├── roller/              # Role journeys
│   │   ├── [role]/
│   │   │   ├── page.tsx     # Role overview
│   │   │   └── [stage]/
│   │   │       └── page.tsx # Stage content
│   │   └── _components/
│   │       ├── RoleNav.tsx
│   │       ├── ProgressBar.tsx
│   │       └── ContentBlock.tsx
│   │
│   ├── verktyg/             # Interactive tools
│   │   ├── page.tsx
│   │   ├── lcc-kalkylator/
│   │   ├── roi-simulator/
│   │   ├── kapacitetsberakning/
│   │   ├── energianalys/
│   │   └── _components/
│   │
│   ├── resurser/            # Resource library
│   │   ├── page.tsx
│   │   ├── guider/
│   │   ├── checklistor/
│   │   ├── mallar/
│   │   └── whitepapers/
│   │
│   ├── case/                # Case studies
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── blogg/               # Blog
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   └── webinar/             # Webinars
│       ├── page.tsx
│       ├── kommande/
│       └── arkiv/
│
├── (tools)/                 # Interactive tools group
│   └── (Same structure as verktyg above)
│
├── api/                     # API routes
│   ├── forms/
│   │   ├── contact/
│   │   ├── demo/
│   │   └── download/
│   ├── calculations/
│   │   ├── lcc/
│   │   ├── roi/
│   │   └── capacity/
│   ├── crm/
│   │   ├── sync/
│   │   └── webhook/
│   └── analytics/
│
├── _components/             # Global components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── DemoRequestForm.tsx
│   │   └── FormField.tsx
│   ├── cards/
│   │   ├── CaseStudyCard.tsx
│   │   ├── ResourceCard.tsx
│   │   └── BlogCard.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Modal.tsx
│       └── Accordion.tsx
│
└── _lib/                    # Utilities & helpers
    ├── sanity/
    ├── hubspot/
    ├── analytics/
    ├── utils/
    └── hooks/
```

### 2. KOMPONENTARKITEKTUR

#### Core Design System Components

```typescript
// components/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-ken-blue text-white hover:bg-ken-blue-dark',
        outline: 'border border-ken-blue text-ken-blue hover:bg-ken-blue hover:text-white',
        ghost: 'hover:bg-gray-100',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = ({
  className,
  variant,
  size,
  isLoading,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
```

#### Branch Landing Page Component

```typescript
// app/(marketing)/branscher/_components/BranchHero.tsx
import { BranchData } from '@/types/branch';
import { Button } from '@/components/ui/Button';
import { VideoPlayer } from '@/components/media/VideoPlayer';

interface BranchHeroProps {
  data: BranchData;
  onCTAClick: () => void;
}

export const BranchHero = ({ data, onCTAClick }: BranchHeroProps) => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.heroImage}
          alt={data.branchName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            {data.headline}
          </h1>
          <p className="text-xl text-gray-200">
            {data.subheadline}
          </p>

          {/* Key Benefits */}
          <ul className="space-y-3">
            {data.keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon className="w-6 h-6 text-ken-green flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex gap-4 pt-4">
            <Button size="lg" onClick={onCTAClick}>
              Boka Gratis Konsultation
            </Button>
            <Button size="lg" variant="outline">
              Ladda Ner Branschguide
            </Button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative">
          <VideoPlayer
            videoId={data.videoId}
            poster={data.videoPoster}
            title={`KEN lösningar för ${data.branchName}`}
          />
        </div>
      </div>
    </section>
  );
};
```

#### Role Journey Navigation Component

```typescript
// app/(marketing)/roller/_components/RoleJourneyNav.tsx
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { journeyStages } from '@/lib/constants/roleJourneys';

interface RoleJourneyNavProps {
  role: string;
  currentStage: number;
}

export const RoleJourneyNav = ({ role, currentStage }: RoleJourneyNavProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentStage / journeyStages.length) * 100);
  }, [currentStage]);

  return (
    <nav className="sticky top-20 z-40 bg-white border-b shadow-sm">
      <div className="container py-4">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-ken-blue transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Steg {currentStage} av {journeyStages.length}
          </p>
        </div>

        {/* Stage Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {journeyStages.map((stage, index) => {
            const stageNum = index + 1;
            const isActive = stageNum === currentStage;
            const isCompleted = stageNum < currentStage;
            const isAccessible = stageNum <= currentStage + 1;

            return (
              <Link
                key={stage.id}
                href={`/roller/${role}/${stage.slug}`}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors',
                  {
                    'bg-ken-blue text-white': isActive,
                    'bg-green-100 text-green-800': isCompleted,
                    'bg-gray-100 text-gray-400 pointer-events-none': !isAccessible,
                    'hover:bg-gray-200': isAccessible && !isActive,
                  }
                )}
              >
                <span className={cn(
                  'w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold',
                  {
                    'bg-white text-ken-blue': isActive,
                    'bg-green-600 text-white': isCompleted,
                    'bg-gray-300 text-gray-600': !isAccessible,
                  }
                )}>
                  {isCompleted ? '✓' : stageNum}
                </span>
                <span className="font-medium">{stage.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
```

### 3. RESPONSIVE DESIGN

#### Breakpoints
```typescript
// tailwind.config.ts
export default {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
};
```

#### Mobile-First Strategi
```typescript
// Example: Responsive Hero Component
<div className="
  grid
  grid-cols-1          /* Mobile: Stack vertically */
  md:grid-cols-2       /* Tablet: 2 columns */
  lg:grid-cols-3       /* Desktop: 3 columns */
  gap-4
  md:gap-6
  lg:gap-8
">
  {/* Content */}
</div>
```

### 4. ANIMATIONER & INTERAKTIONER

```typescript
// components/animations/FadeIn.tsx
import { motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

// Example: Staggered List Animation
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const CaseStudyList = ({ cases }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {cases.map((caseStudy) => (
      <motion.div key={caseStudy.id} variants={itemVariants}>
        <CaseStudyCard data={caseStudy} />
      </motion.div>
    ))}
  </motion.div>
);
```

---

## BACKEND & CRM INTEGRATION

### 1. API ARKITEKTUR

#### Form Submission API
```typescript
// app/api/forms/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createHubSpotContact, addToWorkflow } from '@/lib/hubspot';
import { sendNotificationEmail } from '@/lib/email';
import { trackEvent } from '@/lib/analytics';

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'Förnamn måste vara minst 2 tecken'),
  lastName: z.string().min(2, 'Efternamn måste vara minst 2 tecken'),
  email: z.string().email('Ogiltig e-postadress'),
  phone: z.string().regex(/^[\d\s\+\-\(\)]+$/, 'Ogiltigt telefonnummer'),
  company: z.string().min(2, 'Företagsnamn krävs'),
  role: z.enum(['VD', 'Inköpschef', 'Projektchef', 'Driftchef', 'Fastighetschef', 'IT-chef', 'Annan']),
  branch: z.enum(['Sjukvård', 'Hotell', 'Räddningstjänst', 'Industri', 'Utbildning', 'Försvar', 'Fastighet']),
  message: z.string().max(1000, 'Meddelandet får max vara 1000 tecken'),
  consent: z.boolean().refine(val => val === true, 'Du måste godkänna behandling av personuppgifter'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactFormSchema.parse(body);

    // Create contact in HubSpot
    const contact = await createHubSpotContact({
      email: validatedData.email,
      firstname: validatedData.firstName,
      lastname: validatedData.lastName,
      phone: validatedData.phone,
      company: validatedData.company,
      jobtitle: validatedData.role,
      industry: validatedData.branch,
      message: validatedData.message,
      lead_source: 'Website Contact Form',
      lifecycle_stage: 'lead',
    });

    // Add to nurturing workflow based on role
    await addToWorkflow(contact.id, getWorkflowForRole(validatedData.role));

    // Send notification to sales team
    await sendNotificationEmail({
      to: 'sales@kensverige.se',
      subject: `Ny kontaktförfrågan från ${validatedData.company}`,
      template: 'new-contact',
      data: validatedData,
    });

    // Track conversion event
    await trackEvent({
      event: 'form_submission',
      category: 'lead_generation',
      label: 'contact_form',
      value: 1,
      metadata: {
        role: validatedData.role,
        branch: validatedData.branch,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Tack för din förfrågan! Vi återkommer inom 24 timmar.',
      contactId: contact.id,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        errors: error.errors,
      }, { status: 400 });
    }

    console.error('Contact form error:', error);
    return NextResponse.json({
      success: false,
      message: 'Ett fel uppstod. Vänligen försök igen.',
    }, { status: 500 });
  }
}

function getWorkflowForRole(role: string): number {
  const workflowMap = {
    'VD': 12345,
    'Inköpschef': 12346,
    'Projektchef': 12347,
    'Driftchef': 12348,
    'Fastighetschef': 12349,
    'IT-chef': 12350,
    'Annan': 12351,
  };
  return workflowMap[role] || workflowMap['Annan'];
}
```

### 2. HUBSPOT INTEGRATION

```typescript
// lib/hubspot/client.ts
import { Client } from '@hubspot/api-client';

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
});

export interface ContactProperties {
  email: string;
  firstname: string;
  lastname: string;
  phone?: string;
  company?: string;
  jobtitle?: string;
  industry?: string;
  message?: string;
  lead_source?: string;
  lifecycle_stage?: string;
}

export async function createHubSpotContact(properties: ContactProperties) {
  try {
    const response = await hubspotClient.crm.contacts.basicApi.create({
      properties,
      associations: [],
    });

    return response;
  } catch (error) {
    console.error('HubSpot contact creation error:', error);
    throw error;
  }
}

export async function addToWorkflow(contactId: string, workflowId: number) {
  try {
    const response = await hubspotClient.automation.workflows.enrollmentsApi.enroll(
      workflowId,
      {
        contactId: parseInt(contactId),
      }
    );

    return response;
  } catch (error) {
    console.error('HubSpot workflow enrollment error:', error);
    throw error;
  }
}

export async function trackPageView(contactEmail: string, pageUrl: string) {
  try {
    // Use HubSpot tracking API to log page view
    const response = await fetch('https://api.hubapi.com/events/v3/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        email: contactEmail,
        eventName: 'pe12345_page_view',
        properties: {
          page_url: pageUrl,
          timestamp: new Date().toISOString(),
        },
      }),
    });

    return response.json();
  } catch (error) {
    console.error('HubSpot tracking error:', error);
  }
}

// Lead Scoring
export async function updateLeadScore(contactId: string, points: number, reason: string) {
  try {
    const contact = await hubspotClient.crm.contacts.basicApi.getById(contactId, ['lead_score']);
    const currentScore = parseInt(contact.properties.lead_score || '0');
    const newScore = currentScore + points;

    await hubspotClient.crm.contacts.basicApi.update(contactId, {
      properties: {
        lead_score: newScore.toString(),
        last_score_change: new Date().toISOString(),
        last_score_reason: reason,
      },
    });

    // Trigger notification if score crosses threshold
    if (newScore >= 50 && currentScore < 50) {
      await notifySalesTeam({
        contactId,
        score: newScore,
        reason: 'Lead reached MQL threshold',
      });
    }

    return newScore;
  } catch (error) {
    console.error('Lead scoring error:', error);
    throw error;
  }
}
```

### 3. LEAD SCORING SYSTEM

```typescript
// lib/scoring/leadScoring.ts
export const SCORING_RULES = {
  // Page Visits
  visitBranchPage: 5,
  visitRolePage: 10,
  completedJourneyStage: 15,
  visitPricingPage: 20,
  visitCasePage: 8,

  // Tool Usage
  usedLCCCalculator: 25,
  usedROISimulator: 30,
  usedCapacityCalculator: 20,
  completedNeedsAssessment: 35,

  // Content Engagement
  downloadedGuide: 15,
  downloadedWhitepaper: 20,
  downloadedTemplate: 10,
  watchedVideo: 12,

  // High-Intent Actions
  requestedDemo: 50,
  requestedQuote: 60,
  registeredForWebinar: 25,
  attendedWebinar: 40,

  // Email Engagement
  openedEmail: 3,
  clickedEmailLink: 8,
  repliedToEmail: 15,

  // Time Decay (reduce by 10% per week of inactivity)
  weeklyDecay: 0.1,
};

export async function calculateAndUpdateScore(
  contactId: string,
  action: keyof typeof SCORING_RULES,
  metadata?: Record<string, any>
) {
  const points = SCORING_RULES[action];
  const reason = `${action}: +${points} points`;

  await updateLeadScore(contactId, points, reason);

  // Log scoring event for analytics
  await trackEvent({
    event: 'lead_score_change',
    category: 'lead_scoring',
    label: action,
    value: points,
    metadata: {
      contactId,
      ...metadata,
    },
  });
}
```

### 4. EMAIL AUTOMATION

```typescript
// lib/email/sendgrid.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface EmailTemplate {
  to: string;
  subject: string;
  template: string;
  data: Record<string, any>;
}

export async function sendNotificationEmail({ to, subject, template, data }: EmailTemplate) {
  try {
    const msg = {
      to,
      from: 'noreply@kensverige.se',
      subject,
      templateId: getTemplateId(template),
      dynamicTemplateData: data,
    };

    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
}

function getTemplateId(template: string): string {
  const templates = {
    'new-contact': 'd-xxxxx',
    'demo-request': 'd-yyyyy',
    'download-guide': 'd-zzzzz',
    'webinar-registration': 'd-aaaaa',
  };
  return templates[template] || templates['new-contact'];
}
```

---

## INTERAKTIVA VERKTYG - TEKNISK SPEC

### 1. LCC KALKYLATOR (LIFECYCLE COST)

```typescript
// app/verktyg/lcc-kalkylator/calculator.ts
export interface LCCInputs {
  // Current Situation
  currentSolution: 'outsourced' | 'own_old' | 'own_new';
  monthlyVolume: number; // kg tvätt per månad
  outsourceCostPerKg?: number;

  // Equipment Details (if own)
  equipmentAge?: number;
  equipmentCount?: number;
  maintenanceCostMonthly?: number;
  energyCostMonthly?: number;
  waterCostMonthly?: number;
  staffHours?: number;
  staffHourlyCost?: number;

  // Premises
  spaceUsedSqm?: number;
  rentPerSqm?: number;

  // KEN Solution
  kenSolutionType: 'basic' | 'standard' | 'premium';
  leasePeriodYears: number;
}

export interface LCCResults {
  currentCosts: {
    yearly: number;
    monthly: number;
    perKg: number;
    breakdown: {
      outsourceCost?: number;
      equipment?: number;
      maintenance?: number;
      energy?: number;
      water?: number;
      staff?: number;
      premises?: number;
    };
  };
  kenCosts: {
    yearly: number;
    monthly: number;
    perKg: number;
    breakdown: {
      lease: number;
      maintenance: number;
      energy: number;
      water: number;
      staff: number;
      premises: number;
    };
  };
  savings: {
    yearly: number;
    monthly: number;
    percentage: number;
    perKg: number;
  };
  roi: {
    months: number;
    percentage: number;
  };
  environmentalImpact: {
    energySavingKwh: number;
    waterSavingLiters: number;
    co2ReductionKg: number;
  };
}

export function calculateLCC(inputs: LCCInputs): LCCResults {
  // 1. Calculate current costs
  const currentCosts = calculateCurrentCosts(inputs);

  // 2. Calculate KEN solution costs
  const kenCosts = calculateKenCosts(inputs);

  // 3. Calculate savings
  const savings = {
    yearly: currentCosts.yearly - kenCosts.yearly,
    monthly: currentCosts.monthly - kenCosts.monthly,
    percentage: ((currentCosts.yearly - kenCosts.yearly) / currentCosts.yearly) * 100,
    perKg: currentCosts.perKg - kenCosts.perKg,
  };

  // 4. Calculate ROI
  const initialInvestment = getInitialInvestment(inputs.kenSolutionType);
  const roi = {
    months: initialInvestment / savings.monthly,
    percentage: (savings.yearly / currentCosts.yearly) * 100,
  };

  // 5. Calculate environmental impact
  const environmentalImpact = calculateEnvironmentalImpact(inputs, currentCosts, kenCosts);

  return {
    currentCosts,
    kenCosts,
    savings,
    roi,
    environmentalImpact,
  };
}

function calculateCurrentCosts(inputs: LCCInputs) {
  const breakdown: any = {};

  if (inputs.currentSolution === 'outsourced' && inputs.outsourceCostPerKg) {
    breakdown.outsourceCost = inputs.monthlyVolume * inputs.outsourceCostPerKg * 12;
  } else {
    // Own solution costs
    breakdown.equipment = calculateEquipmentDepreciation(inputs);
    breakdown.maintenance = (inputs.maintenanceCostMonthly || 0) * 12;
    breakdown.energy = (inputs.energyCostMonthly || 0) * 12;
    breakdown.water = (inputs.waterCostMonthly || 0) * 12;
    breakdown.staff = (inputs.staffHours || 0) * (inputs.staffHourlyCost || 0) * 12;
    breakdown.premises = (inputs.spaceUsedSqm || 0) * (inputs.rentPerSqm || 0) * 12;
  }

  const yearly = Object.values(breakdown).reduce((sum: number, val) => sum + (val as number), 0);
  const monthly = yearly / 12;
  const perKg = yearly / (inputs.monthlyVolume * 12);

  return { yearly, monthly, perKg, breakdown };
}

function calculateKenCosts(inputs: LCCInputs) {
  const solutionPricing = {
    basic: { lease: 25000, maintenance: 3000, energyFactor: 0.7 },
    standard: { lease: 45000, maintenance: 5000, energyFactor: 0.6 },
    premium: { lease: 75000, maintenance: 8000, energyFactor: 0.5 },
  };

  const solution = solutionPricing[inputs.kenSolutionType];

  const breakdown = {
    lease: solution.lease * 12,
    maintenance: solution.maintenance * 12,
    energy: ((inputs.energyCostMonthly || 0) * solution.energyFactor) * 12,
    water: ((inputs.waterCostMonthly || 0) * 0.65) * 12, // 35% water savings
    staff: ((inputs.staffHours || 0) * 0.6) * (inputs.staffHourlyCost || 0) * 12, // 40% staff reduction
    premises: ((inputs.spaceUsedSqm || 0) * 0.7) * (inputs.rentPerSqm || 0) * 12, // 30% space savings
  };

  const yearly = Object.values(breakdown).reduce((sum, val) => sum + val, 0);
  const monthly = yearly / 12;
  const perKg = yearly / (inputs.monthlyVolume * 12);

  return { yearly, monthly, perKg, breakdown };
}

function calculateEnvironmentalImpact(inputs: LCCInputs, currentCosts: any, kenCosts: any) {
  const energySavingKwh = (
    (currentCosts.breakdown.energy || 0) - kenCosts.breakdown.energy
  ) / 1.5; // Assuming 1.5 kr/kWh

  const waterSavingLiters = inputs.monthlyVolume * 12 * 8 * 0.35; // 35% savings, 8L/kg baseline

  const co2ReductionKg = energySavingKwh * 0.05; // 0.05 kg CO2/kWh for Swedish electricity

  return {
    energySavingKwh: Math.round(energySavingKwh),
    waterSavingLiters: Math.round(waterSavingLiters),
    co2ReductionKg: Math.round(co2ReductionKg),
  };
}

function calculateEquipmentDepreciation(inputs: LCCInputs): number {
  if (!inputs.equipmentCount || !inputs.equipmentAge) return 0;

  const avgEquipmentCost = 200000; // kr per machine
  const lifespan = 15; // years
  const currentValue = avgEquipmentCost * (1 - inputs.equipmentAge / lifespan);

  return (currentValue / (lifespan - inputs.equipmentAge)) * inputs.equipmentCount;
}

function getInitialInvestment(solutionType: string): number {
  const investments = {
    basic: 50000,
    standard: 100000,
    premium: 200000,
  };
  return investments[solutionType] || 0;
}
```

#### LCC Calculator UI Component

```typescript
// app/verktyg/lcc-kalkylator/page.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { calculateLCC, type LCCInputs, type LCCResults } from './calculator';
import { ResultsChart } from './ResultsChart';
import { ResultsSummary } from './ResultsSummary';

export default function LCCCalculatorPage() {
  const [results, setResults] = useState<LCCResults | null>(null);
  const [step, setStep] = useState(1);

  const form = useForm<LCCInputs>({
    defaultValues: {
      currentSolution: 'outsourced',
      monthlyVolume: 5000,
      kenSolutionType: 'standard',
      leasePeriodYears: 5,
    },
  });

  const onSubmit = (data: LCCInputs) => {
    const calculatedResults = calculateLCC(data);
    setResults(calculatedResults);

    // Track calculator usage
    trackEvent({
      event: 'calculator_completed',
      category: 'interactive_tools',
      label: 'lcc_calculator',
      value: calculatedResults.savings.yearly,
    });

    // Update lead score
    if (userEmail) {
      calculateAndUpdateScore(userEmail, 'usedLCCCalculator', {
        savingsPotential: calculatedResults.savings.yearly,
      });
    }
  };

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            LCC Kalkylator - Livscykelkostnad
          </h1>
          <p className="text-xl text-gray-600">
            Beräkna dina totala kostnader och potentiella besparingar med KEN
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <ProgressSteps currentStep={step} totalSteps={4} />
        </div>

        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {step === 1 && (
            <Step1CurrentSituation form={form} onNext={() => setStep(2)} />
          )}

          {step === 2 && (
            <Step2CurrentCosts form={form} onNext={() => setStep(3)} onBack={() => setStep(1)} />
          )}

          {step === 3 && (
            <Step3KENSolution form={form} onNext={() => setStep(4)} onBack={() => setStep(2)} />
          )}

          {step === 4 && (
            <Step4Review form={form} onBack={() => setStep(3)} />
          )}
        </form>

        {/* Results */}
        {results && (
          <div className="mt-12 space-y-8">
            <ResultsSummary results={results} />
            <ResultsChart results={results} />

            {/* CTA */}
            <div className="bg-ken-blue text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Spara {results.savings.yearly.toLocaleString('sv-SE')} kr/år
              </h3>
              <p className="text-lg mb-6">
                Få en personlig genomgång av din besparingspotential
              </p>
              <Button size="lg" variant="outline" onClick={() => openDemoModal()}>
                Boka Gratis Konsultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
```

### 2. ROI SIMULATOR - IMPLEMENTATION

```typescript
// app/verktyg/roi-simulator/simulator.ts
export interface ROIInputs {
  // Investment Details
  initialInvestment: number;
  monthlyLeaseCost: number;
  leasePeriodYears: number;

  // Savings Categories
  laborSavings: {
    hoursPerDay: number;
    hourlyCost: number;
    reductionPercentage: number;
  };
  energySavings: {
    currentMonthlyKwh: number;
    costPerKwh: number;
    reductionPercentage: number;
  };
  waterSavings: {
    currentMonthlyLiters: number;
    costPerLiter: number;
    reductionPercentage: number;
  };
  maintenanceSavings: {
    currentMonthlyCost: number;
    reductionPercentage: number;
  };

  // Additional Benefits
  downtimeReduction: {
    currentHoursPerMonth: number;
    costPerHour: number;
    reductionPercentage: number;
  };
  qualityImprovement: {
    currentRejectRate: number;
    newRejectRate: number;
    costPerReject: number;
    monthlyVolume: number;
  };
}

export interface ROIResults {
  monthlySavings: {
    labor: number;
    energy: number;
    water: number;
    maintenance: number;
    downtime: number;
    quality: number;
    total: number;
  };
  yearlySavings: {
    labor: number;
    energy: number;
    water: number;
    maintenance: number;
    downtime: number;
    quality: number;
    total: number;
  };
  roi: {
    paybackMonths: number;
    roi1Year: number;
    roi3Years: number;
    roi5Years: number;
    totalSavings5Years: number;
    totalCost5Years: number;
    netBenefit5Years: number;
  };
  cashFlow: Array<{
    month: number;
    year: number;
    monthlyCost: number;
    monthlySavings: number;
    netCashFlow: number;
    cumulativeCashFlow: number;
  }>;
}

export function calculateROI(inputs: ROIInputs): ROIResults {
  // Calculate monthly savings per category
  const monthlySavings = {
    labor: calculateLaborSavings(inputs.laborSavings),
    energy: calculateEnergySavings(inputs.energySavings),
    water: calculateWaterSavings(inputs.waterSavings),
    maintenance: calculateMaintenanceSavings(inputs.maintenanceSavings),
    downtime: calculateDowntimeSavings(inputs.downtimeReduction),
    quality: calculateQualitySavings(inputs.qualityImprovement),
    total: 0,
  };

  monthlySavings.total = Object.values(monthlySavings).reduce((sum, val) => sum + val, 0);

  // Calculate yearly savings
  const yearlySavings = Object.entries(monthlySavings).reduce((acc, [key, value]) => {
    acc[key] = value * 12;
    return acc;
  }, {} as any);

  // Calculate cash flow over time
  const cashFlow = generateCashFlow(
    inputs.initialInvestment,
    inputs.monthlyLeaseCost,
    monthlySavings.total,
    inputs.leasePeriodYears * 12
  );

  // Calculate ROI metrics
  const totalCost5Years = inputs.initialInvestment + (inputs.monthlyLeaseCost * 60);
  const totalSavings5Years = yearlySavings.total * 5;
  const netBenefit5Years = totalSavings5Years - totalCost5Years;

  const roi = {
    paybackMonths: calculatePaybackPeriod(cashFlow),
    roi1Year: ((yearlySavings.total - (inputs.monthlyLeaseCost * 12)) / inputs.initialInvestment) * 100,
    roi3Years: ((yearlySavings.total * 3 - (inputs.monthlyLeaseCost * 36)) / inputs.initialInvestment) * 100,
    roi5Years: (netBenefit5Years / totalCost5Years) * 100,
    totalSavings5Years,
    totalCost5Years,
    netBenefit5Years,
  };

  return {
    monthlySavings,
    yearlySavings,
    roi,
    cashFlow,
  };
}

function calculateLaborSavings(inputs: ROIInputs['laborSavings']): number {
  const dailySavings = inputs.hoursPerDay * inputs.hourlyCost * (inputs.reductionPercentage / 100);
  return dailySavings * 22; // 22 working days per month
}

function calculateEnergySavings(inputs: ROIInputs['energySavings']): number {
  return inputs.currentMonthlyKwh * inputs.costPerKwh * (inputs.reductionPercentage / 100);
}

function calculateWaterSavings(inputs: ROIInputs['waterSavings']): number {
  return inputs.currentMonthlyLiters * inputs.costPerLiter * (inputs.reductionPercentage / 100);
}

function calculateMaintenanceSavings(inputs: ROIInputs['maintenanceSavings']): number {
  return inputs.currentMonthlyCost * (inputs.reductionPercentage / 100);
}

function calculateDowntimeSavings(inputs: ROIInputs['downtimeReduction']): number {
  return inputs.currentHoursPerMonth * inputs.costPerHour * (inputs.reductionPercentage / 100);
}

function calculateQualitySavings(inputs: ROIInputs['qualityImprovement']): number {
  const currentRejects = inputs.monthlyVolume * (inputs.currentRejectRate / 100);
  const newRejects = inputs.monthlyVolume * (inputs.newRejectRate / 100);
  const rejectReduction = currentRejects - newRejects;
  return rejectReduction * inputs.costPerReject;
}

function generateCashFlow(
  initialInvestment: number,
  monthlyLeaseCost: number,
  monthlySavings: number,
  totalMonths: number
): ROIResults['cashFlow'] {
  const cashFlow: ROIResults['cashFlow'] = [];
  let cumulativeCashFlow = -initialInvestment;

  for (let month = 1; month <= totalMonths; month++) {
    const netCashFlow = monthlySavings - monthlyLeaseCost;
    cumulativeCashFlow += netCashFlow;

    cashFlow.push({
      month,
      year: Math.ceil(month / 12),
      monthlyCost: monthlyLeaseCost,
      monthlySavings,
      netCashFlow,
      cumulativeCashFlow,
    });
  }

  return cashFlow;
}

function calculatePaybackPeriod(cashFlow: ROIResults['cashFlow']): number {
  for (let i = 0; i < cashFlow.length; i++) {
    if (cashFlow[i].cumulativeCashFlow >= 0) {
      return i + 1;
    }
  }
  return cashFlow.length;
}
```

### 3. CAPACITY CALCULATOR

```typescript
// app/verktyg/kapacitetsberakning/calculator.ts
export interface CapacityInputs {
  // Facility Details
  facilityType: 'hospital' | 'hotel' | 'industrial' | 'other';
  beds?: number; // For hospitals/hotels
  employees?: number; // For industrial

  // Current Laundry Data
  dailyKgLaundry: number;
  peakDayMultiplier: number; // e.g., 1.5 for 50% higher peak
  operatingDaysPerWeek: number;
  shiftsPerDay: number;

  // Quality Requirements
  turnaroundTimeHours: number;
  segregationRequired: boolean;
  specialTreatmentRequired: string[]; // e.g., ['disinfection', 'stain-removal']

  // Space Constraints
  availableSpaceSqm: number;
  ceilingHeightM: number;
}

export interface CapacityResults {
  recommendedSolution: {
    solutionType: 'compact' | 'standard' | 'industrial' | 'multi-site';
    machineCount: {
      washers: number;
      dryers: number;
      folders?: number;
      conveyors?: boolean;
    };
    capacity: {
      dailyKg: number;
      weeklyKg: number;
      peakDailyKg: number;
    };
    utilizationRate: number; // Percentage
  };
  spaceRequirements: {
    totalSqm: number;
    breakdown: {
      washingArea: number;
      dryingArea: number;
      foldingArea: number;
      storage: number;
      circulation: number;
    };
    fitsInAvailableSpace: boolean;
  };
  staffingNeeds: {
    operatorsPerShift: number;
    totalFTE: number;
    skillLevel: 'basic' | 'intermediate' | 'advanced';
  };
  estimatedCosts: {
    monthlyLease: number;
    monthlyOperating: number;
    monthlyTotal: number;
    perKgCost: number;
  };
}

export function calculateCapacity(inputs: CapacityInputs): CapacityResults {
  // Determine required daily capacity with buffer
  const requiredDailyCapacity = inputs.dailyKgLaundry;
  const requiredPeakCapacity = requiredDailyCapacity * inputs.peakDayMultiplier;
  const safetyBuffer = 1.2; // 20% buffer
  const targetCapacity = requiredPeakCapacity * safetyBuffer;

  // Determine solution type
  const solutionType = determineSolutionType(targetCapacity, inputs.facilityType);

  // Calculate machine requirements
  const machineCount = calculateMachineRequirements(
    targetCapacity,
    solutionType,
    inputs.shiftsPerDay,
    inputs.turnaroundTimeHours
  );

  // Calculate space requirements
  const spaceRequirements = calculateSpaceRequirements(machineCount, solutionType);

  // Calculate staffing needs
  const staffingNeeds = calculateStaffingNeeds(machineCount, inputs.shiftsPerDay);

  // Estimate costs
  const estimatedCosts = estimateCosts(solutionType, machineCount, targetCapacity);

  return {
    recommendedSolution: {
      solutionType,
      machineCount,
      capacity: {
        dailyKg: Math.round(targetCapacity / safetyBuffer),
        weeklyKg: Math.round((targetCapacity / safetyBuffer) * inputs.operatingDaysPerWeek),
        peakDailyKg: Math.round(targetCapacity),
      },
      utilizationRate: (requiredDailyCapacity / (targetCapacity / safetyBuffer)) * 100,
    },
    spaceRequirements: {
      ...spaceRequirements,
      fitsInAvailableSpace: spaceRequirements.totalSqm <= inputs.availableSpaceSqm,
    },
    staffingNeeds,
    estimatedCosts,
  };
}

function determineSolutionType(dailyCapacity: number, facilityType: string): CapacityResults['recommendedSolution']['solutionType'] {
  if (dailyCapacity < 200) return 'compact';
  if (dailyCapacity < 1000) return 'standard';
  if (dailyCapacity < 3000) return 'industrial';
  return 'multi-site';
}

function calculateMachineRequirements(
  capacity: number,
  solutionType: string,
  shiftsPerDay: number,
  turnaroundTime: number
) {
  // Machine specifications
  const machineSpecs = {
    compact: { washerCapacity: 20, cycleTime: 1.5 },
    standard: { washerCapacity: 40, cycleTime: 1.2 },
    industrial: { washerCapacity: 80, cycleTime: 1.0 },
    'multi-site': { washerCapacity: 120, cycleTime: 0.8 },
  };

  const spec = machineSpecs[solutionType];
  const hoursPerShift = 8;
  const cyclesPerDay = (hoursPerShift * shiftsPerDay) / spec.cycleTime;
  const washersNeeded = Math.ceil(capacity / (spec.washerCapacity * cyclesPerDay));

  return {
    washers: washersNeeded,
    dryers: Math.ceil(washersNeeded * 0.8), // 80% of washers
    folders: solutionType === 'industrial' || solutionType === 'multi-site' ? Math.ceil(washersNeeded * 0.5) : undefined,
    conveyors: solutionType === 'industrial' || solutionType === 'multi-site',
  };
}

function calculateSpaceRequirements(machineCount: any, solutionType: string) {
  const baseAreas = {
    compact: { washer: 4, dryer: 3 },
    standard: { washer: 6, dryer: 4 },
    industrial: { washer: 10, dryer: 6 },
    'multi-site': { washer: 15, dryer: 8 },
  };

  const base = baseAreas[solutionType];

  const washingArea = machineCount.washers * base.washer;
  const dryingArea = machineCount.dryers * base.dryer;
  const foldingArea = (machineCount.folders || 0) * 8;
  const storage = (washingArea + dryingArea) * 0.3;
  const circulation = (washingArea + dryingArea + foldingArea + storage) * 0.4;

  return {
    totalSqm: Math.round(washingArea + dryingArea + foldingArea + storage + circulation),
    breakdown: {
      washingArea: Math.round(washingArea),
      dryingArea: Math.round(dryingArea),
      foldingArea: Math.round(foldingArea),
      storage: Math.round(storage),
      circulation: Math.round(circulation),
    },
  };
}

function calculateStaffingNeeds(machineCount: any, shiftsPerDay: number) {
  const operatorsPerShift = Math.max(
    2,
    Math.ceil((machineCount.washers + machineCount.dryers) / 4)
  );

  const totalFTE = operatorsPerShift * shiftsPerDay * 1.2; // 20% overhead for coverage

  return {
    operatorsPerShift,
    totalFTE: Math.round(totalFTE * 10) / 10,
    skillLevel: machineCount.washers > 5 ? 'intermediate' : 'basic' as const,
  };
}

function estimateCosts(solutionType: string, machineCount: any, capacity: number) {
  const baseLeaseCosts = {
    compact: 15000,
    standard: 30000,
    industrial: 60000,
    'multi-site': 120000,
  };

  const monthlyLease = baseLeaseCosts[solutionType] * (machineCount.washers / 2);
  const monthlyOperating = capacity * 22 * 0.8; // 22 days/month, 0.8 kr/kg operating cost
  const monthlyTotal = monthlyLease + monthlyOperating;
  const perKgCost = monthlyTotal / (capacity * 22);

  return {
    monthlyLease: Math.round(monthlyLease),
    monthlyOperating: Math.round(monthlyOperating),
    monthlyTotal: Math.round(monthlyTotal),
    perKgCost: Math.round(perKgCost * 100) / 100,
  };
}
```

---

## CONTENT MANAGEMENT SYSTEM

### 1. SANITY SCHEMA

```typescript
// sanity/schemas/branchPage.ts
import { defineType, defineField } from 'sanity';

export const branchPage = defineType({
  name: 'branchPage',
  title: 'Branch Landing Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Branch Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'branchType',
      title: 'Branch Type',
      type: 'string',
      options: {
        list: [
          { title: 'Sjukvård', value: 'healthcare' },
          { title: 'Hotell', value: 'hotel' },
          { title: 'Räddningstjänst', value: 'fire-service' },
          { title: 'Industri', value: 'industrial' },
          { title: 'Utbildning', value: 'education' },
          { title: 'Försvar', value: 'military' },
          { title: 'Fastighet', value: 'real-estate' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description' },
        { name: 'keywords', type: 'array', of: [{ type: 'string' }] },
        { name: 'ogImage', type: 'image', title: 'OG Image' },
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string', title: 'Headline' },
        { name: 'subheadline', type: 'text', title: 'Subheadline' },
        { name: 'backgroundImage', type: 'image', title: 'Background Image' },
        { name: 'videoId', type: 'string', title: 'Video ID (Vimeo/YouTube)' },
        { name: 'keyBenefits', type: 'array', of: [{ type: 'string' }], title: 'Key Benefits' },
      ],
    }),
    defineField({
      name: 'challenges',
      title: 'Industry Challenges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
            { name: 'icon', type: 'string' }, // Icon name/reference
          ],
        },
      ],
    }),
    defineField({
      name: 'solutions',
      title: 'KEN Solutions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
            { name: 'features', type: 'array', of: [{ type: 'string' }] },
            { name: 'image', type: 'image' },
          ],
        },
      ],
    }),
    defineField({
      name: 'caseStudies',
      title: 'Featured Case Studies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
    }),
    defineField({
      name: 'testimonials',
      title: 'Customer Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    }),
    defineField({
      name: 'downloads',
      title: 'Downloadable Resources',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'resource' }] }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      branchType: 'branchType',
      media: 'hero.backgroundImage',
    },
    prepare({ title, branchType, media }) {
      return {
        title,
        subtitle: branchType,
        media,
      };
    },
  },
});
```

```typescript
// sanity/schemas/roleJourney.ts
export const roleJourney = defineType({
  name: 'roleJourney',
  title: 'Role Journey Content',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'VD', value: 'vd' },
          { title: 'Inköpschef', value: 'inkopschef' },
          { title: 'Projektchef', value: 'projektchef' },
          { title: 'Driftchef', value: 'driftchef' },
          { title: 'Fastighetschef', value: 'fastighetschef' },
          { title: 'IT-chef', value: 'it-chef' },
          { title: 'Specialroller', value: 'special' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'stage',
      title: 'Journey Stage',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      validation: Rule => Rule.required().min(1).max(8),
    }),
    defineField({
      name: 'stageName',
      title: 'Stage Name',
      type: 'string',
      description: 'E.g., "Första Kontakt", "Problemidentifiering", etc.',
    }),
    defineField({
      name: 'content',
      title: 'Content Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contentBlock',
          fields: [
            { name: 'blockType', type: 'string', options: {
              list: ['text', 'video', 'calculator', 'download', 'cta', 'checklist']
            }},
            { name: 'title', type: 'string' },
            { name: 'body', type: 'blockContent' },
            { name: 'media', type: 'image' },
            { name: 'videoId', type: 'string' },
            { name: 'downloadLink', type: 'reference', to: [{ type: 'resource' }] },
            { name: 'ctaText', type: 'string' },
            { name: 'ctaLink', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Key Takeaways',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'nextSteps',
      title: 'Next Steps CTA',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'primaryCTA', type: 'string' },
        { name: 'primaryLink', type: 'string' },
        { name: 'secondaryCTA', type: 'string' },
        { name: 'secondaryLink', type: 'string' },
      ],
    }),
  ],
  preview: {
    select: {
      role: 'role',
      stage: 'stage',
      stageName: 'stageName',
    },
    prepare({ role, stage, stageName }) {
      return {
        title: `${role} - Stage ${stage}`,
        subtitle: stageName,
      };
    },
  },
});
```

```typescript
// sanity/schemas/caseStudy.ts
export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'customer',
      title: 'Customer',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'Company Name' },
        { name: 'logo', type: 'image', title: 'Logo' },
        { name: 'branch', type: 'string', title: 'Branch' },
        { name: 'size', type: 'string', title: 'Company Size' },
        { name: 'location', type: 'string', title: 'Location' },
      ],
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'blockContent',
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'blockContent',
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', type: 'string', title: 'Metric' },
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Customer Quote',
      type: 'object',
      fields: [
        { name: 'quote', type: 'text' },
        { name: 'author', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'photo', type: 'image' },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage',
    }),
  ],
});
```

### 2. SANITY QUERIES

```typescript
// lib/sanity/queries.ts
import { groq } from 'next-sanity';

export const BRANCH_PAGE_QUERY = groq`
  *[_type == "branchPage" && slug.current == $slug][0] {
    _id,
    title,
    branchType,
    seo,
    hero {
      headline,
      subheadline,
      "backgroundImage": backgroundImage.asset->url,
      videoId,
      keyBenefits
    },
    challenges,
    solutions[] {
      title,
      description,
      features,
      "image": image.asset->url
    },
    "caseStudies": caseStudies[]->{
      _id,
      title,
      slug,
      customer,
      results
    },
    "testimonials": testimonials[]-> {
      quote,
      author,
      title,
      "photo": photo.asset->url
    },
    "downloads": downloads[]-> {
      _id,
      title,
      description,
      "fileUrl": file.asset->url
    }
  }
`;

export const ROLE_JOURNEY_QUERY = groq`
  *[_type == "roleJourney" && role == $role && stage == $stage][0] {
    _id,
    role,
    stage,
    stageName,
    content[] {
      blockType,
      title,
      body,
      "media": media.asset->url,
      videoId,
      "downloadLink": downloadLink-> {
        _id,
        title,
        "fileUrl": file.asset->url
      },
      ctaText,
      ctaLink
    },
    keyTakeaways,
    nextSteps
  }
`;

export const CASE_STUDIES_QUERY = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) [0...12] {
    _id,
    title,
    slug,
    customer {
      name,
      "logo": logo.asset->url,
      branch,
      size
    },
    results,
    featured,
    publishedAt
  }
`;

export const BLOG_POSTS_QUERY = groq`
  *[_type == "blogPost"] | order(publishedAt desc) [0...12] {
    _id,
    title,
    slug,
    excerpt,
    "featuredImage": featuredImage.asset->url,
    "author": author-> {
      name,
      "photo": photo.asset->url
    },
    publishedAt,
    categories[]-> {
      title
    }
  }
`;
```

### 3. SANITY CLIENT

```typescript
// lib/sanity/client.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN, // For write operations
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Fetch helpers with caching
export async function fetchBranchPage(slug: string) {
  return client.fetch(BRANCH_PAGE_QUERY, { slug }, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });
}

export async function fetchRoleJourneyContent(role: string, stage: number) {
  return client.fetch(ROLE_JOURNEY_QUERY, { role, stage }, {
    next: { revalidate: 3600 },
  });
}

export async function fetchCaseStudies() {
  return client.fetch(CASE_STUDIES_QUERY, {}, {
    next: { revalidate: 1800 }, // 30 minutes
  });
}
```

---

## ANALYTICS & TRACKING

### 1. GOOGLE TAG MANAGER SETUP

```typescript
// lib/analytics/gtm.ts
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function initGTM() {
  if (!GTM_ID) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });
}

// GTM Script Component
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}
```

### 2. EVENT TRACKING

```typescript
// lib/analytics/events.ts
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export interface AnalyticsEvent {
  event: string;
  category: string;
  label: string;
  value?: number;
  metadata?: Record<string, any>;
}

export function trackEvent({
  event,
  category,
  label,
  value,
  metadata = {},
}: AnalyticsEvent) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    eventCategory: category,
    eventLabel: label,
    eventValue: value,
    ...metadata,
  });
}

// Predefined tracking functions
export const analytics = {
  // Page Views
  pageView: (url: string, title: string) => {
    trackEvent({
      event: 'page_view',
      category: 'engagement',
      label: url,
      metadata: { page_title: title },
    });
  },

  // Form Submissions
  formSubmit: (formName: string, formData: any) => {
    trackEvent({
      event: 'form_submission',
      category: 'lead_generation',
      label: formName,
      value: 1,
      metadata: { form_data: formData },
    });
  },

  // Calculator Usage
  calculatorUsed: (calculatorType: string, results: any) => {
    trackEvent({
      event: 'calculator_used',
      category: 'interactive_tools',
      label: calculatorType,
      value: results.savings || 0,
      metadata: { results },
    });
  },

  // Content Downloads
  downloadContent: (resourceType: string, resourceTitle: string) => {
    trackEvent({
      event: 'content_download',
      category: 'lead_generation',
      label: `${resourceType}: ${resourceTitle}`,
      value: 1,
    });
  },

  // Video Engagement
  videoPlay: (videoId: string, videoTitle: string) => {
    trackEvent({
      event: 'video_play',
      category: 'engagement',
      label: videoTitle,
      metadata: { video_id: videoId },
    });
  },

  videoComplete: (videoId: string, videoTitle: string, watchTime: number) => {
    trackEvent({
      event: 'video_complete',
      category: 'engagement',
      label: videoTitle,
      value: watchTime,
      metadata: { video_id: videoId },
    });
  },

  // CTA Clicks
  ctaClick: (ctaText: string, ctaLocation: string, ctaDestination: string) => {
    trackEvent({
      event: 'cta_click',
      category: 'conversion',
      label: ctaText,
      metadata: {
        location: ctaLocation,
        destination: ctaDestination,
      },
    });
  },

  // Journey Progress
  journeyProgress: (role: string, stage: number, stageName: string) => {
    trackEvent({
      event: 'journey_progress',
      category: 'engagement',
      label: `${role} - Stage ${stage}`,
      value: stage,
      metadata: { role, stage, stage_name: stageName },
    });
  },

  // Webinar Registration
  webinarRegistration: (webinarTitle: string, webinarDate: string) => {
    trackEvent({
      event: 'webinar_registration',
      category: 'lead_generation',
      label: webinarTitle,
      value: 1,
      metadata: { webinar_date: webinarDate },
    });
  },
};
```

### 3. CONVERSION TRACKING

```typescript
// lib/analytics/conversions.ts
export const CONVERSION_EVENTS = {
  // Micro-conversions
  EMAIL_SIGNUP: 'email_signup',
  RESOURCE_DOWNLOAD: 'resource_download',
  VIDEO_VIEW_COMPLETE: 'video_complete',
  CALCULATOR_COMPLETE: 'calculator_complete',
  WEBINAR_REGISTRATION: 'webinar_registration',

  // Macro-conversions
  DEMO_REQUEST: 'demo_request',
  QUOTE_REQUEST: 'quote_request',
  CONTACT_FORM: 'contact_form',
  PHONE_CALL: 'phone_call',

  // Advanced conversions
  SQL_QUALIFIED: 'sql_qualified',
  OPPORTUNITY_CREATED: 'opportunity_created',
};

export function trackConversion(
  conversionType: string,
  conversionValue: number = 0,
  metadata: Record<string, any> = {}
) {
  // Track in GTM
  trackEvent({
    event: 'conversion',
    category: 'conversion',
    label: conversionType,
    value: conversionValue,
    metadata,
  });

  // Send to GA4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: process.env.NEXT_PUBLIC_GA_CONVERSION_ID,
      value: conversionValue,
      currency: 'SEK',
      transaction_id: `conv_${Date.now()}`,
      ...metadata,
    });
  }

  // Send to HubSpot
  if (metadata.email) {
    trackHubSpotConversion(metadata.email, conversionType, conversionValue);
  }
}

async function trackHubSpotConversion(
  email: string,
  conversionType: string,
  conversionValue: number
) {
  try {
    await fetch('/api/hubspot/track-conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        conversionType,
        conversionValue,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    console.error('HubSpot conversion tracking error:', error);
  }
}
```

### 4. HOTJAR INTEGRATION

```typescript
// lib/analytics/hotjar.ts
export const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;
export const HOTJAR_VERSION = 6;

export function initHotjar() {
  if (!HOTJAR_ID || typeof window === 'undefined') return;

  (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
    h.hj = h.hj || function() { (h.hj.q = h.hj.q || []).push(arguments); };
    h._hjSettings = { hjid: HOTJAR_ID, hjsv: HOTJAR_VERSION };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
}

// Trigger Hotjar events
export function hotjarEvent(eventName: string) {
  if (typeof window !== 'undefined' && (window as any).hj) {
    (window as any).hj('event', eventName);
  }
}

// Identify users in Hotjar
export function hotjarIdentify(userId: string, attributes: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).hj) {
    (window as any).hj('identify', userId, attributes);
  }
}
```

---

## SÄKERHET & COMPLIANCE

### 1. GDPR COMPLIANCE

```typescript
// lib/gdpr/cookieConsent.ts
import Cookies from 'js-cookie';

export const COOKIE_CONSENT_NAME = 'ken_cookie_consent';
export const COOKIE_CONSENT_DURATION = 365; // days

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export function getCookieConsent(): CookieConsent | null {
  const consent = Cookies.get(COOKIE_CONSENT_NAME);
  return consent ? JSON.parse(consent) : null;
}

export function setCookieConsent(consent: Omit<CookieConsent, 'timestamp'>) {
  const consentWithTimestamp: CookieConsent = {
    ...consent,
    timestamp: new Date().toISOString(),
  };

  Cookies.set(COOKIE_CONSENT_NAME, JSON.stringify(consentWithTimestamp), {
    expires: COOKIE_CONSENT_DURATION,
    sameSite: 'strict',
    secure: true,
  });

  // Initialize tracking based on consent
  if (consent.analytics) {
    initGTM();
    initHotjar();
  }

  return consentWithTimestamp;
}

export function hasConsent(type: keyof Omit<CookieConsent, 'timestamp'>): boolean {
  const consent = getCookieConsent();
  return consent ? consent[type] : false;
}
```

```typescript
// components/CookieConsentBanner.tsx
'use client';

import { useState, useEffect } from 'react';
import { getCookieConsent, setCookieConsent } from '@/lib/gdpr/cookieConsent';
import { Button } from '@/components/ui/Button';

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookieConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    setCookieConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Vi använder cookies</h3>
            <p className="text-sm text-gray-600">
              Vi använder cookies för att förbättra din upplevelse på vår webbplats,
              analysera trafik och visa relevant innehåll.
              {' '}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-ken-blue underline"
              >
                Läs mer
              </button>
            </p>

            {showDetails && (
              <div className="mt-4 space-y-2 text-sm">
                <div>
                  <strong>Nödvändiga cookies:</strong> Krävs för webbplatsens funktion
                </div>
                <div>
                  <strong>Analyscookies:</strong> Hjälper oss förstå hur besökare använder webbplatsen
                </div>
                <div>
                  <strong>Marknadsföringscookies:</strong> Används för att visa relevant reklam
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={handleAcceptNecessary}>
              Endast Nödvändiga
            </Button>
            <Button onClick={handleAcceptAll}>
              Acceptera Alla
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 2. FORM DATA PROTECTION

```typescript
// lib/security/formValidation.ts
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

// Sanitize user input
export function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // Strip all HTML
    ALLOWED_ATTR: [],
  });
}

// Rate limiting for form submissions
const submissionCache = new Map<string, number[]>();
const MAX_SUBMISSIONS = 5;
const TIME_WINDOW = 60 * 1000; // 1 minute

export function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const submissions = submissionCache.get(identifier) || [];

  // Remove old submissions outside time window
  const recentSubmissions = submissions.filter(time => now - time < TIME_WINDOW);

  if (recentSubmissions.length >= MAX_SUBMISSIONS) {
    return false; // Rate limit exceeded
  }

  recentSubmissions.push(now);
  submissionCache.set(identifier, recentSubmissions);

  return true;
}

// Email validation with disposable email check
const DISPOSABLE_EMAIL_DOMAINS = [
  'tempmail.com',
  '10minutemail.com',
  'guerrillamail.com',
  // ... add more
];

export function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return DISPOSABLE_EMAIL_DOMAINS.includes(domain);
}

export const contactFormValidation = z.object({
  firstName: z.string()
    .min(2, 'Förnamn måste vara minst 2 tecken')
    .max(50, 'Förnamn får max vara 50 tecken')
    .transform(sanitizeInput),
  lastName: z.string()
    .min(2, 'Efternamn måste vara minst 2 tecken')
    .max(50, 'Efternamn får max vara 50 tecken')
    .transform(sanitizeInput),
  email: z.string()
    .email('Ogiltig e-postadress')
    .refine(email => !isDisposableEmail(email), 'Temporära e-postadresser är inte tillåtna'),
  phone: z.string()
    .regex(/^[\d\s\+\-\(\)]+$/, 'Ogiltigt telefonnummer')
    .transform(sanitizeInput),
  company: z.string()
    .min(2, 'Företagsnamn krävs')
    .max(100, 'Företagsnamn får max vara 100 tecken')
    .transform(sanitizeInput),
  message: z.string()
    .max(1000, 'Meddelandet får max vara 1000 tecken')
    .transform(sanitizeInput),
  consent: z.boolean()
    .refine(val => val === true, 'Du måste godkänna behandling av personuppgifter'),
  honeypot: z.string().max(0), // Should be empty (bot detection)
});
```

### 3. DATA ENCRYPTION

```typescript
// lib/security/encryption.ts
import crypto from 'crypto';

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY!; // Must be 32 bytes
const ALGORITHM = 'aes-256-gcm';

export function encrypt(text: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    ALGORITHM,
    Buffer.from(ENCRYPTION_KEY, 'hex'),
    iv
  );

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag();

  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
}

export function decrypt(encryptedData: string): string {
  const [ivHex, authTagHex, encrypted] = encryptedData.split(':');

  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    Buffer.from(ENCRYPTION_KEY, 'hex'),
    Buffer.from(ivHex, 'hex')
  );

  decipher.setAuthTag(Buffer.from(authTagHex, 'hex'));

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}
```

---

## PERFORMANCE & OPTIMERING

### 1. IMAGE OPTIMIZATION

```typescript
// components/OptimizedImage.tsx
import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}
```

### 2. CODE SPLITTING

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

// Calculator components - loaded only when needed
const LCCCalculator = dynamic(() => import('@/components/calculators/LCCCalculator'), {
  loading: () => <CalculatorSkeleton />,
  ssr: false, // Client-side only
});

const ROISimulator = dynamic(() => import('@/components/calculators/ROISimulator'), {
  loading: () => <CalculatorSkeleton />,
  ssr: false,
});

// Heavy libraries
const Chart = dynamic(() => import('react-chartjs-2'), {
  loading: () => <ChartSkeleton />,
  ssr: false,
});
```

### 3. CACHING STRATEGY

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

---

## UTVECKLINGSTIDSLINJE

### Fasindelning (24 veckor totalt)

```
FAS 1: FOUNDATION & SETUP (Vecka 1-4)
├─ Vecka 1-2: Projekt Setup & Design System
│  ├─ Repository setup och CI/CD pipeline
│  ├─ Design system implementation (Tailwind + components)
│  ├─ Development environment setup
│  └─ Team onboarding
│
└─ Vecka 3-4: CMS & Infrastruktur
   ├─ Sanity.io setup och schema design
   ├─ Vercel deployment setup
   ├─ HubSpot integration grundläggande
   └─ Analytics setup (GTM, GA4, Hotjar)

FAS 2: CORE PAGES (Vecka 5-10)
├─ Vecka 5-6: Homepage & Navigation
│  ├─ Homepage design och implementation
│  ├─ Global navigation och footer
│  ├─ Mobile menu
│  └─ SEO foundation
│
├─ Vecka 7-8: Branch Landing Pages (7 pages)
│  ├─ Branch page template development
│  ├─ Content integration från Sanity
│  ├─ Video integration
│  └─ CTA och conversion tracking
│
└─ Vecka 9-10: Role Journey Framework
   ├─ Journey navigation component
   ├─ Progress tracking
   ├─ Stage template development
   └─ Content block system

FAS 3: INTERACTIVE TOOLS (Vecka 11-14)
├─ Vecka 11-12: Kalkylatorer (LCC, ROI, Capacity)
│  ├─ Calculator engines (logic)
│  ├─ Multi-step form UI
│  ├─ Results visualization (charts)
│  └─ PDF report generation
│
└─ Vecka 13-14: Self-Assessment Tools
   ├─ Behovsanalys tool
   ├─ Miljöanalys tool
   ├─ ROI-simulator advanced
   └─ Results och recommendations engine

FAS 4: CONTENT & RESOURCES (Vecka 15-17)
├─ Vecka 15-16: Case Studies & Blog
│  ├─ Case study template
│  ├─ Blog post template
│  ├─ Category och filtering
│  └─ Search functionality
│
└─ Vecka 17: Resource Library
   ├─ Resource browser
   ├─ Download tracking
   ├─ Gated content implementation
   └─ Lead generation forms

FAS 5: INTEGRATION & AUTOMATION (Vecka 18-19)
├─ CRM Integration Deep-dive
│  ├─ HubSpot workflows automation
│  ├─ Lead scoring implementation
│  ├─ Email automation triggers
│  └─ Contact syncing
│
└─ Analytics & Tracking
   ├─ Conversion tracking implementation
   ├─ Event tracking across all pages
   ├─ Hotjar setup och heatmaps
   └─ Custom dashboards

FAS 6: TESTING & OPTIMIZATION (Vecka 20-22)
├─ Vecka 20: Testing
│  ├─ Unit tests för calculators
│  ├─ Integration tests för forms
│  ├─ E2E tests (Playwright)
│  └─ Performance testing
│
├─ Vecka 21: QA & Bug Fixes
│  ├─ Cross-browser testing
│  ├─ Mobile testing
│  ├─ Accessibility audit
│  └─ Bug fixing
│
└─ Vecka 22: Optimization
   ├─ Performance optimization
   ├─ SEO optimization
   ├─ Image optimization
   └─ Code splitting

FAS 7: LAUNCH PREPARATION (Vecka 23-24)
├─ Vecka 23: Content Population
│  ├─ All pages content review
│  ├─ SEO metadata completion
│  ├─ Image och video upload
│  └─ Final content review
│
└─ Vecka 24: Launch
   ├─ Production deployment
   ├─ DNS setup
   ├─ SSL certificates
   ├─ Monitoring setup
   ├─ Launch checklist completion
   └─ Team training
```

### Detaljerad Tidslinje per Vecka

#### Vecka 1-2: Foundation
```yaml
Deliverables:
  - Next.js 14 project struktur
  - Tailwind CSS design system
  - Komponentbibliotek (buttons, forms, cards)
  - TypeScript konfiguration
  - ESLint och Prettier setup
  - Git branching strategi
  - CI/CD pipeline (GitHub Actions)

Team:
  - Lead Developer: 100%
  - Frontend Developer: 100%
  - DevOps: 50%

Milestones:
  - ✓ Development environment fungerar
  - ✓ Design system deployed till Storybook
  - ✓ Första komponenter implementerade
```

#### Vecka 3-4: CMS & Infrastructure
```yaml
Deliverables:
  - Sanity Studio setup
  - Content schemas (branch, role, case studies, blog)
  - Vercel deployment konfiguration
  - HubSpot API integration grundläggande
  - Google Tag Manager setup
  - Hotjar installation

Team:
  - Lead Developer: 100%
  - Backend Developer: 100%
  - DevOps: 100%

Milestones:
  - ✓ Content kan skapas i Sanity
  - ✓ Site deployed till staging
  - ✓ Analytics tracking fungerar
```

#### Vecka 5-6: Homepage & Navigation
```yaml
Deliverables:
  - Homepage hero section
  - Value proposition section
  - Featured case studies
  - Branch overview section
  - Global navigation med megamenu
  - Footer med links och kontaktinfo
  - Mobile navigation

Team:
  - Frontend Developer x2: 100%
  - UI/UX Designer: 50%

Milestones:
  - ✓ Homepage live på staging
  - ✓ Navigation fungerar på alla devices
  - ✓ Performance score >85
```

#### Vecka 7-8: Branch Landing Pages
```yaml
Deliverables:
  - 7 branch landing pages:
    - Sjukvård
    - Hotell
    - Räddningstjänst
    - Industri
    - Utbildning
    - Försvar
    - Fastighet
  - Branch page template
  - Video integration
  - Case study widgets
  - Lead capture forms

Team:
  - Frontend Developer x2: 100%
  - Content Writer: 100%
  - Video Specialist: 50%

Milestones:
  - ✓ Alla 7 branch pages live
  - ✓ SEO metadata komplett
  - ✓ Conversion tracking fungerar
```

#### Vecka 9-10: Role Journey Framework
```yaml
Deliverables:
  - Role journey navigation
  - Progress tracking system
  - 56 journey pages (7 roles x 8 stages)
  - Content block system
  - Video integration
  - Download tracking
  - Next-step recommendations

Team:
  - Frontend Developer x2: 100%
  - Content Writer x2: 100%

Milestones:
  - ✓ Journey framework fungerar
  - ✓ All content migrerad från Fas 2 dokumentation
  - ✓ Lead scoring integrerad
```

#### Vecka 11-12: Core Calculators
```yaml
Deliverables:
  - LCC Calculator
    - Multi-step form (4 steps)
    - Calculation engine
    - Results visualization
    - PDF report generation
  - ROI Simulator
    - Input wizard
    - Cash flow calculations
    - Interactive charts
    - Savings breakdown
  - Capacity Calculator
    - Facility assessment
    - Machine recommendations
    - Space planning
    - Cost estimates

Team:
  - Frontend Developer x2: 100%
  - Backend Developer: 100%
  - UI/UX Designer: 100%

Milestones:
  - ✓ Alla 3 calculators fungerar
  - ✓ Results kan sparas och delas
  - ✓ Lead capture integrerad
```

#### Vecka 13-14: Self-Assessment Tools
```yaml
Deliverables:
  - Behovsanalys (Needs Assessment)
  - Miljöanalys (Environmental Analysis)
  - Upphandlingsgenerator
  - Compliance Checker
  - Multi-site Optimizer

Team:
  - Frontend Developer: 100%
  - Backend Developer: 100%

Milestones:
  - ✓ 5 assessment tools live
  - ✓ Recommendations engine fungerar
  - ✓ Results sparas i HubSpot
```

#### Vecka 15-16: Case Studies & Blog
```yaml
Deliverables:
  - Case study template
  - Case study listing page
  - Filter och search
  - Blog template
  - Blog listing page
  - Category pages
  - Author pages

Team:
  - Frontend Developer: 100%
  - Content Writer: 100%

Milestones:
  - ✓ 10 case studies publicerade
  - ✓ 15 blog posts publicerade
  - ✓ Search fungerar
```

#### Vecka 17: Resource Library
```yaml
Deliverables:
  - Resource browser
  - Filtering (branch, role, type)
  - Download tracking
  - Gated content forms
  - Email automation triggers

Team:
  - Frontend Developer: 100%
  - Backend Developer: 50%

Milestones:
  - ✓ 30+ resources tillgängliga
  - ✓ Download tracking fungerar
  - ✓ Email automation aktiv
```

#### Vecka 18-19: Integration & Automation
```yaml
Deliverables:
  - HubSpot workflows
  - Lead scoring rules
  - Email automation
  - Contact syncing
  - Conversion tracking
  - Event tracking
  - Custom analytics dashboards

Team:
  - Backend Developer: 100%
  - Marketing Automation Specialist: 100%
  - Analytics Specialist: 100%

Milestones:
  - ✓ All tracking implementerad
  - ✓ HubSpot automation aktiv
  - ✓ Dashboards fungerar
```

#### Vecka 20-22: Testing & Optimization
```yaml
Deliverables:
  - Unit tests (coverage >80%)
  - Integration tests
  - E2E tests (critical paths)
  - Performance optimization
  - SEO optimization
  - Accessibility compliance (WCAG 2.1 AA)
  - Bug fixes

Team:
  - QA Engineer x2: 100%
  - Frontend Developer: 50%
  - Performance Specialist: 100%

Milestones:
  - ✓ All tests passing
  - ✓ Performance score >90
  - ✓ Zero critical bugs
  - ✓ WCAG AA compliant
```

#### Vecka 23-24: Launch
```yaml
Deliverables:
  - Final content review
  - SEO metadata complete
  - Production deployment
  - DNS configuration
  - SSL certificates
  - Monitoring alerts
  - Team training
  - Documentation

Team:
  - Full Team: 100%

Milestones:
  - ✓ Production site live
  - ✓ All systems operational
  - ✓ Team trained
  - ✓ Monitoring active
```

---

## TEAM & RESURSER

### Team Struktur

#### Core Development Team (Permanent)

**1. Lead Developer / Technical Architect**
- Ansvar: Teknisk arkitektur, code review, team lead
- Kompetens: Next.js, TypeScript, System design
- Tidsåtgång: 100% (24 veckor)
- Kostnad: 120,000 kr/månad x 6 månader = 720,000 kr

**2. Senior Frontend Developer**
- Ansvar: Component development, animations, responsive design
- Kompetens: React, Tailwind CSS, Framer Motion
- Tidsåtgång: 100% (20 veckor)
- Kostnad: 100,000 kr/månad x 5 månader = 500,000 kr

**3. Frontend Developer**
- Ansvar: Page implementation, form development, UI components
- Kompetens: React, TypeScript, CSS
- Tidsåtgång: 100% (18 veckor)
- Kostnad: 85,000 kr/månad x 4.5 månader = 382,500 kr

**4. Backend Developer**
- Ansvar: API development, CRM integration, database
- Kompetens: Node.js, API design, HubSpot
- Tidsåtgång: 100% (16 veckor)
- Kostnad: 95,000 kr/månad x 4 månader = 380,000 kr

**5. DevOps Engineer**
- Ansvar: CI/CD, hosting, monitoring, security
- Kompetens: Vercel, GitHub Actions, Cloud infrastructure
- Tidsåtgång: 50% (12 veckor)
- Kostnad: 110,000 kr/månad x 3 månader x 50% = 165,000 kr

#### Specialist Team (Part-time/Consultant)

**6. UI/UX Designer**
- Ansvar: Design system, user experience, prototyping
- Tidsåtgång: 50% (16 veckor)
- Kostnad: 90,000 kr/månad x 4 månader x 50% = 180,000 kr

**7. QA Engineer (2x)**
- Ansvar: Testing, bug tracking, quality assurance
- Tidsåtgång: 100% (4 veckor each)
- Kostnad: 75,000 kr/månad x 2 månader x 2 personer = 300,000 kr

**8. Performance Specialist**
- Ansvar: Performance optimization, Core Web Vitals
- Tidsåtgång: 2 veckor full-time
- Kostnad: 80,000 kr

**9. Marketing Automation Specialist**
- Ansvar: HubSpot setup, workflows, lead scoring
- Tidsåtgång: 3 veckor full-time
- Kostnad: 90,000 kr

**10. Analytics Specialist**
- Ansvar: GA4 setup, GTM, conversion tracking, dashboards
- Tidsåtgång: 2 veckor full-time
- Kostnad: 75,000 kr

**11. SEO Specialist**
- Ansvar: Technical SEO, metadata, structured data
- Tidsåtgång: 2 veckor full-time
- Kostnad: 70,000 kr

**12. Content Writer (2x)**
- Ansvar: Content migration, copywriting, SEO content
- Tidsåtgång: 50% (8 veckor each)
- Kostnad: 60,000 kr/månad x 4 månader x 50% x 2 = 240,000 kr

**13. Video Specialist**
- Ansvar: Video integration, encoding, streaming setup
- Tidsåtgång: 1 vecka full-time
- Kostnad: 40,000 kr

### Total Personalkostnader
```
Core Team:         2,147,500 kr
Specialist Team:   1,075,000 kr
-----------------------------------
TOTAL PERSONAL:    3,222,500 kr
```

### Verktyg & Tjänster (Årliga kostnader)

#### Development & Hosting
```yaml
Vercel Pro:
  - Cost: 20 USD/månad x 12 = 240 USD/år
  - SEK: 2,640 kr/år

GitHub Team:
  - Cost: 4 USD/user/månad x 10 users x 12 = 480 USD/år
  - SEK: 5,280 kr/år

Sanity.io Growth:
  - Cost: 99 USD/månad x 12 = 1,188 USD/år
  - SEK: 13,068 kr/år

Domain & SSL:
  - Cost: 500 kr/år
```

#### CRM & Marketing
```yaml
HubSpot Marketing Hub Professional:
  - Cost: 800 USD/månad x 12 = 9,600 USD/år
  - SEK: 105,600 kr/år

SendGrid Pro:
  - Cost: 90 USD/månad x 12 = 1,080 USD/år
  - SEK: 11,880 kr/år
```

#### Analytics & Monitoring
```yaml
Google Analytics 4:
  - Cost: Gratis (standard)

Hotjar Plus:
  - Cost: 80 USD/månad x 12 = 960 USD/år
  - SEK: 10,560 kr/år

Sentry Business:
  - Cost: 26 USD/månad x 12 = 312 USD/år
  - SEK: 3,432 kr/år

Vercel Analytics:
  - Cost: Inkluderat i Vercel Pro
```

#### Design & Collaboration
```yaml
Figma Professional:
  - Cost: 12 USD/user/månad x 5 users x 12 = 720 USD/år
  - SEK: 7,920 kr/år

Linear (Project Management):
  - Cost: 8 USD/user/månad x 10 users x 12 = 960 USD/år
  - SEK: 10,560 kr/år

Notion Team:
  - Cost: 8 USD/user/månad x 10 users x 12 = 960 USD/år
  - SEK: 10,560 kr/år
```

### Total Verktyg & Tjänster (År 1)
```
Development & Hosting:    21,488 kr
CRM & Marketing:         117,480 kr
Analytics & Monitoring:   13,992 kr
Design & Collaboration:   29,040 kr
-----------------------------------
TOTAL VERKTYG:           182,000 kr
```

### Totalt Ongoing (Efter Launch)
```yaml
Månadskostnader (Ongoing):
  - Hosting (Vercel Pro): 220 kr/månad
  - Sanity.io: 1,089 kr/månad
  - HubSpot: 8,800 kr/månad
  - SendGrid: 990 kr/månad
  - Hotjar: 880 kr/månad
  - Sentry: 286 kr/månad
  - Figma: 660 kr/månad
  - Linear: 880 kr/månad
  - Notion: 880 kr/månad

Total Ongoing: 14,685 kr/månad (176,220 kr/år)
```

---

## TESTING & QA

### Test Strategi

#### 1. Unit Testing
```typescript
// Example: Calculator Unit Tests
// tests/calculators/lcc.test.ts
import { describe, it, expect } from 'vitest';
import { calculateLCC } from '@/lib/calculators/lcc';

describe('LCC Calculator', () => {
  it('should calculate correct current costs for outsourced solution', () => {
    const inputs = {
      currentSolution: 'outsourced' as const,
      monthlyVolume: 5000,
      outsourceCostPerKg: 15,
      kenSolutionType: 'standard' as const,
      leasePeriodYears: 5,
    };

    const results = calculateLCC(inputs);

    expect(results.currentCosts.yearly).toBe(900000); // 5000 * 15 * 12
    expect(results.currentCosts.perKg).toBe(15);
  });

  it('should calculate savings correctly', () => {
    const inputs = {
      currentSolution: 'outsourced' as const,
      monthlyVolume: 5000,
      outsourceCostPerKg: 15,
      kenSolutionType: 'standard' as const,
      leasePeriodYears: 5,
    };

    const results = calculateLCC(inputs);

    expect(results.savings.yearly).toBeGreaterThan(0);
    expect(results.savings.percentage).toBeGreaterThan(0);
  });

  it('should calculate ROI correctly', () => {
    const inputs = {
      currentSolution: 'outsourced' as const,
      monthlyVolume: 5000,
      outsourceCostPerKg: 15,
      kenSolutionType: 'standard' as const,
      leasePeriodYears: 5,
    };

    const results = calculateLCC(inputs);

    expect(results.roi.months).toBeGreaterThan(0);
    expect(results.roi.percentage).toBeGreaterThan(0);
  });
});
```

**Coverage Target:** >80% för all business logic

#### 2. Integration Testing
```typescript
// Example: Form Submission Integration Test
// tests/integration/contactForm.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '@/components/forms/ContactForm';

describe('Contact Form Integration', () => {
  beforeEach(() => {
    // Mock fetch
    global.fetch = vi.fn();
  });

  it('should submit form and show success message', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Tack för din förfrågan!' }),
    });

    render(<ContactForm />);

    // Fill form
    fireEvent.change(screen.getByLabelText('Förnamn'), {
      target: { value: 'Johan' },
    });
    fireEvent.change(screen.getByLabelText('Efternamn'), {
      target: { value: 'Andersson' },
    });
    fireEvent.change(screen.getByLabelText('E-post'), {
      target: { value: 'johan@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Företag'), {
      target: { value: 'Exempel AB' },
    });
    fireEvent.click(screen.getByLabelText('Jag godkänner...'));

    // Submit
    fireEvent.click(screen.getByText('Skicka'));

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Tack för din förfrågan!')).toBeInTheDocument();
    });

    // Verify API call
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/forms/contact',
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('johan@example.com'),
      })
    );
  });

  it('should show validation errors for invalid input', async () => {
    render(<ContactForm />);

    // Submit without filling form
    fireEvent.click(screen.getByText('Skicka'));

    // Check for validation errors
    await waitFor(() => {
      expect(screen.getByText('Förnamn måste vara minst 2 tecken')).toBeInTheDocument();
      expect(screen.getByText('Ogiltig e-postadress')).toBeInTheDocument();
    });
  });
});
```

#### 3. End-to-End Testing (Playwright)
```typescript
// tests/e2e/journey.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Role Journey Flow', () => {
  test('VD should complete full journey', async ({ page }) => {
    // Navigate to VD journey
    await page.goto('/roller/vd/1-forsta-kontakt');

    // Check page loaded
    await expect(page.locator('h1')).toContainText('Första Kontakt');

    // Progress through stages
    for (let stage = 1; stage <= 8; stage++) {
      // Read content
      await expect(page.locator('.content-area')).toBeVisible();

      // Download resource if available
      const downloadButton = page.locator('button:has-text("Ladda Ner")');
      if (await downloadButton.isVisible()) {
        await downloadButton.click();

        // Fill lead form
        await page.fill('input[name="email"]', 'test@example.com');
        await page.fill('input[name="company"]', 'Test AB');
        await page.click('button[type="submit"]');

        // Wait for download
        await expect(page.locator('.success-message')).toBeVisible();
      }

      // Go to next stage (if not last)
      if (stage < 8) {
        await page.click(`a:has-text("Steg ${stage + 1}")`);
        await page.waitForLoadState('networkidle');
      }
    }

    // Verify completion
    await expect(page.locator('.journey-complete')).toBeVisible();
  });

  test('LCC Calculator flow', async ({ page }) => {
    await page.goto('/verktyg/lcc-kalkylator');

    // Step 1: Current situation
    await page.click('label:has-text("Outsourcat")');
    await page.fill('input[name="monthlyVolume"]', '5000');
    await page.fill('input[name="outsourceCostPerKg"]', '15');
    await page.click('button:has-text("Nästa")');

    // Step 2: Skip (not applicable for outsourced)
    await page.click('button:has-text("Nästa")');

    // Step 3: KEN Solution
    await page.click('label:has-text("Standard")');
    await page.selectOption('select[name="leasePeriodYears"]', '5');
    await page.click('button:has-text("Nästa")');

    // Step 4: Review and calculate
    await page.click('button:has-text("Beräkna")');

    // Wait for results
    await expect(page.locator('.results-summary')).toBeVisible();
    await expect(page.locator('.savings-amount')).toContainText('kr');

    // Verify charts loaded
    await expect(page.locator('canvas')).toBeVisible();

    // Request demo
    await page.click('button:has-text("Boka Gratis Konsultation")');
    await expect(page.locator('.demo-modal')).toBeVisible();
  });
});
```

### Test Coverage Requirements

```yaml
Unit Tests:
  - Coverage: >80%
  - Focus: Business logic, calculators, utilities
  - Framework: Vitest

Integration Tests:
  - Coverage: All forms, API routes
  - Focus: Form submissions, CRM integration
  - Framework: React Testing Library

E2E Tests:
  - Coverage: Critical user journeys
  - Scenarios:
    - Homepage → Branch page → Contact form
    - Calculator flow → Demo request
    - Journey flow → Resource download
    - Case study → Contact
  - Framework: Playwright

Performance Tests:
  - Lighthouse CI scores:
    - Performance: >90
    - Accessibility: >95
    - Best Practices: >95
    - SEO: >95
  - Core Web Vitals:
    - LCP: <2.5s
    - FID: <100ms
    - CLS: <0.1

Security Tests:
  - OWASP Top 10 checks
  - Dependency vulnerability scanning
  - SSL/TLS configuration
  - GDPR compliance verification
```

### QA Process

```
1. DEVELOPMENT PHASE
   ├─ Developer writes unit tests
   ├─ Code review by lead developer
   ├─ Automated tests run on PR
   └─ Merge to main after approval

2. STAGING DEPLOYMENT
   ├─ Automated E2E tests run
   ├─ Manual QA testing
   ├─ Performance testing
   ├─ Accessibility testing
   └─ Cross-browser testing

3. PRE-PRODUCTION
   ├─ Full regression testing
   ├─ Load testing
   ├─ Security audit
   └─ Stakeholder UAT

4. PRODUCTION DEPLOYMENT
   ├─ Smoke tests
   ├─ Monitoring alerts
   └─ Rollback plan ready
```

---

## DEPLOYMENT & DEVOPS

### CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, staging]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Run linters
        run: pnpm run lint

      - name: Run type check
        run: pnpm run type-check

      - name: Run unit tests
        run: pnpm run test:unit

      - name: Run integration tests
        run: pnpm run test:integration

      - name: Upload coverage
        uses: codecov/codecov-action@v3

  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Install Playwright
        run: pnpm exec playwright install --with-deps

      - name: Run E2E tests
        run: pnpm run test:e2e

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/

  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://staging.kensverige.se
            https://staging.kensverige.se/branscher/sjukvard
          uploadArtifacts: true

  deploy:
    needs: [test, e2e]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### Deployment Strategi

#### Environments
```yaml
Development:
  Branch: feature/*
  URL: localhost:3000
  Auto-deploy: No
  Access: Team only

Staging:
  Branch: staging
  URL: staging.kensverige.se
  Auto-deploy: Yes (after tests pass)
  Access: Password protected
  Purpose: QA testing, stakeholder review

Production:
  Branch: main
  URL: www.kensverige.se
  Auto-deploy: Yes (after approval)
  Access: Public
  Rollback: Automatic on errors
```

#### Deployment Checklist

```markdown
PRE-DEPLOYMENT
- [ ] All tests passing (unit, integration, e2e)
- [ ] Performance score >90
- [ ] Accessibility audit passed
- [ ] Security scan completed
- [ ] Content reviewed and approved
- [ ] SEO metadata complete
- [ ] Analytics tracking verified
- [ ] Stakeholder approval obtained

DEPLOYMENT
- [ ] Database backup (if applicable)
- [ ] Environment variables set
- [ ] DNS records configured
- [ ] SSL certificates active
- [ ] CDN cache purged
- [ ] Deploy to production
- [ ] Smoke tests passed

POST-DEPLOYMENT
- [ ] Homepage loads correctly
- [ ] Forms submission works
- [ ] CRM integration active
- [ ] Analytics tracking working
- [ ] Monitoring alerts configured
- [ ] Team notified
- [ ] Documentation updated
```

### Monitoring & Alerts

```typescript
// lib/monitoring/sentry.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  beforeSend(event, hint) {
    // Filter out non-critical errors
    if (event.exception) {
      const error = hint.originalException;
      if (error instanceof Error && error.message.includes('ResizeObserver')) {
        return null; // Ignore ResizeObserver errors
      }
    }
    return event;
  },
});
```

```yaml
# Monitoring Setup
Error Tracking:
  - Tool: Sentry
  - Alerts: Slack + Email
  - Threshold: >10 errors/hour

Performance Monitoring:
  - Tool: Vercel Analytics
  - Metrics: Core Web Vitals
  - Alerts: LCP >3s, CLS >0.2

Uptime Monitoring:
  - Tool: UptimeRobot
  - Check interval: 5 minutes
  - Alerts: Email + SMS

Analytics:
  - Tool: Google Analytics 4
  - Custom dashboards: Looker Studio
  - Reports: Weekly automated email
```

---

## BUDGET & KOSTNADER

### Totalt Budget Översikt

```yaml
PERSONAL & TEAM:
  Core Development Team:        2,147,500 kr
  Specialist Team:              1,075,000 kr
  Subtotal Personal:            3,222,500 kr

VERKTYG & TJÄNSTER (År 1):
  Development & Hosting:           21,488 kr
  CRM & Marketing:                117,480 kr
  Analytics & Monitoring:          13,992 kr
  Design & Collaboration:          29,040 kr
  Subtotal Verktyg:               182,000 kr

EXTERNA TJÄNSTER:
  SSL Certificates & Security:     15,000 kr
  Legal (Privacy Policy, Terms):   25,000 kr
  Contingency (10%):              344,450 kr
  Subtotal Externa:               384,450 kr

TOTALT FAS 3:                   3,788,950 kr
  Avrundning:                     101,050 kr
================================
TOTAL BUDGET:                   4,890,000 kr
```

### Budget per Fas

```yaml
Fas 1 - Foundation (Vecka 1-4):
  Personal:                       645,000 kr
  Verktyg Setup:                   45,000 kr
  Total:                          690,000 kr

Fas 2 - Core Pages (Vecka 5-10):
  Personal:                       968,000 kr
  Content Creation:               120,000 kr
  Total:                        1,088,000 kr

Fas 3 - Interactive Tools (Vecka 11-14):
  Personal:                       645,000 kr
  UI/UX Design:                    90,000 kr
  Total:                          735,000 kr

Fas 4 - Content & Resources (Vecka 15-17):
  Personal:                       387,000 kr
  Content Population:              80,000 kr
  Total:                          467,000 kr

Fas 5 - Integration (Vecka 18-19):
  Personal:                       322,500 kr
  HubSpot Setup:                   90,000 kr
  Total:                          412,500 kr

Fas 6 - Testing & QA (Vecka 20-22):
  Personal:                       484,000 kr
  Testing Tools:                   35,000 kr
  Total:                          519,000 kr

Fas 7 - Launch (Vecka 23-24):
  Personal:                       323,000 kr
  Launch Support:                  50,000 kr
  Total:                          373,000 kr

Ongoing Costs (Per månad efter launch):
  Hosting & Services:           14,685 kr/månad
  Annual:                      176,220 kr/år
```

### ROI Prognos

#### Investment
```
Total Initial Investment (Fas 2 + Fas 3):
  Fas 2 (Marknadsföring):      10,660,000 kr
  Fas 3 (Teknisk):              4,890,000 kr
  ==========================================
  TOTAL YEAR 1:                15,550,000 kr

Ongoing Costs (Månatliga):
  Marketing:                      250,000 kr/månad
  Technical:                       14,685 kr/månad
  ==========================================
  TOTAL ONGOING:                  264,685 kr/månad
```

#### Expected Returns (År 1)

```yaml
Lead Generation Target:
  Website Visitors: 50,000/år
  Conversion Rate: 5%
  Leads Generated: 2,500/år

Lead Quality:
  MQL (Marketing Qualified): 40% = 1,000 leads
  SQL (Sales Qualified): 25% = 625 leads
  Opportunities: 15% = 375 opportunities

Sales Conversion:
  Close Rate: 30%
  Won Deals: 113 deals

Revenue:
  Average Deal Size: 1,200,000 kr
  Total Revenue: 135,600,000 kr

Profit:
  Gross Margin: 30%
  Gross Profit: 40,680,000 kr

  Less Investment: -15,550,000 kr
  Less Ongoing (12 months): -3,176,220 kr

  Net Profit Year 1: 21,953,780 kr

ROI Calculation:
  ROI = (Gain - Cost) / Cost
  ROI = (40,680,000 - 18,726,220) / 18,726,220
  ROI = 117%

  Payback Period: 5.5 months
```

#### 3-Year Projection

```yaml
Year 1:
  Investment: 15,550,000 kr
  Ongoing: 3,176,220 kr
  Revenue: 135,600,000 kr
  Profit: 21,953,780 kr
  ROI: 117%

Year 2:
  Investment: 0 kr (paid off)
  Ongoing: 3,176,220 kr
  Revenue: 175,000,000 kr (+29%)
  Profit: 49,323,780 kr
  ROI: 263%

Year 3:
  Investment: 0 kr
  Ongoing: 3,176,220 kr
  Revenue: 225,000,000 kr (+29%)
  Profit: 64,323,780 kr
  ROI: 344%

3-Year Total:
  Total Investment: 15,550,000 kr
  Total Ongoing: 9,528,660 kr
  Total Revenue: 535,600,000 kr
  Total Profit: 135,601,340 kr
  3-Year ROI: 541%
```

### Cost Breakdown per Deliverable

```yaml
Homepage:
  Design: 40,000 kr
  Development: 120,000 kr
  Content: 20,000 kr
  Total: 180,000 kr

Branch Landing Pages (7):
  Design per page: 15,000 kr x 7 = 105,000 kr
  Development per page: 35,000 kr x 7 = 245,000 kr
  Content per page: 25,000 kr x 7 = 175,000 kr
  Total: 525,000 kr

Role Journey Pages (56):
  Template development: 150,000 kr
  Content per page: 5,000 kr x 56 = 280,000 kr
  Total: 430,000 kr

Interactive Calculators (3):
  LCC Calculator: 180,000 kr
  ROI Simulator: 200,000 kr
  Capacity Calculator: 160,000 kr
  Total: 540,000 kr

Self-Assessment Tools (5):
  Development per tool: 60,000 kr x 5 = 300,000 kr
  Total: 300,000 kr

Case Studies (Initial 10):
  Template: 40,000 kr
  Content per case: 8,000 kr x 10 = 80,000 kr
  Total: 120,000 kr

Blog:
  Template: 35,000 kr
  Initial posts (15): 60,000 kr
  Total: 95,000 kr

Resource Library:
  Development: 90,000 kr
  Initial resources (30): 150,000 kr
  Total: 240,000 kr

CRM Integration:
  HubSpot setup: 120,000 kr
  Workflows: 80,000 kr
  Lead scoring: 40,000 kr
  Total: 240,000 kr

Analytics Setup:
  GTM/GA4: 50,000 kr
  Hotjar: 30,000 kr
  Custom dashboards: 45,000 kr
  Total: 125,000 kr
```

---

## SUCCESS METRICS & KPIs

### Phase 1: Launch (Första 3 månader)

```yaml
Technical Performance:
  - Lighthouse Score: >90
  - Page Load Time: <2s
  - Uptime: >99.5%
  - Zero critical bugs

SEO:
  - Google Search Console indexed pages: 100+
  - Core Web Vitals: All green
  - Organic impressions: >5,000/månad

Traffic:
  - Monthly visitors: 2,000+
  - Bounce rate: <60%
  - Avg session duration: >2 min
  - Pages per session: >3

Lead Generation:
  - Form submissions: 50+/månad
  - Resource downloads: 100+/månad
  - Calculator usage: 30+/månad
  - Demo requests: 10+/månad

Engagement:
  - Video views: 200+/månad
  - Journey completion rate: >30%
  - Email signups: 75+/månad
```

### Phase 2: Growth (Månad 4-12)

```yaml
Traffic Growth:
  - Monthly visitors: 4,000+ (månad 12)
  - Growth rate: 15%/månad
  - Organic traffic: 60% av total
  - Direct traffic: 20%
  - Referral: 15%
  - Social: 5%

Lead Quality:
  - MQL rate: 40%
  - SQL rate: 25%
  - Avg lead score: 35+
  - Response time: <24h

Conversion Rates:
  - Homepage to branch page: 35%
  - Branch page to form: 8%
  - Form completion rate: 75%
  - Calculator to demo: 15%
  - Journey to contact: 20%

Revenue Impact:
  - Pipeline influenced: 50M kr
  - Closed-won revenue: 15M kr
  - Cost per lead: <1,500 kr
  - Customer acquisition cost: <15,000 kr
```

### Ongoing Optimization

```yaml
Monthly Reviews:
  - Performance metrics
  - Conversion funnel analysis
  - A/B test results
  - Content performance
  - User feedback

Quarterly Updates:
  - New features
  - Content refresh
  - SEO improvements
  - Design iterations
  - Technical upgrades

Annual Strategy:
  - Full analytics review
  - User research
  - Competitor analysis
  - Technology stack review
  - Budget planning
```

---

## NÄSTA STEG & REKOMMENDATIONER

### Omedelbar Action Plan

#### Vecka 1: Projektstart
```
1. Godkännande & Kontrakt
   - Slutgiltigt godkännande från ledning
   - Underteckna leverantörskontrakt
   - Budget allokering

2. Team Rekrytering
   - Publicera jobbanner
   - Intervjuer med utvecklare
   - Onboarding planering

3. Projektsetup
   - Projektmanagement tool setup (Linear)
   - Kommunikationskanaler (Slack)
   - Dokumentation struktur (Notion)

4. Kickoff Meeting
   - Full team introduction
   - Vision och mål presentation
   - Rollfördelning
   - Första sprint planering
```

#### Vecka 2-4: Foundation
```
1. Technical Setup
   - Repository creation
   - CI/CD pipeline
   - Development environments
   - Design system start

2. Content Preparation
   - Content audit från Fas 2 dokumentation
   - Content migration plan
   - Asset collection (images, videos)
   - Brand guidelines

3. Third-party Setup
   - Sanity.io account
   - HubSpot configuration
   - Vercel project
   - Domain registration
```

### Risker & Mitigation

```yaml
Risk 1: Development Delays
  Probability: Medium
  Impact: High
  Mitigation:
    - 10% buffer i tidslinje
    - Agile sprints för flexibilitet
    - Regular progress reviews
    - Backup developer resources

Risk 2: Content Quality
  Probability: Low
  Impact: Medium
  Mitigation:
    - Professional copywriters
    - Multiple review rounds
    - SEO expert consultation
    - User testing

Risk 3: Budget Overrun
  Probability: Low
  Impact: High
  Mitigation:
    - Detaljerad budget tracking
    - Weekly financial reviews
    - Change request process
    - 10% contingency fund

Risk 4: Integration Issues
  Probability: Medium
  Impact: Medium
  Mitigation:
    - Early integration testing
    - Sandbox environments
    - Vendor support contracts
    - Fallback solutions

Risk 5: Performance Issues
  Probability: Low
  Impact: High
  Mitigation:
    - Performance testing från start
    - Regular Lighthouse audits
    - CDN implementation
    - Performance specialist review
```

### Post-Launch Support Plan

```yaml
Month 1-3: Intensive Support
  Team:
    - 1x Developer (50%)
    - 1x Content Manager (50%)
    - 1x Marketing specialist (50%)

  Focus:
    - Bug fixes
    - Performance optimization
    - Content updates
    - User feedback implementation

  Cost: 150,000 kr/månad

Month 4-12: Maintenance Mode
  Team:
    - 1x Developer (25%)
    - 1x Content Manager (25%)

  Focus:
    - Monthly updates
    - New content
    - Minor features
    - Analytics review

  Cost: 75,000 kr/månad

Year 2+: Ongoing Evolution
  Team:
    - Quarterly sprints
    - On-demand support

  Focus:
    - Feature enhancements
    - Technology upgrades
    - Scale optimization

  Cost: 200,000 kr/år + project-based
```

---

## APPENDIX

### A. Technology Stack Detail

```yaml
Frontend:
  Framework: Next.js 14.2
  Language: TypeScript 5.4
  Styling: Tailwind CSS 3.4
  UI Library: Radix UI + Headless UI
  Animation: Framer Motion
  Forms: React Hook Form + Zod
  State: Zustand
  Data Fetching: TanStack Query

Backend:
  Runtime: Node.js 20
  API: Next.js API Routes
  CMS: Sanity.io v3
  Database: Vercel KV (Redis)
  Authentication: NextAuth.js (if needed)

Infrastructure:
  Hosting: Vercel
  CDN: Cloudflare
  DNS: Cloudflare
  SSL: Let's Encrypt (via Vercel)
  Monitoring: Sentry + Vercel Analytics

Integration:
  CRM: HubSpot API v3
  Email: SendGrid
  Analytics: GA4, GTM, Hotjar
  Video: Vimeo API

Development:
  Package Manager: pnpm
  Version Control: Git + GitHub
  CI/CD: GitHub Actions
  Testing: Vitest, Playwright, RTL
  Code Quality: ESLint, Prettier
  Documentation: Storybook
```

### B. Browser Support Matrix

```yaml
Desktop:
  Chrome: Last 2 versions
  Firefox: Last 2 versions
  Safari: Last 2 versions
  Edge: Last 2 versions

Mobile:
  iOS Safari: Last 2 versions
  Chrome Android: Last 2 versions
  Samsung Internet: Last 2 versions

Minimum Requirements:
  - JavaScript enabled
  - Cookies enabled
  - Screen resolution: 320px width minimum
```

### C. Accessibility Compliance

```yaml
Standards:
  - WCAG 2.1 Level AA
  - Swedish accessibility law (LOA)
  - EU Web Accessibility Directive

Features:
  - Keyboard navigation
  - Screen reader support
  - High contrast mode
  - Text resizing support
  - Alt text for images
  - ARIA labels
  - Focus indicators
  - Skip links

Testing:
  - Automated: axe-core
  - Manual: Screen reader testing
  - Tools: WAVE, Lighthouse
```

### D. SEO Strategy

```yaml
Technical SEO:
  - Server-side rendering (SSR)
  - Semantic HTML
  - Structured data (Schema.org)
  - XML sitemap
  - Robots.txt
  - Canonical URLs
  - Open Graph tags
  - Twitter cards

On-Page SEO:
  - Keyword research
  - Title tag optimization
  - Meta descriptions
  - Header hierarchy
  - Internal linking
  - Image optimization
  - URL structure
  - Page speed

Content SEO:
  - Long-form content (2000+ words)
  - Industry-specific keywords
  - Local SEO (Swedish market)
  - Regular blog updates
  - Case study optimization
  - Resource library SEO

Link Building:
  - Industry partnerships
  - Guest posting
  - Digital PR
  - Social media promotion
```

### E. GDPR Compliance Checklist

```yaml
Legal Documents:
  - Privacy Policy (Swedish)
  - Cookie Policy
  - Terms of Service
  - Data Processing Agreement

Technical Implementation:
  - Cookie consent banner
  - Consent management
  - Data encryption
  - Secure data storage
  - Right to access
  - Right to deletion
  - Data portability
  - Breach notification system

Data Handling:
  - Minimal data collection
  - Purpose limitation
  - Storage limitation
  - Data minimization
  - Secure processing
  - Third-party processors (DPA)

Documentation:
  - Data mapping
  - Processing records
  - DPIA (if required)
  - Vendor agreements
```

---

## SAMMANFATTNING

Detta omfattande tekniska implementationsdokument beskriver en komplett lösning för KEN Sveriges nya webbplats. Med en budget på **4,890,000 kr** och en tidslinje på **24 veckor** levererar projektet:

### Nyckelleveranser
- ✅ Modern Next.js 14 webbplats med TypeScript
- ✅ 7 branschspecifika landningssidor
- ✅ 56 rollresor över 7 olika roller (8 steg vardera)
- ✅ 8 interaktiva verktyg och kalkylatorer
- ✅ Komplett CMS-integration (Sanity.io)
- ✅ Fullständig CRM-integration (HubSpot)
- ✅ Avancerad analytics och tracking
- ✅ Case study och blogg funktionalitet
- ✅ Resursbibliotek med gated content
- ✅ GDPR-compliant setup
- ✅ WCAG 2.1 AA tillgänglighet

### Förväntade Resultat (År 1)
- 📈 2,500 kvalificerade leads
- 📈 113 stängda affärer
- 📈 135.6M kr i revenue
- 📈 117% ROI
- 📈 5.5 månaders payback period

### Team Requirements
- 5 core developers (full-time varierar)
- 8 specialist konsulter (part-time)
- Totalt 3.2M kr i personalkostnader

### Ongoing Costs
- 14,685 kr/månad för hosting och verktyg
- 176,220 kr/år ongoing

**Status:** Färdig för godkännande och projektstart

**Nästa steg:** Kickoff meeting och team rekrytering (Vecka 1)

---

*Dokument slutfört: 2025-12-11*
*Version: 1.0*
*Author: Claude Sonnet 4.5 för KEN Sverige*
