import { device } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Best rapper button should be visible', async () => {
    await expect(element(by.id('rapper-button'))).toBeOnTheScreen();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('rapper-button')).tap();
    await expect(element(by.text('Ludacris'))).toBeOnTheScreen();
  });
});
