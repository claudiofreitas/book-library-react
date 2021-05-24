describe('Book list', () => {
  it('displays a list of books', () => {
    cy.visit('http://localhost:1234');
    cy.contains('Refactoring');
    cy.contains('Martin Fowler');
    cy.contains('Kent Beck');
  });
});
