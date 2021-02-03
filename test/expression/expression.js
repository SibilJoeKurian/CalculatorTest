module.exports = {
    beforeEach: function (browser) {
        browser.url('https://output.jsbin.com/hudape/1/')
            .useXpath()
    },
    'Test 1 expression [2/2+3×2-1=6]': function (browser) {
        browser.page.calculator()
            .fillAndSubmitExpression('2/2+3×2-1')
            .check(6)
    },
    'Test 2 expression []':function(browser){

    }
}