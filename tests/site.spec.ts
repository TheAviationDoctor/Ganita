import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('English and Hindi navigation, full-text search and meaningful empty state', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/en/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.getByRole('link', { name: 'Read this page in Hindi' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'hi');
  await page.goto('/en/search/?q=alternating');
  await expect(page.getByRole('status')).toContainText('found');
  await expect(page.locator('[data-search-slug="madhava"]')).toBeVisible();
  await page.getByRole('searchbox').fill('Madhava');
  await expect(page.locator('[data-search-slug="madhava"]')).toBeVisible();
  await page.getByRole('searchbox').fill('unlikely-query-1234');
  await expect(page.getByRole('status')).toContainText('0 articles found');
  await expect(page.getByText('No matching articles.', { exact: false })).toBeVisible();
  await page.goto('/hi/search/?q=माधव');
  await expect(page.locator('[data-search-slug="madhava"]')).toBeVisible();
  expect(errors).toEqual([]);
});

test('article language switch preserves article, references and browsing work', async ({ page }) => {
  await page.goto('/en/articles/ramanujan/');
  await page.getByRole('link', { name: 'Read this page in Hindi' }).click();
  await expect(page).toHaveURL(/\/hi\/articles\/ramanujan\//);
  await expect(page.locator('#sources li')).not.toHaveCount(0);
  await page.goto('/en/explore/');
  await page.locator('#period a').first().click();
  await expect(page.locator('.article-card')).not.toHaveCount(0);
});

test('demonstrations update accurate results at boundaries and large selections', async ({ page }) => {
  await page.goto('/en/demonstrations/');
  await page.locator('#angle').fill('90');
  await expect(page.locator('#sine-output')).toHaveText('θ = 90° · sin θ = 1.000000');
  await expect(page.locator('#sine-values')).toContainText('2.000000');
  await page.locator('#series-type').selectOption('fast');
  await page.locator('#terms').fill('30');
  await expect(page.locator('#pi-output')).toHaveText('3.141592653590');
  await page.locator('#partition-n').fill('19');
  await expect(page.locator('#partition-output')).toHaveText('p(19) = 490');
  await expect(page.locator('#partition-congruence')).toContainText('divisible by 5');
  await expect(page.locator('#partition-list li')).toHaveCount(32);
  await page.locator('#partition-n').fill('1');
  await expect(page.locator('#partition-output')).toHaveText('p(1) = 1');
});

test('key page types meet automated accessibility checks and fit viewport', async ({ page }, testInfo) => {
  for (const path of ['/en/', '/hi/', '/en/explore/', '/en/articles/brahmagupta/', '/hi/articles/ramanujan/', '/en/demonstrations/', '/hi/demonstrations/', '/en/search/']) {
    await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(results.violations, path).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), path).toBe(true);
    if (path === '/en/' && testInfo.project.name === 'desktop') await page.screenshot({ path: testInfo.outputPath('homepage.png') });
    if (path === '/hi/' && testInfo.project.name === 'mobile') await page.screenshot({ path: testInfo.outputPath('hindi-mobile.png'), fullPage: true });
  }
});

test('articles and initial demonstrations remain useful without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/hi/articles/zero/');
  await expect(page.locator('.prose h2')).not.toHaveCount(0);
  await page.goto('http://127.0.0.1:4321/en/demonstrations/');
  await expect(page.locator('#partition-output')).toHaveText('p(4) = 5');
  // Playwright's text matcher deliberately excludes noscript elements.
  await expect(page.locator('noscript p')).toBeVisible();
  expect(await page.locator('noscript').evaluate(element => element.textContent)).toContain('JavaScript enables the controls.');
  await context.close();
});
