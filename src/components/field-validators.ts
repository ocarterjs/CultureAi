import { Page, expect } from '@playwright/test';
import xssPayloads from '../test-data/xss-attack-payloads.json';

type XssValidator = {
    field: string;
    submitButton: string;
}

    /*
    * The following code is supposed to handle XSS attacks.
    * - Ultimately preventing XML code from being injected into the DOM is the best measure.
    * - That being said, should they manage to enter it into the field the input should not allow submission.
    * - Should they find a way to submit it, then the input should be sanitized before being displayed.
    */
export const xssSafeFieldValidator = async (page: Page, elements: XssValidator) => {
  Object.values(xssPayloads).forEach(async (payload) => {
    await page.getByTestId(elements.field).type(payload);
    await page.getByTestId(elements.submitButton).click();
    const input = (await page.getByTestId(elements.field).textContent())?.replace(`${elements.field}: `, '');
    expect(input).toBe('');
  });
};

