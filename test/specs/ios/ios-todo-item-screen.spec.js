import ListScreen from '../../screenobjects/ios/list.screen.js';
import ItemScreen from '../../screenobjects/ios/item.screen.js';

describe('Todo Item', () => {
    before(async () => {
        // Create TODO List
        await ListScreen.createListBtn.waitForDisplayed({ timeout: 5000 });
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do");
        await ListScreen.createBtn.click();
        await expect(await ListScreen.listNameField("Things to do")).toBeExisting();
        await ListScreen.listNameField("Things to do").click();
    });

    it('Create a Todo Item', async () => {
        // Create Todo Item
        await ItemScreen.createItem.click();
        await ItemScreen.title.addValue("Buy groceries");
        await ItemScreen.dueDate.click();
        await ItemScreen.nextMonthBtn.click();
        await ItemScreen.date28.click();
        await ItemScreen.createBtn.click();

        // Assertion
        await expect(await ItemScreen.getByAccessibility("Buy groceries")).toBeExisting();
        await expect(await ItemScreen.getByAccessibility("Due November 28, 2025")).toBeExisting();
    });
});