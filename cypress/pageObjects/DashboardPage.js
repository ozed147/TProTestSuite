class Dashboard 
{
 menuBtn ="span[class='mdc-button__label'] span";
 editAccount = "div[class='cdk-overlay-container'] button:nth-child(1) span:nth-child(1)"
 logout = "button[data-cy='logout'] span[class='mdc-list-item__primary-text']";

  clickMenuBtn()
   {
    cy.wait(5000);
    cy.get(this.menuBtn).click();
   }

 clickEditAccount()
    {
        cy.get(this.editAccount).click();
     }
 
     clickLogout()
     {
       cy.get(this.logout).click();
     }


}

export default Dashboard