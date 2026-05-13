'use client'

import { useState } from 'react'
import { track } from '@vercel/analytics'

const FORMSPREE_ID = 'xzdooqnq'

// To add an approved reference: copy one of the objects below and fill in the details.
// Push to GitHub and Vercel will auto-deploy the update.
const REFERENCES: { name: string; title: string; company: string; relationship: string; quote: string }[] = [
  // Example — replace with real submissions:
  // {
  //   name: "Jane Smith",
  //   title: "Senior Director of Product",
  //   company: "Capital One",
  //   relationship: "Direct manager",
  //   quote: "Kirsten is one of the most thoughtful and data-driven PMs I've worked with...",
  // },
]

const BASE_NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const NAV_LINKS = REFERENCES.length > 0
  ? [...BASE_NAV_LINKS.slice(0, 4), { label: 'References', href: '#references' }, BASE_NAV_LINKS[4]]
  : BASE_NAV_LINKS

const PROJECTS = [
  {
    title: 'Coffee Personality Quiz',
    description: 'A "What\'s Your Coffee Personality?" quiz built end-to-end with AI tools — from requirements to deployed web app. Building this gave me direct experience with the full product lifecycle and sharpens how I write requirements and work with engineering teams.',
    tags: ['Next.js', 'React', 'Claude Code', 'Vercel'],
    link: 'https://quiz-project-kursten.vercel.app',
    linkLabel: 'View Live',
    status: 'live',
  },
  {
    title: 'Vacation Itinerary App',
    description: 'A travel planning app that helps you build and organize trip itineraries. Designed for the kind of traveler who plans — but still leaves room for adventure.',
    tags: ['Next.js', 'React', 'Claude Code'],
    link: null,
    linkLabel: 'Coming Soon',
    status: 'coming-soon',
  },
  {
    title: 'GitHub',
    description: 'All personal projects and code are open on GitHub. Staying hands-on with building keeps me a sharper PM — I understand the tradeoffs engineers face because I face them too.',
    tags: ['Open Source'],
    link: 'https://github.com/kurrs10',
    linkLabel: 'View Profile',
    status: 'live',
  },
]

const EXPERIENCE = [
  {
    company: 'Capital One',
    role: 'Product Manager — Slingshot',
    period: 'Apr 2021 — Present',
    highlights: [
      'Sole PM for Slingshot — a B2B cloud management platform serving enterprise customers — driving roadmap strategy across multiple engineering teams focused on cost efficiency, visibility, and automated governance',
      'Restored Snowflake Cost Alerts: engagement grew from 2.1% → 9.4% of sessions, tenant interaction from 24% → 45%',
      'Delivered Internal Viewer exceeding commitments by 25%, boosting CSM and support efficiency 5x by enabling full customer environment visibility',
      'Led Databricks expansion across three engineering teams — shipped two weeks ahead of schedule',
      'Drove AI optimization initiatives with projected 50% gains in query runtime performance',
      'Selected to present at 2025 Data + AI Summit',
    ],
  },
  {
    company: 'Capital One',
    role: 'Product Manager — Data Management Platform',
    period: 'Apr 2021 — 2023',
    highlights: [
      'Earned promotion within 16 months — faster than the standard cycle — based on product impact',
      'Led full product experience redesign, reducing user friction and introducing new dataset metadata management capabilities',
      'Owned dataset registration experience for internal data publishing platform serving data producers and consumers across the org',
    ],
  },
  {
    company: 'Navy Federal Credit Union',
    role: 'Project Manager II',
    period: 'Mar 2020 — Apr 2021',
    highlights: [
      'Led delivery of ML-driven fraud detection system enabling real-time decisioning for applications and money movement',
      'Managed end-to-end delivery plans, adapting scope, priorities, and timelines based on evolving business needs',
      'Partnered cross-functionally with internal teams, vendors, and leadership to ensure alignment and mitigate risks',
      'Supported Security Operations leadership with ad hoc initiatives, including executive-level presentations for future programs',
    ],
  },
  {
    company: 'Navy Federal Credit Union',
    role: 'Product Owner',
    period: 'Nov 2017 — Mar 2020',
    highlights: [
      'Owned mobile app product initiatives — delivered credit card and security features aligned to member needs',
      'Led agile product team end-to-end: managed backlog, defined epics and acceptance criteria, ensured release quality',
      'Defined requirements for backend services and partnered cross-functionally to enable mobile app integrations',
      'Collaborated with Member Research team to translate qualitative and quantitative insights into product improvements',
    ],
  },
]

const PM_SKILLS = [
  'Product Strategy & Roadmapping',
  'End-to-End Product Lifecycle',
  'Data-Driven Decision Making',
  'A/B Testing & Experimentation',
  'User Research & Synthesis',
  'Agile / Scrum',
  'Backlog Management',
  'Go-to-Market Strategy',
  'Stakeholder Management',
  'Executive Communication',
  'B2B & Enterprise SaaS',
  'AI/ML Product Development',
]

const AI_SKILLS = [
  'Claude Code',
  'Vibe Coding',
  'Next.js',
  'React',
  'Vercel',
  'GitHub',
  'Prompt Engineering',
  'AI Product Prototyping',
]

const CERTS = [
  'SAFe POPM Certification',
  'Certified Scrum Master',
  'Certified Scrum Product Owner',
  'B.S. Kinesiology — Penn State',
]

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [refSubmitted, setRefSubmitted] = useState(false)
  const [refError, setRefError] = useState(false)
  const [refForm, setRefForm] = useState({ name: '', title: '', company: '', email: '', relationship: '', message: '' })

  const handleCopyEmail = () => {
    track('contact_email_copy')
    navigator.clipboard.writeText('kbevans13@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8faf7', color: '#1a2e1a' }}>

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: 'rgba(248,250,247,0.95)', borderColor: '#ddeedd', backdropFilter: 'blur(8px)' }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight" style={{ color: '#2d6a4f' }}>
            Kirsten Evans
          </span>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: '#3d5a3e' }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => track('resume_download', { location: 'nav' })}
              className="text-sm font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#2d6a4f', color: '#fff' }}
            >
              Resume
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: '#2d6a4f' }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t px-6 pb-4 flex flex-col gap-3" style={{ borderColor: '#ddeedd' }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium py-1"
                style={{ color: '#3d5a3e' }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="text-sm font-semibold px-4 py-2 rounded-full text-center mt-1"
              style={{ backgroundColor: '#2d6a4f', color: '#fff' }}
              onClick={() => { setMenuOpen(false); track('resume_download', { location: 'mobile_nav' }) }}
            >
              Resume
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#5a9e6f' }}>
          Product Manager
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2" style={{ color: '#1a2e1a' }}>
          Hi, I'm Kirsten.
        </h1>
        <p className="text-sm mb-6" style={{ color: '#7a9e7a' }}>
          pronounced <span className="italic">Kur-sten</span>
        </p>
        <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mb-8" style={{ color: '#3d5a3e' }}>
          Adaptable PM with 9+ years shipping enterprise products across cloud platforms, mobile apps, fraud systems, and AI tools — I go where the work is interesting.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/kirsten-evans27"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('linkedin_click', { location: 'hero' })}
            className="px-6 py-3 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#2d6a4f' }}
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            onClick={() => track('hero_cta_contact')}
            className="px-6 py-3 rounded-full font-semibold border-2 transition-opacity hover:opacity-70"
            style={{ borderColor: '#2d6a4f', color: '#2d6a4f', backgroundColor: 'transparent' }}
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download
            onClick={() => track('resume_download', { location: 'hero' })}
            className="px-6 py-3 rounded-full font-semibold border-2 transition-opacity hover:opacity-70"
            style={{ borderColor: '#a8c4a8', color: '#3d5a3e', backgroundColor: 'transparent' }}
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t" style={{ borderColor: '#ddeedd' }}>
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a2e1a' }}>About</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5 text-base leading-relaxed" style={{ color: '#3d5a3e' }}>
            <p>
              I studied Kinesiology at Penn State and spent three years in the fitness industry — teaching classes, training clients, and running programs at fitness centers. I saw how these businesses operate from the inside: member retention, program design, and the gap between what people intend to do and what they actually do. I learned what keeps people showing up and what makes them quit. Eventually I wanted to solve that intention-action gap at scale — and product management turned out to be the right tool for it.
            </p>
            <p>
              Over the past 9 years I've shipped products across cloud management, fraud detection, data platforms, and mobile apps at Capital One and Navy Federal. I was promoted at Capital One within 16 months for the product impact I drove. I've led cross-functional teams across complex orgs and learned to make decisions with real stakes in regulated, high-accountability environments.
            </p>
            <p>
              I also build software myself. I've shipped a live web app and this portfolio site using Claude Code and modern web tools. That changes how I work — I can prototype in days, speak the language of engineering without translation, and validate ideas before anyone writes a line of production code.
            </p>
            <p>
              I'm based in Colorado Springs, CO, open to remote, and looking for my next challenge — wherever that takes me.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#fff', border: '1px solid #ddeedd' }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#5a9e6f' }}>
                What I bring
              </p>
              <ul className="space-y-2 text-sm" style={{ color: '#3d5a3e' }}>
                <li>✓ 9+ years PM experience at enterprise scale</li>
                <li>✓ B.S. Kinesiology, Penn State</li>
                <li>✓ I build and ship software — that changes how I work with engineering</li>
                <li>✓ Promoted at Capital One within 16 months based on product impact</li>
                <li>✓ Proven track record of shipping on time and ahead of schedule</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#fff', border: '1px solid #ddeedd' }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#5a9e6f' }}>
                What I'm looking for
              </p>
              <div className="flex flex-wrap gap-2">
                {['Remote-friendly', 'Product Manager', 'Consumer or B2B', 'Mission-driven', 'High-impact team'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ backgroundColor: '#e8f5e8', color: '#2d6a4f' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t" style={{ borderColor: '#ddeedd' }}>
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a2e1a' }}>Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl p-6 flex flex-col"
              style={{ backgroundColor: '#fff', border: '1px solid #ddeedd' }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg leading-tight" style={{ color: '#1a2e1a' }}>
                  {project.title}
                </h3>
                {project.status === 'live' && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold ml-2 flex-shrink-0"
                    style={{ backgroundColor: '#e8f5e8', color: '#2d6a4f' }}
                  >
                    Live
                  </span>
                )}
                {project.status === 'coming-soon' && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold ml-2 flex-shrink-0"
                    style={{ backgroundColor: '#fff8e8', color: '#b8860b' }}
                  >
                    Soon
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#3d5a3e' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: '#f0f7f0', color: '#3d5a3e' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={() => track('project_click', { project: project.title })}
                  className="text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: '#2d6a4f' }}
                >
                  {project.linkLabel} →
                </a>
              ) : (
                <span className="text-sm font-semibold" style={{ color: '#a8c4a8' }}>
                  {project.linkLabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t" style={{ borderColor: '#ddeedd' }}>
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a2e1a' }}>Experience</h2>
        <div className="space-y-8">
          {EXPERIENCE.map((job, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{ backgroundColor: '#fff', border: '1px solid #ddeedd' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-bold text-lg" style={{ color: '#1a2e1a' }}>{job.role}</h3>
                  <p className="text-sm font-semibold" style={{ color: '#2d6a4f' }}>{job.company}</p>
                </div>
                <span className="text-sm" style={{ color: '#7a9e7a' }}>{job.period}</span>
              </div>
              <ul className="space-y-2">
                {job.highlights.map((h, j) => (
                  <li key={j} className="text-sm leading-relaxed flex gap-2" style={{ color: '#3d5a3e' }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: '#5a9e6f' }}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16 border-t" style={{ borderColor: '#ddeedd' }}>
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a2e1a' }}>Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6" style={{ backgroundColor: '#fff', border: '1px solid #ddeedd' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#5a9e6f' }}>
              Product Management
            </p>
            <div className="flex flex-wrap gap-2">
              {PM_SKILLS.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: '#f0f7f0', color: '#2d4a2e' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6" style={{ backgroundColor: '#fff', border: '1px solid #ddeedd' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#5a9e6f' }}>
              AI & Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {AI_SKILLS.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: '#f5fbf5', color: '#2d4a2e', border: '1px solid #c8e6c8' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6" style={{ backgroundColor: '#fff', border: '1px solid #ddeedd' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#5a9e6f' }}>
              Education & Certifications
            </p>
            <ul className="space-y-2">
              {CERTS.map((c) => (
                <li key={c} className="text-sm flex gap-2 items-start" style={{ color: '#3d5a3e' }}>
                  <span style={{ color: '#5a9e6f' }}>✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* References — nav link hidden until REFERENCES array is populated; form always visible */}
      <section id="references" className="max-w-5xl mx-auto px-6 py-16 border-t" style={{ borderColor: '#ddeedd' }}>
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#1a2e1a' }}>References</h2>
        <p className="text-base mb-10 max-w-xl" style={{ color: '#3d5a3e' }}>
          Know me from a previous role? I'd love to include your endorsement here. Fill out the form below and I'll be in touch.
        </p>

        {/* Approved reference cards */}
        {REFERENCES.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {REFERENCES.map((ref, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: '#fff', border: '1px solid #ddeedd' }}
              >
                <p className="text-sm leading-relaxed italic" style={{ color: '#3d5a3e' }}>
                  &ldquo;{ref.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: '1px solid #f0f7f0' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: '#e8f5e8', color: '#2d6a4f' }}
                  >
                    {ref.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#1a2e1a' }}>{ref.name}</p>
                    <p className="text-xs" style={{ color: '#7a9e7a' }}>{ref.title}, {ref.company} — {ref.relationship}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <h3 className="text-lg font-bold mb-6" style={{ color: '#1a2e1a' }}>Leave a Recommendation</h3>

        {refSubmitted ? (
          <div
            className="rounded-2xl p-8 text-center max-w-lg mx-auto"
            style={{ backgroundColor: '#e8f5e8', border: '1px solid #c8e6c8' }}
          >
            <div className="text-3xl mb-3">✓</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#2d6a4f' }}>Thank you!</h3>
            <p className="text-sm" style={{ color: '#3d5a3e' }}>Your recommendation has been submitted. I really appreciate it.</p>
          </div>
        ) : refError ? (
          <div
            className="rounded-2xl p-8 text-center max-w-lg mx-auto"
            style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca' }}
          >
            <div className="text-3xl mb-3">⚠️</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#dc2626' }}>Something went wrong</h3>
            <p className="text-sm mb-4" style={{ color: '#6b4c2a' }}>The submission didn't go through. Please try again or email Kirsten directly at kbevans13@gmail.com.</p>
            <button
              onClick={() => setRefError(false)}
              className="text-sm font-semibold underline"
              style={{ color: '#dc2626' }}
            >
              Try again
            </button>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' },
              })
              if (res.ok) {
                track('reference_submitted')
                setRefSubmitted(true)
              } else {
                setRefError(true)
              }
            }}
            className="grid md:grid-cols-2 gap-4 max-w-2xl"
          >
            {/* Honeypot — bots fill this, humans don't, Formspree silently discards the submission */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            {[
              { name: 'name', label: 'Your Name', placeholder: 'Jane Smith', type: 'text', required: true },
              { name: 'title', label: 'Title', placeholder: 'Senior Director of Product', type: 'text', required: true },
              { name: 'company', label: 'Company', placeholder: 'Capital One', type: 'text', required: true },
              { name: 'email', label: 'Your Email', placeholder: 'jane@company.com', type: 'email', required: true },
              { name: 'relationship', label: 'How do you know Kirsten?', placeholder: 'e.g. Direct manager at Capital One', type: 'text', required: true },
            ].map((field) => (
              <div key={field.name} className={field.name === 'relationship' ? 'md:col-span-2' : ''}>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#5a9e6f' }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={refForm[field.name as keyof typeof refForm]}
                  onChange={(e) => setRefForm({ ...refForm, [field.name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    backgroundColor: '#fff',
                    border: '1.5px solid #ddeedd',
                    color: '#1a2e1a',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#2d6a4f' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#ddeedd' }}
                />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#5a9e6f' }}>
                Endorsement / Comments
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Share a few words about working with Kirsten — her strengths, impact, or anything you'd want a future employer to know."
                value={refForm.message}
                onChange={(e) => setRefForm({ ...refForm, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                style={{
                  backgroundColor: '#fff',
                  border: '1.5px solid #ddeedd',
                  color: '#1a2e1a',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#2d6a4f' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#ddeedd' }}
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="px-8 py-3 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#2d6a4f' }}
              >
                Submit Reference
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16 border-t" style={{ borderColor: '#ddeedd' }}>
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a2e1a' }}>Get in Touch</h2>
        <p className="text-base mb-8 max-w-xl" style={{ color: '#3d5a3e' }}>
          I'm actively looking for my next PM role. If you're building something meaningful and want a data-driven PM who can also prototype with AI — let's talk.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleCopyEmail}
            className="px-6 py-3 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#2d6a4f' }}
          >
            {copied ? '✓ Copied!' : 'kbevans13@gmail.com'}
          </button>
          <a
            href="https://www.linkedin.com/in/kirsten-evans27"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('linkedin_click', { location: 'contact' })}
            className="px-6 py-3 rounded-full font-semibold border-2 transition-opacity hover:opacity-70"
            style={{ borderColor: '#2d6a4f', color: '#2d6a4f', backgroundColor: 'transparent' }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kurrs10"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('github_click', { location: 'contact' })}
            className="px-6 py-3 rounded-full font-semibold border-2 transition-opacity hover:opacity-70"
            style={{ borderColor: '#a8c4a8', color: '#3d5a3e', backgroundColor: 'transparent' }}
          >
            GitHub
          </a>
          <a
            href="#references"
            onClick={() => track('reference_form_click')}
            className="px-6 py-3 rounded-full font-semibold border-2 transition-opacity hover:opacity-70"
            style={{ borderColor: '#a8c4a8', color: '#3d5a3e', backgroundColor: 'transparent' }}
          >
            Leave a Recommendation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-8 py-8" style={{ borderColor: '#ddeedd' }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
          <span className="text-sm" style={{ color: '#7a9e7a' }}>
            © 2026 Kirsten Evans
          </span>
          <span className="text-sm" style={{ color: '#a8c4a8' }}>
            Built with Claude Code
          </span>
        </div>
      </footer>

    </div>
  )
}
