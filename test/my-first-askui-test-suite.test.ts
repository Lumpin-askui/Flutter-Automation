import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('Flutter App Login Form', async () => {

    //Open Flutter App
    await aui.typeIn("https://app.flutterflow.io/run/1E6pv4HAPn7zBGaHYtMx").url().exec();
    await aui.pressKey('enter').exec();

    //Fill Out Form
    await aui.typeIn("info@askui.com").textfield().contains().withText("Email Address").exec();
    await aui.typeIn("test123").textfield().contains().withText("Password").exec();

    //Login
    await aui.click().text().withText("Login").exec();

    //Verify Login
    await aui.expect().text().withText("Good Morning").exists();

  });

  it('Annotation', async () => {
    await aui.annotate();
  });


});
