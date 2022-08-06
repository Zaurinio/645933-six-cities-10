import { Place } from '../../types/places';
import PlaceCard from '../place-card/place-card';


type PlacesProps = {
  places: Place[];
  onCardMouseOver: (id: number | null) => void;
  activeCity: string
}

function Places(props: PlacesProps): JSX.Element {
  const { places, onCardMouseOver, activeCity } = props;
  const placesQuantity = places.length;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesQuantity} places to stay in {activeCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {places.map((place: Place) => (
          <PlaceCard
            place={place}
            onCardMouseOver={onCardMouseOver}
            key={place.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Places;
