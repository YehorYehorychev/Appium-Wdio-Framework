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

        driver.acceptAlert();

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Working with dialog boxes', async () => {
        const alertBtn = await $('~OK Cancel dialog with a message');
        alertBtn.waitForDisplayed({ timeout: 5000 });
        alertBtn.click();

        await driver.pause(3000);

        driver.acceptAlert();

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });
});