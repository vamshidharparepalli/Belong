
describe('Belong Internet Connection', () => {
  //this condition ensures that the tests shall run only after this condition is met
  it("opens the Home page and verifies the url and the title", () => {
      //opens the Website.
      cy.visit("https://www.belong.com.au/");
      //Asserts the URl.
      cy.url().should("include", "belong");
      cy.wait(1000);
  });
  
  it("clicks the See internet Plans", () => {
    //clicks on the See internet plans button. 
      cy.get(':nth-child(3) > [data-testid="action-tile__root"] > .ActionTilestyles__ContentWrapper-y8oq8z-5 > [data-testid="action-tile__button"]').click();
        cy.wait(1000);
    //The following syntax will help us to know if the User has been navigated to the Internet plans page.
      cy.url().should("include","internet");
  });

  it("clicks on check your address", () => {
    //Clicks on the Check your address button
    cy.get('[data-testid="primary-button"]').click()
    cy.wait(1000);
    //This syntax will help us to know if the user is navigated to the address check page. 
    cy.url().should("include","check-your-address");
});

  it("should search for your address Unit 25  6-8 Thomson Street, TWEED HEADS  NSW  2485", () => {
  //Helps input the address which the user is trying to search for. 
  cy.get('[id="queryInput"]').type("Unit 25  6-8 Thomson Street");
  cy.log();
  cy.wait(5000);
  cy.get('#queryList>li:nth-child(1)').click();
  cy.wait(5000);
});

it("should check the address and confirm the connectivity ", () => {
  //Helps input the address which the user is trying to search for. 
  cy.get('.ButtonGroup__ButtonWrapper-ozgsdj-0>[data-testid="step-address-lookup__submit-button"]').click();
  cy.wait(6000);
// this helps to assert if the user's address is eligible to the NBN Connection
  cy.get('.InnerSection-tykyg0-0 > .Heading-sc-1vh9mjn-0').contains('Great! We can connect you to NBN internet')
});
});
