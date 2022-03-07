import React from 'react';
import { PokemonType } from '../../config/state';
import { PokemonDetails } from '..';
import './PokemonList.scss';

interface PokemonListProps {
    pokemons: Array<PokemonType>;
}

export function PokemonList({pokemons}: PokemonListProps): JSX.Element {
    return (
        <section>
            {[...pokemons].slice(0, 20).map((pokemon) => {
                return <PokemonDetails pokemon={pokemon}/>
            })}
            <button onClick={()=> {console.log('load more Pokemons on click')}}>Load more Pokemons</button>
        </section>
        );
}
