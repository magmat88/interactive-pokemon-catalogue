import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import {
  getPokemonItem,
  setCurrentItemUrl,
} from '../../actions';
import { LoadingIndicator } from '..';
import './PokemonListItem.scss';

// export type PokemonType = {
//   name: string;
//   url: string;
// };

type PokemonListItemTypesType = [
  {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
];

type listItemResponseType = {
  height: number | null;
  sprite: string | null;
  types: Array<PokemonListItemTypesType>;
  weight: number | null;
};

// export interface PokemonListItemProps {
//   pokemon: PokemonType;
// }

export function PokemonListItem({
  getPokemonItem,
  setCurrentItemUrl,
  pokemonApp,
  pokemonApiItem
}: any): JSX.Element {
  const { pokemonItemResponse, status, error } = pokemonApiItem;
  const { itemUrl } = pokemonApp;


  const [listItemResponse, setListItemResponse] =
    useState<listItemResponseType>({
      height: null,
      sprite: null,
      types: [],
      weight: null,
    });
  const [IsListItemRequestPending, setIsListItemRequestPending] =
    useState(true);
  const [listItemVisibility, setListItemVisibility] = useState(false);
  const [IsListItemError, setIsListItemError] = useState(false);

  useEffect(() => {
    axios
      .get(pokemonItemResponse.url)
      .then((res) => {
        const currentlistItem = {
          height: res.data.height,
          sprite: res.data.sprites.front_default,
          types: res.data.types.map((typeItem: any) => {
            return typeItem.type.name;
          }),
          weight: res.data.weight,
        };

        setListItemResponse(currentlistItem);
        setIsListItemRequestPending(false);
      })
      .catch((error) => {
        setIsListItemError(true);
        setIsListItemRequestPending(false);
      });
  }, [pokemonItemResponse.url]);

  function toggleListItemVisibility(): void {
    if (!listItemVisibility) {
      setListItemVisibility(true);
    } else {
      setListItemVisibility(false);
    }
  }

  const listItemVisibilityClass = listItemVisibility
    ? 'pokemonList__listItem--visible'
    : 'pokemonList__listItem--hidden';

  return (
    <div className="pokemonListItem" onClick={toggleListItemVisibility}>
      <h1 className="pokemonListItem__text--label">{pokemonItemResponse.name}</h1>
      <figure className="pokemonListItem__figure">
        <img
          className="pokemonListItem__img--small"
          src={`${listItemResponse.sprite}`}
          alt={`${pokemonItemResponse.name}`}
        />
        <figcaption className="pokemonListItem__figcaption">
          {listItemResponse.types.map((type: any, index: number) => {
            return (
              <div className="pokemonListItem__figcaptionItem" key={`${index}-type`}>
                <p>{type}</p>
              </div>
            );
          })}
        </figcaption>
      </figure>
      <article className={listItemVisibilityClass}>
        { IsListItemRequestPending ? (
          <LoadingIndicator />
        ) : (
          <div>
            <p>Height: {listItemResponse.height} m</p>
            <p>Weight: {listItemResponse.weight} kg</p>
          </div>
        )}
      </article>
    </div>
  );
}


const mapStateToProps = (state: any) => {
  return {
    pokemonApiItem: state.pokemonApiItem,
    pokemonApp: state.pokemonApp,
  }
}

export default connect(mapStateToProps, { getPokemonItem, setCurrentItemUrl })(PokemonListItem)