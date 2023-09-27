class SignInPage {

    signInFieldType(email) {
        return cy.dataCy('input[type="email"]').type(email);
    }

    get passwordField() {
        return cy.dataCy('input[type="password"]');
    }

    get singInButton() {
        return cy.dataCy('button[type="submit"]');
    }

    get needAnAccountLink() {
        return cy.dataCy('a[href="#register"]').contains('Need an account?');
    }

    get invalidEmailMessage() {
        return cy.dataCy('li').contains('email or password is invalid');
    }
}

export default new SignInPage();