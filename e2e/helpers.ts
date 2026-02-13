import { type Page } from "@playwright/test";

/** Wait for the page to be fully settled (no pending network, animations started). */
export async function waitForPageSettle(page: Page) {
  await page.waitForLoadState("networkidle");
  // Give CSS animations time to start and reach a steady state
  await page.waitForTimeout(500);
}

/** Toggle dark mode by clicking the ThemeToggle button in the header. */
export async function toggleDarkMode(page: Page) {
  // The ThemeToggle renders a button with a sun or moon icon
  const toggle = page.locator("header button").filter({ has: page.locator("svg") }).first();
  await toggle.click();
  // Wait for the theme transition to settle
  await page.waitForTimeout(300);
}

export const PAGES = [
  { name: "home", path: "/" },
  { name: "training", path: "/training" },
  { name: "history", path: "/history" },
  { name: "donations", path: "/donations" },
  { name: "gallery", path: "/gallery" },
  { name: "testimonies", path: "/testimonies" },
] as const;
