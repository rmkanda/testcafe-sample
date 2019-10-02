import LoginPage from "../login";

fixture`Application Login`.page`https://demo.mybahmni.org/openmrs/`;

test("Valid login test", async t => {
  await loginpage.login("superman", "Admin123");
  await t.takeScreenshot();
});
