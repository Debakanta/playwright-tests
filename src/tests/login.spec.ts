import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Valid login should show inventory', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  expect(await inventoryPage.isInventoryVisible()).toBeTruthy();
});

test('Invalid login should show error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wrong_user', 'wrong_pass');

  expect(await loginPage.isErrorVisible()).toBeTruthy();
});
