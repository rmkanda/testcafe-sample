import LoginPage from "../login";

const loginpage = new LoginPage();

fixture`Application Login`.page`https://demo.mybahmni.org/openmrs/`;

test("Valid login test", async t => {
  await loginpage.login("", "");
  await t.takeScreenshot();
});
