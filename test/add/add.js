module.exports={
    beforeEach: function (browser) {
        browser.url('https://output.jsbin.com/hudape/1/')
        .useXpath()
    },
    ' Test 1 addition of two positive integer number [111+111=222]': function (browser) {
        browser.page.calculator()
            .add(111, 111).check(222)
    },
    'Test 2 addition of two negative number [-111+-111=-222]': function (browser) {
        browser.page.calculator()
            .add(-111, -111).check(-222)
    },
    'Test 3 addition of one negative and one positive number [-111+111=0]': function (browser) {
        browser.page.calculator()
            .add(-111, 111).check(0)
    },
    'Test 4 addition of two ten digit number [123456789+123456789=246913578] ': function (browser) {
        browser.page.calculator()
            .press(1).press(2).press(3).press(4).press(5).press(6).press(7).press(8).press(9)
            .press('+')
            .press(1).press(2).press(3).press(4).press(5).press(6).press(7).press(8).press(9)
            .press('=')
            .check('246913578')
    },
    'Test 5 addition of two fifteen digit number [123456789+123456789=246913578] ': function (browser) {
        browser.page.calculator()
            .press(1).press(2).press(3).press(4).press(5).press(6).press(7).press(8).press(9)
            .press(1).press(2).press(3).press(4).press(5)
            .press('+')
            .press(1).press(2).press(3).press(4).press(5).press(6).press(7).press(8).press(9)
            .press(1).press(2).press(3).press(4).press(5)
            .press('=')
            .check('24691357824690')
    },
}