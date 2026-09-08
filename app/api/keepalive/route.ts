import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Keeps the Supabase project ("portfolio", ID hdcskoewhlfgxdufqwru) out of the
// free-tier auto-pause. Supabase pauses projects after 7 days with no API
// activity; this route fires a tiny read so there is always recent activity.
// Triggered daily by the Vercel cron defined in vercel.json.

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET(request: Request) {
  // If CRON_SECRET is set in the Vercel project, Vercel sends it as a bearer
  // token on cron invocations. When it's set we require it; when it's not,
  // the route stays open (the query is harmless and read-only).
  const secret = process.env.CRON_SECRET
  if (secret) {
    const auth = request.headers.get('authorization')
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
    }
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    return NextResponse.json(
      { ok: false, error: 'Supabase env vars missing' },
      { status: 500 },
    )
  }

  const supabase = createClient(url, key)
  const { count, error } = await supabase
    .from('endorsements')
    .select('*', { count: 'exact', head: true })

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 502 },
    )
  }

  return NextResponse.json({
    ok: true,
    table: 'endorsements',
    count,
    ranAt: new Date().toISOString(),
  })
}
