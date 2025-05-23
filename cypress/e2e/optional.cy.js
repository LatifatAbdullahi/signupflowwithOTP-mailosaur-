
describe('Optional Field flow', () => {
    it('Sign up with twitter and website', () => {
      
        cy.typeInBasicDetails()
        cy.fillinAnyOptionalField('website')
        cy.clickHowYouHeardAboutUsDropdown('Twitter') 
        cy.typeInPassword()
        cy.submitSignUp()
        cy.retrieveAndInsertOTP()
       
        
    });
    
  it.only('Sign up with Instagram', () => {
    cy.typeInBasicDetails()
     cy.fillinAnyOptionalField('website')
    cy.clickHowYouHeardAboutUsDropdown('Instagram') 
    cy.typeInPassword()
    cy.submitSignUp()
    cy.retrieveAndInsertOTP()
    
});

    it('Sign up with Twitter', () => {
    
      cy.typeInBasicDetails()
       cy.fillinAnyOptionalField('website')
      cy.clickHowYouHeardAboutUsDropdown('Twitter') 
      cy.typeInPassword()
      cy.submitSignUp()
      cy.retrieveAndInsertOTP()
      
  });



});
            