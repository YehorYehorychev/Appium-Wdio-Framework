describe('Delete Note', () => {
    it('Skip tutorial', async () => {
        const skipBtn = await $('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
        await skipBtn.waitForDisplayed({ timeout: 10000 });
        await skipBtn.click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('add a note, save changes & verify note', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List");
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOnePiece\nAOT");

        await driver.back();
        await driver.back();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("Naruto\nOnePiece\nAOT");
    });

    it('Delete a note & check the note in trash can', async () => {
        await driver.back();
        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();
        await $('~More').click();
        await $('//*[@text="Delete"]').click();
        await driver.acceptAlert();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Trash Can"]').click();

        const trashNote = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        await expect(trashNote).toHaveText(note);
    });
});