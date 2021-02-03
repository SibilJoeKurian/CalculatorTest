module.exports = {
    beforeEach: function (browser) {
        browser.url('https://output.jsbin.com/hudape/1/')
            .useXpath()
    },
    'Test 1 multiplication of two integer [222,222=0]': function (browser) {
        browser.page.calculator()
            .press('2').press('2').press('2')
            .press('×')
            .press('2').press('2').press('2')
            .press('=')
            .check(49284)
            .clear()
    },
    'Test 2 multiplication of one negative and one positive integer [-111,111=0]': function (browser) {
        browser.page.calculator()
            .mul(-222, 222).check(-49284)
    },
    'Test 3 Multiplication of a number by 0 [1234567890*0=0]': function (browser) {
        browser.page.calculator()
            .press(1).press(2).press(3).press(4).press(5).press(6).press(7).press(8).press(9)
            .press('×')
            .press(0)
            .press('=')
            .check(0)
            .clear()
    },
    'Test 4 Multiplication of a number by fraction on the right side [2/3*123456789]':function(browser){
        browser.page.calculator()
            .press('2').press('/').press(3)
            .press('×')
            .press(1).press(2).press(3).press(4).press(5).press(6).press(7).press(8).press(9)
            .press('=')
            .check(82304526)
    },
    'Test 5 Multiplication of a number by fraction on the left side [2/3*123456789]':function(browser){
        browser.page.calculator()
            .press(1).press(2).press(3).press(4).press(5).press(6).press(7).press(8).press(9)
            .press('×')
            .press('2').press('/').press(3)
            .press('=')
            .check(82304526)
    },
    'Test 6 Result of a previous operation when the result is 0 [0*6*6=0]':function(browser){
        browser.page.calculator()
            .press(0).press('×')
            .press(6).press('×').press(6)
            .press('=')
            .check(0)
    },

}