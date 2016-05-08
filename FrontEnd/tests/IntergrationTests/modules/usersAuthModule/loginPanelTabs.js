'use strict';

let tab1,
	tab2;

describe('loginPanelTabs', () => {
	it('should set active Tab1 when page is loaded', () => {
		browser.get(browser.baseUrl);
		tab1 = element(by.id('tab1'));
		tab2 = element(by.id('tab2'));

		expect(tab1.getAttribute('class')).toContain('active');
		expect(tab2.getAttribute('class')).not.toContain('active');
	});
	it('should set inactive Tab1 when Tab2 is clicked', () => {
		tab2.click();

		expect(tab1.getAttribute('class')).not.toContain('active');
		expect(tab2.getAttribute('class')).toContain('active');
	});
});