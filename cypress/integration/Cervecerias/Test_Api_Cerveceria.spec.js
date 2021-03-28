/// <reference types='cypress'/>

describe('Test Backend Cerveceria', () => {
    const baseUrl = 'https://api.openbrewerydb.org/breweries'

    it('Verificar campos Cerveceria ID=761',()=>{
        cy.request('GET',`${baseUrl}/autocomplete?query=lagunitas`)
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body).to.not.be.null
                const cervecerias = response.body.filter( el => el.name === 'Lagunitas Brewing Co')   
                
                let resultado = []
                const urls = cervecerias.map( cerveceria => `${baseUrl}/${cerveceria.id}`)                 
                const promesas = urls.map( url => {
                    return new Cypress.Promise(resolve => {
                        cy.request(url)
                            .then(response => resolve(response)) 
                    })
                })

                Cypress.Promise.all(promesas).then(responses => {
                    resultado = responses.filter( el => el.body.state === 'California').map(el => el.body)
                    
                    expect(resultado[0].id).to.equal(761)
                    expect(resultado[0].name).to.equal('Lagunitas Brewing Co')
                    expect(resultado[0].street).to.equal('1280 N McDowell Blvd')
                    expect(resultado[0].phone).to.equal('7077694495')
                  })
                
            });   
            
        })
    })
