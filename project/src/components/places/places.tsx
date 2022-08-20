import { Place } from '../../types/places';
import PlaceCard from '../place-card/place-card';
import { PlaceType } from '../../const';
import Sorting from '../sorting/sorting';
import { memo } from 'react';


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
      <Sorting />
      <div className="cities__places-list places__list tabs__content">
        {places.map((place: Place) => (
          <PlaceCard
            place={place}
            placeType={PlaceType.cities}
            onCardMouseOver={onCardMouseOver}
            key={place.id}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(Places, (prevProps, nextProps) => prevProps.activeCity === nextProps.activeCity);
