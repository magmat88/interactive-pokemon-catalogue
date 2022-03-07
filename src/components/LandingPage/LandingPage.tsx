import React from 'react';
import './LandingPage.scss';

export function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage__container">
        <h1>Pokedex</h1>
        <h3>Discover amazing world of Pokemons</h3>
        <div className="landingPage__btn--container">
          <button className="landingPage__btn landingPage__btn--light">
            <a href="#pokemon-list">Browse Pokemons</a>
          </button>
        </div>
      </div>
    </div>
  );
}
