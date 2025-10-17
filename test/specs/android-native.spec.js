/**
 * describe() defines a Test Suite.
 * It groups related tests together under one description.
 */
describe('Android Native Features Test', () => {
    /**
     * it() defines a single Test Case inside the suite.
     * Each "it" block should describe one specific behavior or user flow.
     */
    it('Access an Activity directly', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        await driver.pause(3000);
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with dialog boxes', async () => {
        const alertBtn = await $('~OK Cancel dialog with a message');
        alertBtn.waitForDisplayed({ timeout: 5000 });
        alertBtn.click();

        await driver.pause(3000);

        // driver.acceptAlert();
        // driver.dismissAlert();
        await $('//android.widget.Button[@resource-id="android:id/button1"]').click();

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical Scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        // Scroll to the end (not stable if the element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)'); // Scroll 1 time, speed is 5

        // scrollTextIntoView -> (More stable)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        // await $('~Secure Surfaces').click();

        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal Scrolling', async () => {
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1");

        // Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await driver.pause(3000);
    });

    it.only('E2E Scrolling Test', async () => {
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.DateWidgets1");

        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        await $('~change the date').click();

        // Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('//*[@text="10"]').click();

        await $('//*[@resource-id="android:id/button1"]').click();

        await expect(await date.getText()).not.toEqual(currentDate);
    });
});