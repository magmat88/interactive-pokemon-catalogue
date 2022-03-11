import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import './LandingPage.scss';

export function LandingPage() {
  return (
    <div className="landingPage" id="landing-page">
      <div className="landingPage__container">
        <h1>Pokedex</h1>
        <h3>Discover amazing world of Pokemons</h3>
        <div className="landingPage__btn--container">
          <ScrollIntoView selector="#pokemon-list">
            <button className="landingPage__btn landingPage__btn--light">
              Browse Pokemons
            </button>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
}
