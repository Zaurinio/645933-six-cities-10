import { Place, Places } from '../../types/places';
import PlaceCard from '../place-card/place-card';

type FavoritesProps = {
  favorites: Places,
}

function Favorites({ favorites }: FavoritesProps): JSX.Element {

  /*eslint-disable*/
  console.log(favorites);

  return (
    <ul className="favorites__list">
      {favorites.map((place: Place) => (
        <li className="favorites__locations-items" key={place.id}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>{place.city.name}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {<PlaceCard
              place={place}
            />}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Favorites;
