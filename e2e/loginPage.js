class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  getUsernameField() {
        return cy.get('input[name="username"]', { timeout: 5000 });
    }

    getPasswordField() {
        return cy.get('input[name="password"]', { timeout: 5000 });
    }

    getLoginButton() {
        return cy.get('button[type="submit"]');
    }

    getLogo() {
        return cy.get('.orangehrm-login-branding > img');
    }

    getForgotPasswordLink() {
        return cy.get('.orangehrm-login-forgot-header');
    }

    getCopyright() {
        return cy.get('.orangehrm-copyright');
    }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  assertLoginSuccess() {
    cy.get('h6').should('contain.text', 'Dashboard');
  }

  assertLoginPageElements() {
        this.getUsernameField().should('be.visible');
        this.getPasswordField().should('be.visible');
        this.getLoginButton().should('be.visible');
        this.getLogo().should('be.visible');
        this.getForgotPasswordLink().should('be.visible').and('contain.text', 'Forgot your password?');
        this.getCopyright().should('be.visible').and('contain.text', 'OrangeHRM, Inc.');
    }
}

export default LoginPage;
