const url = 'https://magmat88.github.io/interactive-pokemon-catalogue/';

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('displays header', () => {
    const titleSelector = '.landingPage__title';
    const title = cy.get(titleSelector);

    title.should('have.length', 1);
    title.first().should('have.text', 'Pokedex');
  });

  it('should filter', () => {
    const filterInputSelector = 'input.filterByName__input';
    cy.wait(5000);

    const filterInput = cy.get(filterInputSelector);


    filterInput.type('charizard')
        .should('have.value', 'charizard');

    cy.get('.pokemons--unordered li.pokemons__listItem')
    .should('have.length', 1);

    cy.get('.pokemon h1.pokemon__text--label')
        .should('have.text', 'charizard');

    cy.get('div.pokemon').click();
    cy.get('article.pokemon__description div p').should('have.length', 2);
    cy.get('article.pokemon__description div p').first().should('have.text', 'Height: 17 m')    
    

  });
});
