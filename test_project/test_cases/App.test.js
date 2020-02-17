var expect = require('chai').expect;

describe('Simple App testing', () => {

  beforeEach(() => {
    $("~app-root").waitForDisplayed(11000, false)
  });

  it('Valid Login Test', async => {
    $('~username').setValue("shamique");
    $('~password').setValue("123456");

    $("~login").click();

    $("~loginstatus").waitForDisplayed(11000);
    const status = $("~loginstatus").getText();
    expect(status).to.equal('success');
  });

  it('Invalid Login Test', async => {
    $('~username').setValue("shamique");
    $('~password').setValue("12345");

    $("~login").click();

    $("~loginstatus").waitForDisplayed(11000);
    const status = $("~loginstatus").getText();
    expect(status).to.equal('fail');
  });
});