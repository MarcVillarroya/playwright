// @ts-check
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

test.describe('Home Page Navigation', () => {
  test('TC-1.Should navigate to the Elements section from the home page', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navegar a la página de inicio
    await homePage.navigate();

    // Hacer click en el tab de Elements
    await homePage.clickOnElementsTab();

    // Verificar que la URL cambió a la de Elements
    await expect(page).toHaveURL(/\/elements/);

  });

  test('TC-2.should navigate to the Forms section from the home page', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navegar a la página de inicio
    await homePage.navigate();

    // Hacer click en el tab de Elements
    await homePage.clickOnFormsTab();

    // Verificar que la URL cambió a la de Elements
    await expect(page).toHaveURL(/\/forms/);

  });

  test('TC-3.should navigate to the Alerts section from the home page', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navegar a la página de inicio
    await homePage.navigate();

    // Hacer click en el tab de Elements
    await homePage.clickOnAlertsAndFramesTab();

    // Verificar que la URL cambió a la de Elements
    await expect(page).toHaveURL(/\/alertsWindows/);

  });

  test('TC-4.should navigate to the Widgets section from the home page', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navegar a la página de inicio
    await homePage.navigate();

    // Hacer click en el tab de Elements
    await homePage.clickOnWidgets();

    // Verificar que la URL cambió a la de Elements
    await expect(page).toHaveURL(/\/widgets/);

  });

  test('TC-5.should navigate to the Interactions section from the home page', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navegar a la página de inicio
    await homePage.navigate();

    // Hacer click en el tab de Elements
    await homePage.clickOnInteractions();

    // Verificar que la URL cambió a la de Elements
    await expect(page).toHaveURL(/\/interaction/);

  });

  test('TC-6.should navigate to the BookStoreApplication section from the home page', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navegar a la página de inicio
    await homePage.navigate();

    // Hacer click en el tab de Elements
    await homePage.clickOnBookStoreApplication();

    // Verificar que la URL cambió a la de Elements
    await expect(page).toHaveURL(/\/books/);

  });
});

