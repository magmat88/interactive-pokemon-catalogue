describe('Interactive Pokemon Catalogue', () => {
  const browsePokemonsBtnSelector = 'button.landingPage__btn';
  const footerSelector = 'footer';
  const landingPageSelector = '#landing-page';
  const mainContentSelector = 'div.app__mainContent';
  const scrollToTopBtnSelector =
    'div.scrollToSection button.scrollToSection__btn';

  beforeEach(() => {
    cy.visit('/');
  });

  describe('Page loaded', () => {
    context('When the page is loaded', () => {
      it('then it should focus on the landing page', () => {
        cy.get(landingPageSelector).should('exist').should('be.visible');
      });

      it('then the landing page should contain a container with a header with text "Pokedex", a subheader with text "Discover amazing world of Pokemons" and a button with text "Browse Pokemons"', () => {
        const landingPageContainerSelector = '.landingPage__container';

        cy.get(landingPageSelector).should('have.length', 1);
        cy.get(landingPageContainerSelector).should('exist');

        cy.fixture('pokemonAppData').then((data) => {
          const headerText = data.landingPage.header;
          const subheaderText = data.landingPage.subheader;
          const browsePokemonsBtnSelectorText = data.buttons.browsePokemons;

          cy.get(landingPageContainerSelector)
            .should('contain.text', headerText)
            .should('contain.text', subheaderText)
            .should('contain.text', browsePokemonsBtnSelectorText);
        });
      });

      it('then when the button "Browse Pokemons" is clicked, it should focus on the main content', () => {
        cy.get(browsePokemonsBtnSelector).click();
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
          cy.get(pokemonsListSelector).children().should('not.be.empty');

          cy.get(pokemonsListSelector)
            .children()
            .should('have.length', initialyLoadedPokemonsListLength);
          cy.get(pokemonsListSelector)
            .children()
            .find('h1')
            .should('contain.text', ...initialyLoadedPokemonsList);
        });
      });

      it('then when the page is scrolled down, it should contain "Scroll to top" button', () => {
        cy.get(scrollToTopBtnSelector).scrollIntoView();
        cy.fixture('pokemonAppData').then((data) => {
          const scrollToTopBtnText = data.buttons.scrollToTop;
          cy.get(mainContentSelector)
            .next()
            .children()
            .should('have.text', scrollToTopBtnText);
        });
      });
    });

    context('When the page is loaded and scrolled down', () => {
      beforeEach(() => {
        cy.wait(5000);
        cy.get(scrollToTopBtnSelector).scrollIntoView();
      });

      it('then when the page is scrolled down and the button "Scroll to top" is clicked, it should focus on the landing page', () => {
        cy.get(scrollToTopBtnSelector).click();
        cy.get(landingPageSelector).should('be.visible');
      });

      it('then when the page is scrolled down it should contain footer with text "This page relies on data provided by PokeApi" and "©magmat88"', () => {
        cy.get(footerSelector).should('exist');

        cy.fixture('pokemonAppData').then((data) => {
          const footerText = data.footer;

          cy.get(footerSelector)
            .children()
            .should('contain.text', ...footerText);
        });
      });

      it('then when the page is scrolled down, in footer it should be working links opened in the new browser tab - to author: "https://github.com/magmat88" and to used API: "https://pokeapi.co"', () => {
        cy.fixture('pokemonAppData').then((data) => {
          const linkToAuthor = data.links.author;
          const linkToPokeApi = data.links.pokeApi;

          cy.get(footerSelector)
            .children()
            .eq(0)
            .find('a')
            .should('have.attr', 'href')
            .and('include', linkToPokeApi);

          cy.get(footerSelector)
            .children()
            .eq(1)
            .find('a')
            .should('have.attr', 'href')
            .and('include', linkToAuthor);
        });
      });
    });
  });

  describe('Toggle color theme', () => {
    const toggleThemeBtnSelector = 'div.app__container button.app__btn';
    const appContainerSelector = 'div.app__container';
    const mainSelector = 'main.app';
    context(
      'When the page is loaded and "Browse Pokemons" button is clicked',
      () => {
        beforeEach(() => {
          cy.wait(5000);
          cy.get(browsePokemonsBtnSelector).click();
        });

        it('then the page should have light theme and the button for toggling theme should have text "Dark Theme"', () => {
          cy.fixture('pokemonAppData').then((data) => {
            const lightThemeText = data.theme.light;
            const toggleThemeWhenIsLightBtnText = data.buttons.theme.darkTheme;

            cy.get(toggleThemeBtnSelector).should('have.text', toggleThemeWhenIsLightBtnText);

            cy.get(mainContentSelector)
              .should('have.attr', 'data-theme')
              .and('include', lightThemeText);
            cy.get(mainSelector)
              .should('have.attr', 'data-theme')
              .and('include', lightThemeText);
            cy.get(appContainerSelector)
              .should('have.attr', 'data-theme')
              .and('include', lightThemeText);
          });
        });

        it('then when the "Dark Theme" button is clicked, the page should toggle to dark theme and the button for toggling theme should toggle text to "Light Theme"', () => {
          cy.get(toggleThemeBtnSelector).click();

          cy.fixture('pokemonAppData').then((data) => {
            const darkThemeText = data.theme.dark;
            const toggleThemeWhenIsDarkBtnText = data.buttons.theme.lightTheme;

            cy.get(toggleThemeBtnSelector).should('have.text', toggleThemeWhenIsDarkBtnText);

            cy.get(mainContentSelector)
              .should('have.attr', 'data-theme')
              .and('include', darkThemeText);
            cy.get(mainSelector)
              .should('have.attr', 'data-theme')
              .and('include', darkThemeText);
            cy.get(appContainerSelector)
              .should('have.attr', 'data-theme')
              .and('include', darkThemeText);
          });
        });
      }
    );

    context(
      'When the page is loaded, "Browse Pokemons" button is clicked and "Dark Theme" is clicked',
      () => {
        beforeEach(() => {
          cy.get(browsePokemonsBtnSelector).click();
          cy.get(toggleThemeBtnSelector).click();
        });

        it('then the page should have dark theme and the button for toggling theme should have text "Light Theme"', () => {
          cy.fixture('pokemonAppData').then((data) => {
            const darkThemeText = data.theme.dark;
            const toggleThemeWhenIsDarkBtnText = data.buttons.theme.lightTheme;

            cy.get(toggleThemeBtnSelector).should('have.text', toggleThemeWhenIsDarkBtnText);

            cy.get(mainContentSelector)
              .should('have.attr', 'data-theme')
              .and('include', darkThemeText);
            cy.get(mainSelector)
              .should('have.attr', 'data-theme')
              .and('include', darkThemeText);
            cy.get(appContainerSelector)
              .should('have.attr', 'data-theme')
              .and('include', darkThemeText);
          });
        });

        it('then when the "Light Theme" button is clicked, the page should toggle to light theme and the button for toggling theme should toggle text to "Dark Theme"', () => {
          cy.get(toggleThemeBtnSelector).click();

          cy.fixture('pokemonAppData').then((data) => {
            const lightThemeText = data.theme.light;
            const toggleThemeWhenIsLightBtnText = data.buttons.theme.darkTheme;

            cy.get(toggleThemeBtnSelector).should('have.text', toggleThemeWhenIsLightBtnText);

            cy.get(mainContentSelector)
              .should('have.attr', 'data-theme')
              .and('include', lightThemeText);
            cy.get(mainSelector)
              .should('have.attr', 'data-theme')
              .and('include', lightThemeText);
            cy.get(appContainerSelector)
              .should('have.attr', 'data-theme')
              .and('include', lightThemeText);
          });
        });
      }
    );
  });

  describe('Load more Pokemons', () => {});

  describe('Pokemon tile content', () => {});

  describe('Toggle details visibility', () => {});

  describe('Filter Pokemons by name', () => {});

  describe('Filter Pokemons by type', () => {});

  describe('Filter Pokemons simultaneously by name and by type', () => {});
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
