import { Places } from '../../types/places';
import PlaceCard from '../place-card/place-card';
import { PlaceType } from '../../const';

type FavoritesProps = {
  favorites: Places,
}

function Favorites({ favorites }: FavoritesProps): JSX.Element {

  const favoriteCities: string[] = [];

  for (const obj of favorites) {
    if (!favoriteCities.includes(obj.city.name)) {
      favoriteCities.push(obj.city.name);
    }
  }

  return (
    <ul className="favorites__list">
      {
        favoriteCities.map((city) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="/">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {
                favorites.map((place) => place.city.name === city ? < PlaceCard place={place} placeType={PlaceType.favorites} key={city + place.id} /> : '')
              }
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default Favorites;
