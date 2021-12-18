class Checkbox {
    constructor(selector) {
        this.selector = selector;
    }

    set(value) {
        // add your implementation
        if (value) $(this.selector).click();
    }
}

module.exports = { Checkbox };
