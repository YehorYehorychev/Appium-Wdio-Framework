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
        await driver.pause(2000);
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });
});