import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getListGroupItems() {
     return element(by.css('app-rules'));
  }

  getTestDescription() {
    return element(by.css('app-rules')).getText() as Promise<string>;
  }
}
