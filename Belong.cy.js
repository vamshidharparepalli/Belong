
describe('Belong Internet Connection', () => {
  //this condition ensures that the tests shall run only after this condition is met
  it("opens the Home page and verifies the url and the title", () => {
      //opens the Website.
      cy.visit("https://www.belong.com.au/");
      //Asserts the URl.
      cy.url().should("include", "belong");
      cy.wait(5000);
  });
  
  it("clicks the See internet Plans", () => {
    //clicks on the See internet plans button. 
      cy.get(':nth-child(3) > [data-testid="action-tile__root"] > .ActionTilestyles__ContentWrapper-y8oq8z-5 > [data-testid="action-tile__button"]').click();
        cy.wait(5000);
    //The following syntax will help us to know if the User has been navigated to the Internet plans page.
      cy.url().should("include","internet");
  });

  it("clicks on check your address", () => {
    //Clicks on the Check your address button
    cy.get('[data-testid="primary-button"]').click()
    cy.wait(5000);
    //This syntax will help us to know if the user is navigated to the address check page. 
    cy.url().should("include","check-your-address");
});

  it("should search for your address Unit 1 25 Thomson Street, MAIDSTONE  VIC  3012", () => {
  //Helps input the address which the user is trying to search for. 
  cy.get('[id="queryInput"]').type("Unit 1 25 Thomson street");
  cy.wait(5000);
  //Helps in indentifying all the similar addresses from the drop down and assign the vaules to a Jquery element which acts as a variable (address)
  cy.get("ul[role='listbox']").each(function(address,index,$list){
    //If statement to select the needed address by the user else to just the print log
  if (address.text().includes("Unit 1 25 Thomson Street, MAIDSTONE VIC 3012")) 
  {
 cy.wrap(address).click()
  }
  else 
  {
  cy.log(address.text() )
  }  
  })
});
});
