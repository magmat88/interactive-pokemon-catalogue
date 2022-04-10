describe('Interactive Pokemon Catalogue', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Page loaded', () => {
    context('When the page is loaded', () => {
      const landingPageSelector = '#landing-page';
      const mainContentSelector = 'div.app__mainContent';
      const scrollToTopBtnSelector =
        'div.scrollToSection button.scrollToSection__btn';

      it('then it should focus on the landing page', () => {
        cy.get(landingPageSelector).should('exist');
      });

      it('then the landing page should contain a container with a header with text "Pokedex", a subheader with text "Discover amazing world of Pokemons" and a button with text "Browse Pokemons"', () => {
        const landingPageContainerSelector = '.landingPage__container';

        cy.get(landingPageSelector).should('have.length', 1);
        cy.get(landingPageContainerSelector).should('exist');

        cy.fixture('pokemonAppData').then((data) => {
          const headerText = data.landingPage.header;
          const subheaderText = data.landingPage.subheader;
          const browsePokemonsBtnText = data.buttons.browsePokemons;

          cy.get(landingPageContainerSelector)
            .should('contain.text', headerText)
            .should('contain.text', subheaderText)
            .should('contain.text', browsePokemonsBtnText);
        });
      });

      it('then when the button "Browse Pokemons" is clicked, it should focus on the main content', () => {
        const browsePokemonsBtn = 'button.landingPage__btn';

        cy.get(browsePokemonsBtn).click();
        cy.get(mainContentSelector).should('exist');
      });

      it('then the main content should consist of button to toggle color theme, section with filter by type and filter by type, list of Pokemons, button to load more Pokemons', () => {
        cy.fixture('pokemonAppData').then((data) => {
          const darkThemeBtnText = data.buttons.theme.darkTheme;
          const loadMorePokemonsBtnText = data.buttons.loadMorePokemons;
          const filterByTypePlaceholder =
            data.filters.placeholders.filterByType;
          const filterByNamePlaceholder =
            data.filters.placeholders.filterByName;

          cy.get(mainContentSelector).should('contain.text', darkThemeBtnText);
          cy.get(mainContentSelector)
            .children()
            .eq(1)
            .find('select')
            .should('contain.text', filterByTypePlaceholder);
          cy.get(mainContentSelector)
            .children()
            .eq(1)
            .find('input')
            .invoke('attr', 'placeholder')
            .should('contain', filterByNamePlaceholder);
          cy.get(mainContentSelector).should(
            'contain.text',
            loadMorePokemonsBtnText
          );
        });

        cy.get(mainContentSelector).find('ul').should('exist');
      });

      it('then the list of initially loaded Pokemons should consist of 20 elements', () => {
        const pokemonsListSelector =
          'div.app__mainContent ul.pokemons--unordered';

        // TODO: wait before

        cy.fixture('pokemonAppData').then((data) => {
          const initialyLoadedPokemonsList = data.initiallyLoadedPokemons;
          const initialyLoadedPokemonsListLength =
            initialyLoadedPokemonsList.length;
          cy.get(pokemonsListSelector)
            .children()
            .should('not.be.empty');
            
          cy.get(pokemonsListSelector)
            .children()
            .should('have.length', initialyLoadedPokemonsListLength);
          cy.get(pokemonsListSelector)
            .children()
            .find('h1')
            .should('contain.text', ...initialyLoadedPokemonsList);
        });
      });

      it('then when the page is scrolled down, it contains "Scroll to top" button', () => {
        // cy.get(mainContentSelector).scrollTo('bottom');
        cy.fixture('pokemonAppData').then((data) => {
          const scrollToTopBtnText = data.buttons.scrollToTop;
          cy.get(mainContentSelector).next().children().should(
            'have.text',
            scrollToTopBtnText
          );
        });
      });

      it('then when the button "Scroll to top" is clicked, it should focuses on the landing page', () => {
        // cy.get(scrollToTopBtnSelector).click().find(landingPageSelector)
      });

      it('then it contains working links', () => {});

      it('then it Scroll into view buttons', () => {});

      // it('page is loaded', () => {
      //   cy.log('page loaded...');
      // });
      // it('show example fixture data from array', () => {
      //   const pokemonTypes = [];
      //   cy.fixture('pokemonAppData').then((data)=>{
      //     pokemonTypes.push(...data.pokemonTypes);
      //     cy.log(pokemonTypes);
      //   });
      // });
    });
  });

  describe('Pokemons list loaded', () => {});

  describe('Pokemon data loaded', () => {});

  describe('Load more Pokemons', () => {});

  describe('Pokemon tile content', () => {});

  describe('Toggle details visibility', () => {});

  describe('Filter Pokemons by name', () => {});

  describe('Filter Pokemons by type', () => {});

  describe('Filter Pokemons simultaneously by name and by type', () => {});

  describe('Toggle color theme', () => {});
});

//cy.fixture()

// describe('example to-do app', () => {
//   beforeEach(() => {
//     cy.visit(url);
//   });

//   it('displays header', () => {
//     const titleSelector = '.landingPage__title';
//     const title = cy.get(titleSelector);

//     title.should('have.length', 1);
//     title.first().should('have.text', 'Pokedex');
//   });

//   it('should filter', () => {
//     const filterInputSelector = 'input.filterByName__input';
//     cy.wait(5000);

//     const filterInput = cy.get(filterInputSelector);

//     filterInput.type('charizard')
//         .should('have.value', 'charizard');

//     cy.get('.pokemons--unordered li.pokemons__listItem')
//     .should('have.length', 1);

//     cy.get('.pokemon h1.pokemon__text--label')
//         .should('have.text', 'charizard');

//     cy.get('div.pokemon').click();
//     cy.get('article.pokemon__description div p').should('have.length', 2);
//     cy.get('article.pokemon__description div p').first().should('have.text', 'Height: 17 m')

//   });
// });
