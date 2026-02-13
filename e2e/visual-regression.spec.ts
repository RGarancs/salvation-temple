import { test, expect } from "@playwright/test";
import { waitForPageSettle, toggleDarkMode, PAGES } from "./helpers";

for (const { name, path } of PAGES) {
  test(`${name} - light theme`, async ({ page }) => {
    await page.goto(path);
    await waitForPageSettle(page);
    await expect(page).toHaveScreenshot(`${name}-light.png`, {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test(`${name} - dark theme`, async ({ page }) => {
    await page.goto(path);
    await waitForPageSettle(page);
    await toggleDarkMode(page);
    await expect(page).toHaveScreenshot(`${name}-dark.png`, {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });
}
