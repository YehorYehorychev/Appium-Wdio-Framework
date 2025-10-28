/**
 * Common Utility functions for WebdriverIO / Appium tests
 * Author: Yehor Yehorychev
 */

export const Utils = {
    /**
     * Wait until element is visible
     */
    async waitForVisible(element, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
    },

    /**
     * Wait until element is clickable
     */
    async waitForClickable(element, timeout = 10000) {
        await element.waitForClickable({ timeout });
    },

    /**
     * Tap on element safely (with waits)
     */
    async safeClick(element, timeout = 10000) {
        await this.waitForClickable(element, timeout);
        await element.click();
    },

    /**
     * Enter text safely (clear + type)
     */
    async typeText(element, text, timeout = 10000) {
        await this.waitForVisible(element, timeout);
        await element.clearValue();
        await element.setValue(text);
    },

    /**
     * Get element text trimmed
     */
    async getText(element) {
        await this.waitForVisible(element);
        return (await element.getText()).trim();
    },

    /**
     * Scroll down until element is visible (for mobile)
     */
    async scrollToElement(element, maxScrolls = 10) {
        for (let i = 0; i < maxScrolls; i++) {
            if (await element.isDisplayed()) return;
            await driver.execute('mobile: scrollGesture', {
                left: 100, top: 500, width: 400, height: 800,
                direction: 'down', percent: 3.0
            });
        }
        throw new Error('Element not found after scrolling');
    },

    /**
     * Swipe left or right (for carousels)
     */
    async swipe(direction = 'left', duration = 500) {
        const { width, height } = await driver.getWindowRect();
        const startX = direction === 'left' ? width * 0.8 : width * 0.2;
        const endX = direction === 'left' ? width * 0.2 : width * 0.8;
        const y = height / 2;

        await driver.touchPerform([
            { action: 'press', options: { x: startX, y } },
            { action: 'wait', options: { ms: duration } },
            { action: 'moveTo', options: { x: endX, y } },
            { action: 'release' }
        ]);
    },

    /**
     * Pause test for given seconds (wrapper)
     */
    async sleep(seconds) {
        await driver.pause(seconds * 1000);
    }
};