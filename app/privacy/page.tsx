import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Roam Wyld',
  description: 'Privacy Policy for the Roam Wyld travel companion app.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0a0d12] text-[#f0ece4] px-6 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-[#5a5d66] mb-12">Effective May 26, 2026 · Roam Wyld</p>

      <section className="mb-10">
        <h2 className="text-xs font-bold text-[#0891b2] uppercase tracking-widest mb-4">Google API Services — Limited Use Disclosure</h2>
        <div className="bg-[#062030] border-l-4 border-[#0891b2] rounded-lg p-4 text-sm leading-relaxed">
          Roam Wyld's use of information received from Google APIs (including Gmail) adheres to the{' '}
          <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-[#0891b2] font-semibold underline" target="_blank" rel="noopener noreferrer">
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. Specifically:
        </div>
        <ul className="mt-4 space-y-2 text-sm text-[#8a8c94] leading-relaxed list-none">
          {[
            'Gmail data is used only to find travel confirmation emails related to your saved trips.',
            'Gmail data is not used to serve advertisements.',
            'Gmail data is not transferred to third parties except as necessary to provide the Gmail Import feature (Anthropic Claude API for parsing, described below).',
            'We do not allow humans to read your Gmail messages.',
            'Gmail data obtained is not used for any purpose other than the specific feature you activated (Gmail Import).',
          ].map((item) => (
            <li key={item} className="flex gap-2"><span className="text-[#0891b2]">·</span>{item}</li>
          ))}
        </ul>
      </section>

      <Section title="What We Collect">
        <Item label="Account">Your email address, used only to sign in and identify your data.</Item>
        <Item label="Trips & Bookings">Trip names, destinations, travel dates, and booking details (flight numbers, hotel names, confirmation codes, activities) that you enter manually or import.</Item>
        <Item label="Gmail (Optional)">If you use Gmail Import, Roam Wyld requests read-only access to your Gmail account to find travel confirmation emails. We do not store your Gmail password or credentials. Access can be revoked at any time at myaccount.google.com/permissions.</Item>
        <Item label="Usage Analytics">Anonymized feature usage events collected via PostHog to help us improve the app.</Item>
        <Item label="Error Reports">Anonymized crash and error logs collected via Sentry to help us fix bugs.</Item>
      </Section>

      <Section title="What We Do NOT Collect">
        <BulletList items={[
          'Payment information of any kind',
          'Background location',
          'Contacts or call history',
          'Gmail content outside of travel-related confirmation emails',
        ]} />
      </Section>

      <Section title="How We Use Your Data">
        <BulletList items={[
          'To store and display your trips and bookings within the app.',
          'When Gmail Import is used, email body text is sent to Anthropic\'s Claude API via our secure backend to extract booking details. Emails are not stored after processing.',
          'Analytics events help us understand which features are most useful.',
          'Error reports help us identify and fix crashes.',
        ]} />
      </Section>

      <Section title="Third-Party Services">
        <Item label="Supabase">Database and authentication provider. Your trip and account data is stored on Supabase servers.</Item>
        <Item label="Anthropic (Claude)">AI processing for Gmail Import and Transit Directions. Email body text (up to 1,500 characters per email) is sent to Anthropic's API for booking extraction and is not retained after processing.</Item>
        <Item label="Mapbox">Mapping and transit directions. Map interactions may be processed by Mapbox servers.</Item>
        <Item label="PostHog">Anonymous usage analytics.</Item>
        <Item label="Sentry">Crash and error monitoring.</Item>
      </Section>

      <Section title="Data Sharing & Sale">
        <p className="text-sm text-[#8a8c94] leading-relaxed">
          We do not sell, rent, or trade your personal data to any third party. Data is shared only with the service providers listed above, solely to operate the app.
        </p>
      </Section>

      <Section title="Data Retention & Deletion">
        <p className="text-sm text-[#8a8c94] leading-relaxed">
          Your account and all associated trip data are retained while your account is active. You may delete your account and all associated data at any time directly within the app (Profile → Delete Account). Deletion is permanent and immediate — your account, trips, bookings, and insurance data are removed from our servers. Anonymized analytics and error logs may be retained longer as they cannot be linked back to you.
        </p>
      </Section>

      <Section title="Your Rights">
        <BulletList items={[
          'Access or update your profile data in the app at any time.',
          'Revoke Gmail access at myaccount.google.com/permissions.',
          'Delete your account and all associated data directly in the app.',
          'Contact us with any privacy question or data request.',
        ]} />
      </Section>

      <Section title="Children">
        <p className="text-sm text-[#8a8c94] leading-relaxed">
          Roam Wyld is not directed at children under 13. We do not knowingly collect data from children under 13.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p className="text-sm text-[#8a8c94] leading-relaxed">
          We may update this Privacy Policy. If changes are material, we will notify you within the app. Continued use after notification constitutes acceptance.
        </p>
      </Section>

      <div className="mt-8 bg-[#111820] border border-[#232e3e] rounded-xl p-5">
        <p className="text-xs font-bold text-[#5a5d66] uppercase tracking-wider mb-1">Questions or Requests</p>
        <a href="mailto:kbevans13@gmail.com" className="text-[#0891b2] font-semibold text-base">kbevans13@gmail.com</a>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xs font-bold text-[#0891b2] uppercase tracking-widest mb-4">{title}</h2>
      {children}
    </section>
  )
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <p className="text-xs font-bold text-[#f0ece4] uppercase tracking-wide mb-1">{label}</p>
      <p className="text-sm text-[#8a8c94] leading-relaxed">{children}</p>
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-[#8a8c94] leading-relaxed">
          <span className="text-[#0891b2] flex-shrink-0">·</span>{item}
        </li>
      ))}
    </ul>
  )
}
