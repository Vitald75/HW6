// noinspection NpmUsedModulesInstalled
const { When, Then, Given } = require('@cucumber/cucumber');
const YAML = require('yaml');
const { Login } = require("../../src/PO/login.po");
const { SidebarMenu } = require("../../src/PO/sidebarmenu.po");
const { CustomPage } = require("../../src/PO/custom_page.po");
const { CustomPage2 } = require("../../src/PO/custom_page_2.po");
const { Table } = require("../../src/PO/tables/table.po");
const Subscribe = require('../../src/PO/forms/subscribe.model');
const UserForm = require('../../src/PO/forms/userform.model');

When(/^I go to "([^"]*)"$/, async function (url) {
    await browser.url(url);
});

When(/^I check the texts of the elements:$/, async function (table) {
    const rows = table.hashes()
    for (const row of rows) {
        expect(await $(row.selector).getText())
            .toEqual(row.text)
    }
});

When(/^I expect element: "([^"]*)" (text|value): "([^"]*)"$/, async function (selector, type, text) {
    const methods = {
        text: 'getText',
        value: 'getValue'
    }
    expect(await $(selector)[methods[type]]())
        .toEqual(text)
});

When('I go to {string} menu item', async function (menuItem) {
    // add implementation here
    await SidebarMenu.goto(menuItem);
});

When('I logout', async function() {
    await $("a[title='Log out']").click();
}) 

When('I login as: {string}, {string}', async function (login, password) {
    await Login.login({ username: login, password: password });
});

async function invokeMethodOnPo(action, pretext, po, element, parameters) {
    if ('string' === (typeof parameters)) {
        if (parameters.includes('[')) {
            paramsArr = JSON.parse(parameters)
            await eval(po)[element][action](...paramsArr);
            return
        }
        await eval(po)[element][action](parameters);
    }
}

When(/^I (\w+) (on|at|in|into) (\w+) (\w+)(?:| with parameters:)$/, async function (action, pretext, po, element) {
    await invokeMethodOnPo(action, pretext, po, element)
});

When(/^I (\w+) (on|at|in|into) (\w+) (\w+) with parameters: '([^']*)'$/, async function (action, pretext, po, element, parameters) {
    await invokeMethodOnPo(action, pretext, po, element, parameters)
});

When(/^I search for "([^"]*)"$/, async function (text) {
    await CustomPage.search.setValue(text);
    await CustomPage2.header.search.setValue(text);
});

When(/^I sort table by "([^"]*)"$/, async function (name) {
    const data = await Table.data();
    const head = await (await Table.headers()).filter(item => item.name === name)[0].element.click();
    console.log({ head });
    console.log({ data })
    // console.log(JSON.stringify(data));
});

When(/^I fill User form: "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, async function (email, password, address1, address2, city, zip, anual, description) {
           
    await $("#email").addValue(email);
    await $("#password").addValue(password);
    await $("#address1").addValue(address1);
    await $("#address2").addValue(address2);
    await $("#city").addValue(city);
    await $("#zip").addValue(zip);
    await $("#anual").addValue(anual);
    await $("#description").addValue(description);
    await $("button[type='submit']").click();
    await browser.pause(500);
 
    /* for (const elModel of UserForm.model) {
        const el = new elModel.type(elModel.selector);
        await el.set(elModel.name);  // ?????????????????????? 
        await browser.pause(200);
    }
    await browser.pause(1000);
    await $("button[type='submit']").click(); */

});

When(/^I fill form:$/, async function (formYaml) {
    const formData = YAML.parse(formYaml);
    for (const elModel of Subscribe.model) {
        const el = new elModel.type(elModel.selector);
        await el.set(formData[elModel.name]);
        await browser.pause(200);
    }
    await $("button[type='submit']").click();
});

