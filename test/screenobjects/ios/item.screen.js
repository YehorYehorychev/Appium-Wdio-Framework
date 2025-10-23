class ItemScreen {
    get createItem() {
        return $('//*[@name="Create item"]');
    }

    get title() {
        return $('//*[@value="Title"]');
    }

    get dueDate() {
        return $('//*[@value="Due"]');
    }

    get nextMonthBtn() {
        return $('//XCUIElementTypeButton[@name="DatePicker.NextMonth"]');
    }

    get date28() {
        return $('~28');
    }

    get createBtn() {
        return $('~Create');
    }

    getByAccessibility(name) {
        return $(`~${name}`);
    }
}

export default new ItemScreen();