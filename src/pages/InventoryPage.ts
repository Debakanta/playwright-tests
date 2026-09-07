import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  // Verify inventory list is visible
  async isInventoryVisible() {
    return this.page.locator('.inventory_list').isVisible();
  }

  // Add a specific item to cart
  async addItemToCart(itemName: string) {
    await this.page.click(`text=${itemName}`);
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  // Check cart badge count
  async getCartCount() {
    return this.page.locator('.shopping_cart_badge').innerText();
  }
}
