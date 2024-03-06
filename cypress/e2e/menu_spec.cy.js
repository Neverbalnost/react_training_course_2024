describe('Genres menu e2e test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Menu should be visible on a page', () => {
    cy.get('.genre-menu').should('be.visible')
  })

  it('Menu should contain genres list', () => {
    cy.get('.genre-menu').find('.genre').should('match', 'li')
  })

  it('Menu should contain a highlighted genre', () => {
    cy.get('.genre--chosen').should(($el) => {
      expect($el).to.have.length(1)
    })
        .then(($el) => {
          expect($el, 'text content').to.have.text('thriller')
        })
  })
})