class GoogleSearch {
    
    visit() {
      cy.visit('/');
    }
  
    searchText(textToSearch) {
        cy.get('[name="q"]').type(textToSearch);
    }

    clickSearchButton(){
        cy.get('input[value="Buscar con Google"]').first().click()
    }

    clickFirtsSuggested() {
        cy.get('[role="listbox"]').children().first().click()
    }

    getFirstResult(){
        return cy.get('.g > div > div > a > h3').eq(0)
    }
    
    assertFirtsResult(text){
        this.getFirstResult()
            .should('have.text', text)
    }

    clickFirtsResult(){
        this.getFirstResult()
            .click()
    }

    assertTitle(text) {
        cy.title().should('eq', text)
    }
  
    
  }
  
  export default GoogleSearch;