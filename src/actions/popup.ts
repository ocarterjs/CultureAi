import { Page } from '@playwright/test';
import { xssSafeFieldValidator } from '../components/field-validators';

// Selectors
const colourNameFieldSelector = 'colorNameInput';
const changeColourSubmitSelector = 'changeColorButton';
const colourSquareSelector = 'colorSquare';

// Actions
export const typeColourName = async (page: Page, colourName: string): Promise<void> => {
    await page.getByTestId(colourNameFieldSelector).type(colourName);
};

export const clickChangeColour = async (page: Page): Promise<void> => {
    await page.getByTestId(changeColourSubmitSelector).click();
};

export const getSquareBackgroundColour = async (page: Page): Promise<string | null> => {
    const style = await page.getByTestId(colourSquareSelector).getAttribute('style');
    if (style) {
        const matched = style.match(/background-color:\s*([^;]+);/);
        return matched ? matched[1] : null;
    }
    return null;
};

export const isColourSubmitSafeFromXss = async (page: Page): Promise<Boolean> => {
    try {
       await xssSafeFieldValidator(page, { field: colourNameFieldSelector, submitButton: changeColourSubmitSelector });
    } catch (error) {
        return false
    }
    return true
};