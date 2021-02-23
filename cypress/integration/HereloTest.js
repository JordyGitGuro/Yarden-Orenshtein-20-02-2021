import HereloPage from "./HereloPage";

describe("Herelo Site Testing", function() {
    beforeEach(function() {
        cy.navigateHereloSite();
        cy.fixture('contactData').as('contactData');
    });

    it("Submmiting a 'contact me' request at the bottom of the page, and head back to site", function() {
        const contactMe = new HereloPage();
        contactMe.scrollToBottom();
        contactMe.enterContactNameBottom(this.contactData.data.name);
        contactMe.enterCompanyNameBottom(this.contactData.data.companyName);
        contactMe.enterContactEmailBottom(this.contactData.data.email);
        contactMe.enterTelephoneNumberBottom(this.contactData.data.phoneNumber);
        contactMe.clickContactMeButton();
        contactMe.thankYouMessage().should('have.text', "תודה!");
        contactMe.takeMeToHereloWebstieButton().should('have.attr', 'target', '_blank');
        contactMe.clickTakeMeBackButton();
        contactMe.hereloLogo().should('be.visible');
    });

    it("Submmiting a 'contact me' request at the page's footer bar", function() {
        const contactMe = new HereloPage();
        contactMe.eneterContactNameFooter(this.contactData.data.name);
        contactMe.enterEmailFooter(this.contactData.data.email);
        contactMe.enterTelephoneFooter(this.contactData.data.phoneNumber);
        contactMe.clickSendContactFooterButton();
        contactMe.thankYouMessage().should('have.text', "תודה!");
        contactMe.takeMeToHereloWebstieButton().should('have.attr', 'target', '_blank');
        contactMe.clickTakeMeBackButton();
        contactMe.hereloLogo().should('be.visible');
    });
    
    it("Functionallity of 'back to top' button", function() {
        const contactMe = new HereloPage();
        contactMe.scrollToBottom();
        contactMe.clickBackToTopButton();
        contactMe.backToTopButton().should('not.be.visible');
        contactMe.scrollPoistion().should('eq', 0);
    });

    it('Negative Testing', function() {
        const contactMe = new HereloPage();
        contactMe.scrollToBottom();
        this.contactData.negativeData.forEach(value => {
            if(value.name) {
                contactMe.enterContactNameBottom(value.name);
            }
            if(value.companyName) {
                contactMe.enterCompanyNameBottom(value.companyName);
            }
            if(value.email) {
                contactMe.enterContactEmailBottom(value.email);
            }
            if(value.phoneNumber) {
                contactMe.enterTelephoneNumberBottom(value.phoneNumber);
            }
            contactMe.clickContactMeButton();
            contactMe.errorMessage().should('have.text', value.error);
            contactMe.clearAllFields();
        });
    });
});