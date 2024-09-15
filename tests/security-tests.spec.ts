import { test, expect } from './fixtures';
import { assertFieldSafeFromXss } from '../src/module-tests/popup';

test.beforeEach(async ({ page, extensionId }) => page.goto(`chrome-extension://${extensionId}/popup.html`));

// This test has been made to fail by design.
test('Should handle XSS input safely', async ({ page }) => {
  expect(await assertFieldSafeFromXss(page)).toBe(true);
});
