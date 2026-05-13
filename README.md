# Portfolio — Kirsten Evans

**Live site:** [www.kirstenmoberly.com](https://www.kirstenmoberly.com)

A product manager's portfolio built and instrumented the way a real product should be — with analytics, error monitoring, a database-backed content pipeline, and a deployment workflow that ships in under 60 seconds. Every tool here was chosen deliberately. This README explains what's running, why it's here, and what decisions it informs.

---

## Stack

### Frontend
| Tool | Purpose |
|------|---------|
| [Next.js](https://nextjs.org) | React framework — app router, server components, fast page loads |
| [React](https://react.dev) | Component model for interactive UI (nav, forms, state) |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling — no stylesheet bloat |
| [TypeScript](https://www.typescriptlang.org) | Type safety — catches issues before they reach production |

### Hosting & Deployment
| Tool | Purpose |
|------|---------|
| [Vercel](https://vercel.com) | Hosting + CI/CD — every push to `main` deploys automatically in ~30s |
| [GitHub](https://github.com/kurrs10/portfolio) | Version control — full change history, rollback capability |

### Analytics & Observability
| Tool | What it measures | Why it matters |
|------|-----------------|----------------|
| [Vercel Analytics](https://vercel.com/analytics) | Page views, unique visitors, referrers, geography, device type | Top-of-funnel traffic — where visitors come from and what devices they use |
| [Vercel Speed Insights](https://vercel.com/docs/speed-insights) | Core Web Vitals (LCP, CLS, FID) | Page performance directly impacts bounce rate — a slow portfolio loses the recruiter |
| [PostHog](https://posthog.com) | Session recordings, heatmaps, click paths, time on page, custom events | Behavioral analytics — understand what visitors actually do, not just that they showed up |
| [Sentry](https://sentry.io) | JavaScript errors, exceptions, crash reports | Catch and fix production errors before they affect a visitor's experience |

### Custom Event Tracking
The following user actions are instrumented with named events via Vercel Analytics:

| Event | Trigger |
|-------|---------|
| `resume_download` | Resume downloaded from nav or hero |
| `linkedin_click` | LinkedIn link clicked (hero or contact) |
| `github_click` | GitHub link clicked |
| `project_click` | Any project card link clicked |
| `hero_cta_contact` | "Get in Touch" clicked in hero |
| `contact_email_copy` | Email address copied to clipboard |
| `reference_submitted` | Reference form submitted |
| `reference_form_click` | "Leave a Recommendation" clicked |

These events answer the questions that matter: Are people downloading my resume? Are they clicking through to LinkedIn? Which projects are getting attention?

### Content Pipeline
| Tool | Purpose |
|------|---------|
| [Supabase](https://supabase.com) | PostgreSQL database — stores reference submissions with row-level security |
| [Formspree](https://formspree.io) | Email notification trigger — alerts when a new reference is submitted |

**Reference approval flow:**
1. Visitor submits the reference form → saved to Supabase with `approved = false`
2. Formspree sends an email notification
3. One click in the Supabase Table Editor flips `approved = true`
4. Reference appears on the live site instantly — no code deploy needed

Row-level security ensures only approved references are ever returned to the public. Unapproved submissions are invisible until explicitly approved.

---

## Deployment Workflow

```
Code change → git push → GitHub → Vercel auto-deploys → Live in ~30s
```

No manual deployment steps. Every commit to `main` is production.

---

## Why This Approach

Most PM portfolios are PDFs or Notion pages. This one is a fully instrumented product. That's intentional.

Building and shipping this site is proof of the thing it's supposed to demonstrate: I can translate a product idea into a working, observable, measurable product using modern tools — without an engineering team. I wrote the requirements, made the build decisions, and shipped it.

The analytics aren't decoration. I use PostHog session recordings to see where visitors drop off, Vercel Analytics to track which channels drive traffic, and the custom events to know whether the resume is actually being downloaded. That feedback loop informs what gets updated next.

---

## Built With

[Claude Code](https://claude.ai/code) — AI-assisted development. Built using the [Claude Code for PMs](https://ccforpms.com) course.
