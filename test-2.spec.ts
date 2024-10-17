import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.locator('li').filter({ hasText: 'Text Box' }).click();
  await page.getByRole('heading', { name: 'Text Box' }).click();
  await page.locator('li').filter({ hasText: 'Check Box' }).click();
  await page.getByRole('heading', { name: 'Check Box' }).click();
  await page.locator('li').filter({ hasText: 'Radio Button' }).click();
  await page.getByRole('heading', { name: 'Radio Button' }).click();
  await page.locator('li').filter({ hasText: 'Web Tables' }).click();
  await page.getByRole('heading', { name: 'Web Tables' }).click();
  await page.locator('li').filter({ hasText: 'Buttons' }).click();
  await page.getByRole('heading', { name: 'Buttons' }).click();
  await page.locator('li').filter({ hasText: /^Links$/ }).click();
  await page.getByRole('heading', { name: 'Links', exact: true }).click();
  await page.getByText('Broken Links - Images').click();
  await page.getByRole('heading', { name: 'Broken Links - Images' }).click();
  await page.locator('li').filter({ hasText: 'Upload and Download' }).click();
  await page.getByRole('heading', { name: 'Upload and Download' }).click();
  await page.locator('li').filter({ hasText: 'Dynamic Properties' }).click();
  await page.getByRole('heading', { name: 'Dynamic Properties' }).click();
  await page.getByRole('heading', { name: 'Dynamic Properties' }).click();
});