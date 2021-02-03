// const { page_objects_path } = require("../nightwatch.conf");

// module.exports = {
//     beforeEach: function (browser) {
//         browser.url('https://output.jsbin.com/hudape/1/')
//     },
//     'Check calculator page loading': function (browser) {
//         browser
//             .assert.titleContains('JS Bin')
//             .useXpath()
//     },
      
//     'Test 6 Result of a previous operation when the result is 0 [0*6*6=0]':function(browser){
//         browser.page.calculator()
//             .press(0).press('×')
//             .press(6).press('×').press(6)
//             .press('=')
//             .execute(function() {
//                 return document.querySelector('div#output').innerText
//             }, [], function(result) {
//                 console.log(result)
//                 this.assert.equal(result.value, '0')
//             }).clear()
//     },
    //'Test 18 subtraction of two ten digit number'

    // 'add -ve nuumber to a +ve number -11111111 +22222222': function (browser) {
    //     browser.page.calculator()
    //         .add(-1111111111, 2222222222).check(1111111111)
    // },
    // '2/2=1': function (browser) {
    //     browser.page.calculator()
    //         .div(2, 2).check(1)

    // },
    // '1×2=2': function (browser) {
    //     browser.page.calculator()
    //         .mul(1, 2).check(2)
    // },
    // 'check BODMAS':function(){

    // }

//}