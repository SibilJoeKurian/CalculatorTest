module.exports={
    beforeEach: function (browser) {
        browser.url('https://output.jsbin.com/hudape/1/')
        .useXpath()
    },
    'Test 1 substraction of two positive integer number [111-111=0]': function (browser) {
        browser.page.calculator()
            .sub(111, 111).check(0)
    },
    'Test 2 substraction of one negative and positive integer [-111-111=0]': function (browser) {
        browser.page.calculator()
            .sub(-111, 111).check(-222)
    },
    'Test 3 substraction of two negative integer [-111-0-111=0]': function (browser) {
        browser.page.calculator()
            .press('-')
            .press('1').press('1').press('1')
            .press('-')
            .press('0')
            .press('-')
            .press('1').press('1').press('1')
            .press('=')
            .check(-222)
            .clear()
    },
    'Test 4 subtraction of two ten digit number [123456789+123456789=246913578] ': function (browser) {
        browser.page.calculator()
            .press(1).press(2).press(3).press(4).press(5).press(6).press(7).press(8).press(9)
            .press('-')
            .press(1).press(2).press(3).press(4).press(5).press(6).press(7).press(8).press(9)
            .press('=')
            .check('0')
    },
    'Test 5 subtraction of two fifteen digit number [123456789+123456789=246913578] ': function (browser) {
        browser.page.calculator()
            .press(1).press(2).press(3).press(4).press(5).press(6).press(7).press(8).press(9)
            .press(1).press(2).press(3).press(4).press(5)
            .press('-')
            .press(1).press(2).press(3).press(4).press(5).press(6).press(7).press(8).press(9)
            .press(1).press(2).press(3).press(4).press(5)
            .press('=')
            .check('0')
    },
}