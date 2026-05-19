import { test, expect } from '@playwright/test'
import { createClient } from '@supabase/supabase-js'
import ws from 'ws'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  { realtime: { transport: ws } }
)

test.describe('Page', () => {
  test('renders hero and key sections', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('h1')).toContainText("Hi, I'm Kirsten.")
    await expect(page.locator('#experience')).toBeVisible()
    await expect(page.locator('#references')).toBeVisible()
  })

  test('shows correct Capital One roles and dates', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page.getByText('Product Manager — Slingshot')).toBeVisible()
    await expect(page.getByText('Jul 2024 — Present')).toBeVisible()
    await expect(page.getByText('Product Manager — Data Management Platform')).toBeVisible()
    await expect(page.getByText('Apr 2021 — Jul 2024')).toBeVisible()
  })
})

test.describe('Projects', () => {
  test('VOYAGR card shows both GitHub and See progress links', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('link', { name: /View on GitHub/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /See progress/i })).toBeVisible()
  })
})

test.describe('Reference form', () => {
  const testEmail = `playwright-test-${Date.now()}@test.com`

  test.afterEach(async () => {
    await supabase.from('endorsements').delete().eq('email', testEmail)
  })

  test('submits successfully and shows confirmation', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('#references').scrollIntoViewIfNeeded()

    await page.fill('input[name="name"]', 'Playwright Test')
    await page.fill('input[name="title"]', 'QA Engineer')
    await page.fill('input[name="company"]', 'Test Co')
    await page.fill('input[name="email"]', testEmail)
    await page.fill('input[name="relationship"]', 'Colleague')
    await page.fill('textarea[name="message"]', 'Automated test submission — safe to delete.')

    await page.click('button[type="submit"]')
    await expect(page.getByText('Thank you!')).toBeVisible({ timeout: 15000 })
  })

  test('form submission persists and shows confirmation', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('#references').scrollIntoViewIfNeeded()

    await page.fill('input[name="name"]', 'Playwright Test')
    await page.fill('input[name="title"]', 'QA Engineer')
    await page.fill('input[name="company"]', 'Test Co')
    await page.fill('input[name="email"]', testEmail)
    await page.fill('input[name="relationship"]', 'Colleague')
    await page.fill('textarea[name="message"]', 'Automated test submission — safe to delete.')

    await page.click('button[type="submit"]')
    await expect(page.getByText('Thank you!')).toBeVisible({ timeout: 15000 })

    // Form should be hidden after successful submission
    await expect(page.locator('input[name="name"]')).not.toBeVisible()
  })

  test('shows error state when submission fails', async ({ page }) => {
    await page.route('**/rest/v1/endorsements**', route => route.abort())
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('#references').scrollIntoViewIfNeeded()

    await page.fill('input[name="name"]', 'Playwright Test')
    await page.fill('input[name="title"]', 'QA Engineer')
    await page.fill('input[name="company"]', 'Test Co')
    await page.fill('input[name="email"]', testEmail)
    await page.fill('input[name="relationship"]', 'Colleague')
    await page.fill('textarea[name="message"]', 'Automated test submission — safe to delete.')

    await page.click('button[type="submit"]')
    await expect(page.getByText('Something went wrong')).toBeVisible({ timeout: 15000 })
  })
})
