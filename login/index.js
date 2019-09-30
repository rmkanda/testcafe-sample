import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.username = Selector("#username");
    this.password = Selector("#password");
    this.submit = Selector("input").withAttribute("type", "submit");
    this.location = Selector("#location");
  }

  async login(username, password) {
    await t
      .maximizeWindow()
      .typeText(this.username, username)
      .typeText(this.password, password)
      .click(this.submit);
    await t
      .expect(Selector(".portlet").innerText)
      .contains("Hello, Super. Welcome to OpenMRS.");
    await t.takeScreenshot("./");
  }

  async chooseLoginLocation(loginLocation) {
    await t
      .click(this.location)
      .click(this.location.find("option").withText(loginLocation))
      .expect(this.location.value);
  }
}

export default new LoginPage();
