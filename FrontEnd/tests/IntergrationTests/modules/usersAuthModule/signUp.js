'use strict';
let pageUrl,
	userName,
	email,
	passWord,
	reTypePassWord,
	submit;

describe('SignUp', () => {
	it('should NOT redirect if user types passWord twice correct', () => {
		browser.get(browser.baseUrl);
		pageUrl = browser.baseUrl;
		element(by.id('tab2')).click();
		userName = element(by.id('signUpUserName'));
		email = element(by.id('signUpEmail'));
		passWord = element(by.id('signUpPassWord'));
		reTypePassWord = element(by.id('signUpreTypePassWord'));

		userName.sendKeys('mike');
		email.sendKeys('mike@gmail.com');
		passWord.sendKeys('mike');
		reTypePassWord.sendKeys('mike1');
		submit = element(by.id('signUpSubmit'));
		submit.click();

		expect(reTypePassWord.getAttribute('class')).toContain('error');
		expect(browser.getCurrentUrl()).toEqual(pageUrl);
	});

	it('should NOT redirect if email is all ready registered', () => {
		userName.clear().sendKeys('mike');
		email.clear().sendKeys('mike@gmail.com');
		passWord.clear().sendKeys('mike');
		reTypePassWord.clear().sendKeys('mike');
		submit.click();

		expect(email.getAttribute('class')).toContain('error');
		expect(browser.getCurrentUrl()).toEqual(pageUrl);
	});

	it('should NOT redirect if user name is all ready registered', () => {
		userName.clear().sendKeys('mike');
		email.clear().sendKeys('mike@gmail.com');
		passWord.clear().sendKeys('mike');
		reTypePassWord.clear().sendKeys('mike');
		submit.click();

		expect(userName.getAttribute('class')).toContain('error');
		expect(browser.getCurrentUrl()).toEqual(pageUrl);
	});
});