import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    trace: 'on-first-retry',
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'html',
  snapshotDir: './snapshots',
  updateSnapshots: !!process.env.UPDATE_SNAPSHOTS ? 'all' : 'missing',
  outputDir: './test-results',
});