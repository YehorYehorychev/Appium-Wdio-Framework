/**
 * describe() defines a Test Suite.
 * It groups related tests together under one description.
 */
describe('Android Elements Test', () => {

    /**
     * it() defines a single Test Case inside the suite.
     * Each "it" block should describe one specific behavior or user flow.
     */
    it('should find element by accessibilityId and click it', async () => {
        // Locate the "App" button by its accessibility ID
        const appBtn = await $('~App');

        // Wait for the element to be visible
        await appBtn.waitForDisplayed({ timeout: 5000 });

        // Tap on the element
        await appBtn.click();

        // Verify the navigation was successful
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeDisplayed();
    });
});