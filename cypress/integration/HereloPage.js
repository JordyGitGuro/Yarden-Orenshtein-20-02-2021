class HereloPage {
    constructor() { 
        this.nameFieldBottom = `#name`;
        this.companyFieldBottom = `#company`;
        this.emailFieldBottom = `#email`;
        this.telephoneFieldBottom = `#telephone`
        this.contactBtnBottom = `[type=button]`;
        this.backToTopBtn = "[class*=backToTop]";
        this.takeMeToWebstieBtn = '[href="https://herolo.co.il/"]';
        this.takeMeBackBtn = "[class*=thankYou__backLink]";
        this.thankYouTitle = "[class*=thankYou__title]";
        this.logoIcon = "#logom";
        this.NameField = "[name=name]";
        this.emailField = "[name=email]";
        this.telephoneField = "[name=phone]";
        this.sendContactFooterBtn = "Button[class*=Footer__Button]";
        this.popUpGetCallBtn = "[class*='onUnloadPopup__Button']";
        this.errorMessageSlector = "[class*=commun__ErrorText]";
    }

    enterContactNameBottom(coantactName) {
        cy.get(this.nameFieldBottom).clear({scrollBehavior:false}).type(coantactName, {scrollBehavior:false});
    }

    enterContactEmailBottom(emailAddress) {
        cy.get(this.emailFieldBottom).clear({scrollBehavior:false}).type(emailAddress, {scrollBehavior:false});
    }

    enterTelephoneNumberBottom(telephoneNumvber) {
        cy.get(this.telephoneFieldBottom).clear({scrollBehavior:false}).type(telephoneNumvber, {scrollBehavior:false});
    }

    enterCompanyNameBottom(companyField) {
        cy.get(this.companyFieldBottom).clear({scrollBehavior:false}).type(companyField, {scrollBehavior:false});
    }

    clickContactMeButton() {
        cy.get(this.contactBtnBottom).click({scrollBehavior:false});
    }

    scrollToBottom() {
        cy.scrollTo('bottom');
    }

    clickTakeMeBackButton() {
        cy.get(this.takeMeBackBtn).click();
    }

    thankYouMessage() {
       return cy.get(this.thankYouTitle, {timeout: 15000});
    }

    hereloLogo() {
       return cy.get(this.logoIcon);
    }

    eneterContactNameFooter(name) {
        cy.get(this.NameField).type(name);
    }

    enterEmailFooter(email) {
        cy.get(this.emailField).type(email);
    }

    enterTelephoneFooter(telephoneNumber) {
        cy.get(this.telephoneField).type(telephoneNumber);
    }

    clickSendContactFooterButton() {
        cy.get(this.sendContactFooterBtn).click();
    }

    errorMessage() {
        return cy.get(this.errorMessageSlector);
    }

    clickBackToTopButton() {
        cy.get(this.backToTopBtn).click();
    }

    backToTopButton() {
        return cy.get(this.backToTopBtn);
    }

    scrollPoistion() {
        return cy.window().its('scrollY');
    }

    clearAllFields() {
        cy.get(this.nameFieldBottom).clear({scrollBehavior:false});
        cy.get(this.emailFieldBottom).clear({scrollBehavior:false});
        cy.get(this.companyFieldBottom).clear({scrollBehavior:false});
        cy.get(this.telephoneFieldBottom).clear({scrollBehavior:false});
    }

    takeMeToHereloWebstieButton() {
        return cy.get(this.takeMeToWebstieBtn);
    }
}
export default HereloPage