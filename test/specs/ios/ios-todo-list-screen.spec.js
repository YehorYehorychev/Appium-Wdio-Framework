import ListScreen from '../../screenobjects/ios/list.screen.js';

describe("Todo List", () => {
    it("Create a Todo List", async () => {
        await ListScreen.createListBtn.waitForDisplayed({ timeout: 5000 });
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do today");
        await ListScreen.createBtn.click();

        await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();
    });
});