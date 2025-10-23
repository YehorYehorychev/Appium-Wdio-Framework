describe('Todo Item', () => {
    it('Create a Todo Item', async () => {
        // Create TODO List
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do");
        await $('~Create').click();
        await expect(await $('~Things to do')).toBeExisting();

        // Create Todo Item
        await $('~Things to do').click();
        await $('//*[@name="Create item"]').click();
        await $('//*[@value="Title"]').addValue("Buy groceries");
        await $('//*[@value="Due"]').click();
        await $('//XCUIElementTypeButton[@name="DatePicker.NextMonth"]').click();
        await $('~30').click();
        await $('~Create').click();

        // Assertion
        await expect(await $('~Buy groceries')).toBeExisting();
        await expect(await $('~Due November 30, 2025')).toBeExisting();
    });
});