import { Page, expect } from '@playwright/test';
import { typeColourName, clickChangeColour, getSquareBackgroundColour, isColourSubmitSafeFromXss } from '../actions/popup';

export const assertSquareColour = async (page: Page, colourName: string) => {
    await typeColourName(page, colourName);
    await clickChangeColour(page);
    expect(await getSquareBackgroundColour(page)).toBe(colourName);
};


export const assertFieldSafeFromXss = async (page: Page) => {
    return isColourSubmitSafeFromXss(page);
}
