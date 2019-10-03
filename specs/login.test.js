import loginPage from "../login";

fixture`Application Login`.page`https://demo.mybahmni.org/openmrs/`;

test("Valid login test", async t => {
  await loginPage.login("superman", "Admin123");
  await t.takeScreenshot();
});
