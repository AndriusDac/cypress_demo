describe('Demo template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains("h1", "Kitchen Sink").should('be.visible')
  })
})