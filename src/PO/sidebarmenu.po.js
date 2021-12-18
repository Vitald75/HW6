class SidebarMenu {
    // components
     get main() {
        return $('#first-nav-block');
    }
 
    // actions
    async goto(menuElement) {
        await this.main.$(`//a[normalize-space()='${menuElement}']`).waitForDisplayed({timeoutMsg: 'cannot choose menu into system', timeOut: 5000});
        await this.main.$(`//a[normalize-space()='${menuElement}']`).click();
        //await $('#user-label').waitForDisplayed({timeoutMsg: 'cannot login into system'});
        // как проверить переход ?
    }
}

module.exports = { SidebarMenu: new SidebarMenu() }
