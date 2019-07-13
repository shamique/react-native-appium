var expect = require('chai').expect;

describe('Simple App testing', () => {
  it('login test', async  => {
    beforeEach(() => {
      $("~app-root").waitForDisplayed(11000, false)
    });

    $('~username').setValue("shamique");
    $('~password').setValue("123456");

    $("~login").click();

    const status = $("~loginstatus").getText();
    expect(status).to.equal('success');
  });
});