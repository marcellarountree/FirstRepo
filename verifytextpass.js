module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    'Your test here': browser => {
        browser
            .click('li[name="employee1"]') 
            .click('input[name="nameEntry"')
            .clearValue('input[name="nameEntry"]')
            .setValue('[name="nameEntry"]' , 'New Test')
            .click('#saveBtn')
            .verify.containsText('p[name="employeeName"]' , 'New Test')
            .pause(10000)
             
    }
}