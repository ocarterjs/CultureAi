import { test } from './fixtures';
import { assertSquareColour } from '../src/module-tests/popup';

test.beforeEach(async ({ page, extensionId }) => page.goto(`chrome-extension://${extensionId}/popup.html`));

const colours = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white']
colours.forEach(colour => {
  test(`Should change background colour to ${colour}`, async ({ page }) => {
    await assertSquareColour(page, colour);
    await page.waitForTimeout(100); // For Screenshot Purposes Wait For Colour to Change
    await page.screenshot({ path: `screenshots/${colour}.png` })
  });
});
