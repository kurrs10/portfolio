#!/usr/bin/env node
// Standalone Supabase keepalive — no dependencies, no build step.
//
// Supabase free-tier projects are auto-paused after 7 days without API
// activity. This script performs one lightweight read against the project's
// REST API so activity is always recent. Once paused you have 90 days to
// unpause before the data is downloadable-only, so run this well inside the
// 7-day window (daily or every other day).
//
// Usage:
//   node scripts/supabase-keepalive.mjs
//
// Reads NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY from the
// environment, falling back to .env.local in the project root.

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

// Load .env.local without adding a dotenv dependency.
try {
  const raw = readFileSync(join(root, '.env.local'), 'utf8')
  for (const line of raw.split('\n')) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*?)\s*$/)
    if (m && process.env[m[1]] === undefined) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
    }
  }
} catch {
  // no .env.local — rely on the ambient environment
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!url || !key) {
  console.error('keepalive: missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY')
  process.exit(1)
}

const stamp = new Date().toISOString()

try {
  const res = await fetch(`${url}/rest/v1/endorsements?select=name&limit=1`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  })
  if (!res.ok) {
    console.error(`keepalive: ${stamp} FAILED — ${res.status} ${res.statusText}`)
    process.exit(1)
  }
  console.log(`keepalive: ${stamp} OK — Supabase reachable (${res.status})`)
} catch (err) {
  console.error(`keepalive: ${stamp} ERROR — ${err.message}`)
  process.exit(1)
}
