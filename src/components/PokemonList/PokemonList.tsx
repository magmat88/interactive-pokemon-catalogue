import React from 'react';
import { PokemonType } from '../../config/state';
import { PokemonDetails } from '..';
import './PokemonList.scss';

interface PokemonListProps {
    pokemons: Array<PokemonType>;
}

export function PokemonList({pokemons}: PokemonListProps): JSX.Element {

    // const { content } = useStoreon('content');

    // useEffect(() => {}, [content.pending]);

    // if (content.pending) {
    //     return <LoadingIndicator />;
    // }

    // if (content.error) {
    //     return <ErrorInfo />;
    // }

    return (
        <section id="pokemon-list">
            {[...pokemons].slice(0, 20).map((pokemon) => {
                return <li key={pokemon.name}><PokemonDetails pokemon={pokemon}/></li>
            })}
            <button onClick={()=> {console.log('load more Pokemons on click')}}>Load more Pokemons</button>
        </section>
        );
}
