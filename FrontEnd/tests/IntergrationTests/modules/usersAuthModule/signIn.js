'use strict';

let pageUrl,
	userName,
	passWord,
	submit;

describe('SignIn', () => {
	it('should NOT redirect if user credentials are invalid', () => {
		browser.get(browser.baseUrl);
		pageUrl = browser.baseUrl;
		userName = element(by.id('signInUserName'));
		passWord = element(by.id('signInPassWord'));
		userName.sendKeys('mike1');
		passWord.sendKeys('mike2');
		submit = element(by.id('signInSubmit'));
		submit.click();

		expect(userName.getAttribute('class')).toContain('error');
		expect(passWord.getAttribute('class')).toContain('error');
		expect(browser.getCurrentUrl()).toEqual(pageUrl);
	});
	it('should redirect if user credentials are valid', () => {
		userName.clear().sendKeys('mike');
		passWord.clear().sendKeys('mike');
		submit.click();

		expect(browser.getCurrentUrl()).not.toEqual(pageUrl);
	});
	it('should set a token in the session storage', () => {
		browser.driver.executeScript("return window.sessionStorage.getItem('token');").then((token) => {
			expect(token.length > 1000).toBe(true);
		});
	});
});