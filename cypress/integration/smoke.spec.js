describe('Smoke Test', () => {
  it('Can visit the homepage', () => {
    cy.visit('http://localhost:1234');
  });
});
