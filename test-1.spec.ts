import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').press('CapsLock');
  await page.getByPlaceholder('Full Name').fill('M');
  await page.getByPlaceholder('Full Name').press('CapsLock');
  await page.getByPlaceholder('Full Name').fill('Marc');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').press('CapsLock');
  await page.getByPlaceholder('name@example.com').press('CapsLock');
  await page.getByPlaceholder('name@example.com').fill('marc@gmail.com');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('calle falsa 123');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('calle falsa 321');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Name:Marc')
  await page.getByText('Email:marc@gmail.com')
  await page.getByText('Current Address :calle falsa')
  await page.getByText('Permananet Address :calle')
});