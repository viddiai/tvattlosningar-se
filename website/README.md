# KEN Sverige - Website

Modern, high-performance website built with Next.js 14, TypeScript, and Tailwind CSS for KEN Sverige's industrial laundry solutions.

## 🚀 Overview

This is a comprehensive B2B website featuring:
- 7 branch-specific landing pages
- 56 role journey pages (7 roles × 8 stages)
- 10 interactive tools and calculators
- Blog, case studies, and resource library
- Full CRM integration (HubSpot)
- Advanced analytics and tracking
- GDPR-compliant setup
- WCAG 2.1 AA accessibility

## 📋 Tech Stack

- **Framework:** Next.js 14.2 (App Router)
- **Language:** TypeScript 5.4
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Radix UI + Headless UI
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod
- **State Management:** Zustand
- **Data Fetching:** TanStack Query
- **CMS:** Sanity.io v3
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4, Hotjar

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+ (recommended package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your keys
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# HubSpot
HUBSPOT_ACCESS_TOKEN=your_access_token

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id

# SendGrid
SENDGRID_API_KEY=your_sendgrid_key

# Sentry (optional)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

### Development

```bash
# Start development server
pnpm dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build
pnpm build

# Start production server
pnpm start
```

## 📂 Project Structure

```
website/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── (marketing)/          # Marketing site group
│   │   │   ├── page.tsx          # Homepage
│   │   │   ├── branscher/        # Branch pages
│   │   │   │   ├── sjukvard/
│   │   │   │   ├── hotell/
│   │   │   │   └── ...
│   │   │   ├── roller/           # Role journeys
│   │   │   ├── verktyg/          # Interactive tools
│   │   │   ├── case/             # Case studies
│   │   │   ├── blogg/            # Blog
│   │   │   └── resurser/         # Resources
│   │   ├── api/                  # API routes
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   │
│   ├── components/               # React components
│   │   ├── ui/                   # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ...
│   │   ├── layout/               # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── forms/                # Form components
│   │   ├── cards/                # Card components
│   │   └── animations/           # Animation wrappers
│   │
│   ├── lib/                      # Utility libraries
│   │   ├── sanity/               # Sanity CMS client & queries
│   │   ├── hubspot/              # HubSpot integration
│   │   ├── analytics/            # Analytics & tracking
│   │   ├── utils/                # Utility functions
│   │   └── hooks/                # Custom React hooks
│   │
│   └── types/                    # TypeScript type definitions
│
├── public/                       # Static assets
├── tests/                        # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .github/
│   └── workflows/                # CI/CD workflows
│
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies & scripts
```

## 🎨 Design System

### Colors

```typescript
// Primary colors
'ken-blue': {
  DEFAULT: '#0066CC',
  50: '#E6F2FF',
  ...
  900: '#001429',
}

'ken-green': {
  DEFAULT: '#00A651',
  50: '#E6F7ED',
  ...
  900: '#002110',
}
```

### Typography

- **Font:** Inter
- **Sizes:** xs (0.75rem) to 9xl (8rem)
- **Weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Components

All components follow a consistent pattern:
- Base components in `/components/ui`
- Composed components in feature folders
- Full TypeScript typing
- Accessibility-first (WCAG 2.1 AA)

## 🧪 Testing

```bash
# Run unit tests
pnpm test:unit

# Run integration tests
pnpm test:integration

# Run E2E tests
pnpm test:e2e

# Generate coverage report
pnpm test:coverage
```

### Testing Stack

- **Unit:** Vitest + React Testing Library
- **Integration:** Vitest
- **E2E:** Playwright
- **Coverage:** >80% target

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

```bash
# Or deploy manually
vercel --prod
```

### Environment-specific Deployments

- **Development:** `feature/*` branches → Preview deployments
- **Staging:** `staging` branch → staging.kensverige.se
- **Production:** `main` branch → www.kensverige.se

## 📊 Analytics & Tracking

### Events Tracked

- Page views
- Form submissions
- Tool usage (calculators)
- Content downloads
- Video engagement
- CTA clicks
- Journey progress

### Implementation

```typescript
// Track custom event
import { analytics } from '@/lib/analytics';

analytics.formSubmit('contact_form', formData);
analytics.calculatorUsed('lcc', results);
analytics.downloadContent('guide', 'Healthcare Guide');
```

## 🔒 Security & Privacy

- SSL/TLS encryption
- GDPR-compliant cookie consent
- Data encryption for sensitive info
- Rate limiting on forms
- OWASP Top 10 security measures
- Regular dependency updates

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- High contrast mode
- Focus indicators
- ARIA labels
- Semantic HTML

## 🌍 SEO

- Server-side rendering (SSR)
- Semantic HTML structure
- Meta tags and Open Graph
- Structured data (Schema.org)
- XML sitemap
- Robots.txt
- Fast page load (<2s)
- Mobile-first design

## 📝 Contributing

### Code Style

```bash
# Format code
pnpm format

# Lint code
pnpm lint

# Type check
pnpm type-check
```

### Git Workflow

1. Create feature branch: `git checkout -b feature/my-feature`
2. Commit changes: `git commit -m "feat: add new feature"`
3. Push branch: `git push origin feature/my-feature`
4. Create Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Add tests
- `chore:` Build/tooling changes

## 📚 Documentation

- [Technical Implementation Plan](/FAS_3_WEBSITE_TECHNICAL_IMPLEMENTATION.md)
- [Marketing Strategy - Phase 2](/FAS_2_EXECUTIVE_SUMMARY.md)
- [Component Storybook](#) (Coming soon)
- [API Documentation](#) (Coming soon)

## 🆘 Support

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Module not found:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
```

**Build errors:**
```bash
# Type check first
pnpm type-check

# Check linting
pnpm lint
```

### Getting Help

- Check [documentation](#)
- Search [issues](https://github.com/ken-sverige/website/issues)
- Ask in [discussions](https://github.com/ken-sverige/website/discussions)

## 📄 License

Copyright © 2025 KEN Sverige AB. All rights reserved.

---

**Built with ❤️ by the KEN Sverige team**

For more information, visit [www.kensverige.se](https://www.kensverige.se)
