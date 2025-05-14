import LoginPage from './loginPage';

describe('Login Test on OrangeHRM', () => {
  const loginPage = new LoginPage();

  it('should display all elements on the login page', () => {
        loginPage.visit();
        loginPage.assertLoginPageElements();
    });

  it('should login successfully with valid credentials', () => {
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();
    loginPage.assertLoginSuccess();
  });
});
