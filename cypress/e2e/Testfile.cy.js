
describe('Complete SignUp flow with Mailosaur', () => {
    it('Sign up with Facebook', () => {
      
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardAboutUsDropdown('Facebook') 
        cy.typeInPassword()
        cy.submitSignUp()
        cy.retrieveAndInsertOTP()
       
        
    });

    it('Sign up with Twitter', () => {
    
      cy.typeInBasicDetailsAndRegNumber()
      cy.clickHowYouHeardAboutUsDropdown('Twitter') 
      cy.typeInPassword()
      cy.submitSignUp()
      cy.retrieveAndInsertOTP()
      
  });

  it('Sign up with Webinar/Seminar', () => {
    cy.typeInBasicDetailsAndRegNumber()
    cy.clickHowYouHeardAboutUsDropdown('Webinar/Seminar') 
    cy.typeInPassword()
    cy.submitSignUp()
    cy.retrieveAndInsertOTP()
    
});

it('Sign up with Google Search', () => {
  cy.typeInBasicDetailsAndRegNumber()
  cy.clickHowYouHeardAboutUsDropdown('Google Search') 
  cy.typeInPassword()
  cy.submitSignUp()
  cy.retrieveAndInsertOTP()
  
});
it('Sign up with Friends & Family', () => {
  cy.typeInBasicDetailsAndRegNumber()
  cy.clickHowYouHeardAboutUsDropdown('Friends & Family') 
  cy.typeInPassword()
  cy.submitSignUp()
  cy.retrieveAndInsertOTP()
  
});

it('Sign up with Mima Sales Agent', () => {
  cy.typeInBasicDetailsAndRegNumber()
  cy.clickHowYouHeardAboutUsDropdown('Mima Sales Agent') 
 cy.typeInPassword()
  cy.submitSignUp()
  cy.retrieveAndInsertOTP()
  
});

it('Sign up with Others', () => {
  cy.typeInBasicDetailsAndRegNumber()
  cy.clickHowYouHeardAboutUsDropdown('Others') 
  cy.typeInPassword()
  cy.submitSignUp()
  cy.retrieveAndInsertOTP()
  
});


});
            