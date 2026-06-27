// tests/example.spec.js
import { test, expect, Page } from '@playwright/test';

test('homepage has Playwright in title', async ({ page }: {page: Page}) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
