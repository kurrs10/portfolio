import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://7174e7160718062f34592b504ee12f55@o4511378153603072.ingest.us.sentry.io/4511378172739584',
  tracesSampleRate: 1.0,
})
