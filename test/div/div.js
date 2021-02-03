module.exports={
    beforeEach: function (browser) {
        browser.url('https://output.jsbin.com/hudape/1/')
        .useXpath()
    },
    'Test 1 division of two positive integer [222,222=0]': function (browser) {
        browser.page.calculator()
            .div(222, 222).check(1)
    },
    'Test 2 division of two negative integers[-222,-222=0]': function (browser) {
        browser.page.calculator()
            .div(-222, -222).check(1)
    },
    'Test 3 division of one negative integer and one positive integer[-2,2=0]': function (browser) {
        browser.page.calculator()
            .div(-2, 2).check(-1)
    },
    'Test 4 divide 0 by a integer divisor [0/200=0]': function (browser) {
        browser.page.calculator()
            .press('0')
            .press('/')
            .press('2').press('0').press('0')
            .press('=')
            .check('0').clear()
    },
    'Test 5 divide a negative divedend by a positive divisor [-1500/2000=-0.75]': function (browser) {
        browser.page.calculator()
            .press('-').press(1).press(5).press(0).press(0)
            .press('/')
            .press(2).press(0).press(0).press(0)
            .press('=')
            .check(-0.75).clear()
    },
    'Test 6 division by 0 [1500/0=ERR]': function (browser) {
        browser.page.calculator()
            .press(1).press(5).press(0).press(0)
            .press('/')
            .press(0)
            .press('=')
            .check("Infinity").clear()
    },
    'Test 7 division by two floating numbers[1/2/1/5]': function (browser) {
        browser.page.calculator()
            .press(1).press('/')
            .press(2).press('/')
            .press(1).press('/')
            .press(5)
            .press('=')
            .check('0.1')
    },
}  