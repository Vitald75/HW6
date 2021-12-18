class SidebarMenu {
    // components
     get main() {
        return $('#first-nav-block');
    }
 
    // actions
    async goto(menuElement) {
        await this.main.$(`//a[normalize-space()='${menuElement}']`).waitForDisplayed({timeoutMsg: `cannot choose ${menuElement} menu element`, timeOut: 5000}); 
        await this.main.$(`//a[normalize-space()='${menuElement}']`).click();
        // как проверить переход ?
    }
}

module.exports = { SidebarMenu: new SidebarMenu() }
