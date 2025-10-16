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

    it('Find element by class name', async () => {
        const className = await $('android.widget.TextView');
        await expect(className).toHaveText("API Demos");
    });

    xit('Find element by xpath', async () => {
        // XPath locator for "Alert Dialogs"
        const alertDialogsBtn = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
        await alertDialogsBtn.waitForDisplayed({ timeout: 5000 });
        await alertDialogsBtn.click();

        // Resource ID locator for "List dialog" button
        const listDialogBtn = await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]');
        await listDialogBtn.waitForDisplayed({ timeout: 5000 });
        await listDialogBtn.click();

        // Locate "Command two" option by text
        const commandTwoBtn = await $('//android.widget.TextView[@text="Command two"]');
        await commandTwoBtn.waitForDisplayed({ timeout: 5000 });
        await commandTwoBtn.click();

        // Assertion
        const textAssertion = await $('android.widget.TextView');
        await expect(textAssertion).toHaveText('You selected: 1 , Command two');
    });

    it('Find element using UIAutomator', async () => {
        // Find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it('Find multiple elements', async () => {
        const expectedList = [
            'API Demos',
            'Accessibility',
            'Animation',
            'App',
            'Content',
            'Graphics',
            'Media',
            'NFC',
            'OS',
            'Preference',
            'Text',
            'Views'
        ];
        const actualList = [];

        const textList = await $$('android.widget.TextView');

        for (const element of textList) {
            const text = await element.getText();
            actualList.push(text);
        }

        await expect(actualList).toEqual(expectedList);
    });

    it.only('Working with text field', async () => {
        const views = await $('~Views');
        await views.waitForDisplayed({ timeout: 5000 });
        await views.click();

        const autoComplete = await $('//android.widget.TextView[@content-desc="Auto Complete"]');
        await autoComplete.waitForDisplayed({ timeout: 5000 });
        await autoComplete.click();

        const screenTop = await $('//android.widget.TextView[@content-desc="1. Screen Top"]');
        await screenTop.waitForDisplayed({ timeout: 5000 });
        await screenTop.click();

        const textField = await $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.waitForDisplayed({ timeout: 5000 });

        await textField.addValue('Mountain View');
        await expect(textField).toHaveText('Mountain View');
    });
});