import ScrollIntoView from 'react-scroll-into-view';
import './LandingPage.scss';

export function LandingPage() {
  return (
    <section className="landingPage" id="landing-page">
      <div className="landingPage__container">
        <h1 className="landingPage__title">Pokedex</h1>
        <h3 className="landingPage__subtitle">
          Discover amazing world of Pokemons
        </h3>
        <div className="landingPage__btn--container">
          <ScrollIntoView selector="#app-container">
            <button className="landingPage__btn landingPage__btn--light">
              Browse Pokemons
            </button>
          </ScrollIntoView>
        </div>
      </div>
    </section>
  );
}
