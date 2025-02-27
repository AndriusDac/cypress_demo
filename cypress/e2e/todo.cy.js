describe('To-Do List App Tests', () => {
  beforeEach(() => {
    // Visit the To-Do List application before each test
    cy.visit('https://todolist.james.am/#/');
  });


  it('Should display the TodoList header', () => {
    // Check if the header is visible

    cy.contains('h1', 'To Do List').should('be.visible');
  });


  it('Should display "Double-click to edit a todo"', () => {
    // Verify the instruction text is visible

    cy.contains('p', 'Double-click to edit a toodo').should('be.visible');
  });



  it('Should display the input placeholder text', () => {
    //   // Check if the input placeholder is correct
    // cy.visit('https://todolist.james.am/#/')
    cy.get('input').should(
      'have.attr',
      'placeholder',
      "What need's to be done?");

  });

  // it('Input display placeholder', () => {
  //   cy.visit('https://todolist.james.am/#/')
  //   cy.get('input').should('have.attr', 'placeholder', "What need's to be done?");
  // })

});
