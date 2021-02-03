
const commands = {
    add: function (n1, n2) {
        return this.fillAndSubmit(n1, n2, "+")
    },
    sub: function (n1, n2) {
        return this.fillAndSubmit(n1, n2, "-")
    },
    mul: function (n1, n2) {
        return this.fillAndSubmit(n1, n2, "×")
    },
    div: function (n1, n2) {
        return this.fillAndSubmit(n1, n2, "/")
    },
    fillAndSubmit: function (n1, n2, op) {
        let expression = `${n1}${op}${n2}`
        return this
            .setValue("//input[@id='expression']", expression)
            .click('//button[@value="="]')
    },
    fillAndSubmitExpression: function (expression) {
        return this
            .setValue("//input[@id='expression']", expression)
            .click('//button[@value="="]')
    },
    clear: function () {
        return this.perform(function () {
            this
                .click('//button[@value="DEL"]')
        })
    },
    check: function (result) {
        return this.waitForElementVisible('//div[contains(text(), "' + result + '")]')
    },
    press: function(button){
        return this.click('//button[@value="'+button+'"]')
    }
}

module.exports = {
    commands: [commands]
}