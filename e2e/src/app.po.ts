import { browser } from 'protractor';

export class SapphirePage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }
}
