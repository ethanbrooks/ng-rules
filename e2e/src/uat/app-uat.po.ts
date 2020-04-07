import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-rules')).getText() as Promise<string>;
  }

  getFooterText() {
    return element(by.css('app-rules')).getText() as Promise<string>;
  }
}
