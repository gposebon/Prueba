/// <reference types='cypress' />

import GoogleSearch from '../GoogleSearch/Framework/GoogleSearch'


describe('Google Homepage Search', () => {

    const googleSearch = new GoogleSearch()

    it('El usuario busca por Google Search', () => {

        cy.visit('/')
        googleSearch.searchText('The name of the wind')
        googleSearch.clickSearchButton()
        googleSearch.assertFirtsResult('The Name of the Wind - Patrick Rothfuss')
        googleSearch.clickFirtsResult()
        googleSearch.assertTitle('Patrick Rothfuss - The Books')

        
    })

    it('Usuario puede buscar mediante sugerencias', () => {
        
        cy.visit('/')
        googleSearch.searchText('The name of the w')
        googleSearch.clickFirtsSuggested()
        googleSearch.assertFirtsResult('The Name of the Wind - Patrick Rothfuss')
        googleSearch.clickFirtsResult()
        googleSearch.assertTitle('Patrick Rothfuss - The Books')
    })

})