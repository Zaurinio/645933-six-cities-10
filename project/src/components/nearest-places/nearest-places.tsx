import { Place } from '../../types/places';
import PlaceCard from '../place-card/place-card';
import { PlaceType } from '../../const';

type NearestPlacesProps = {
  nearestPlaces: Place[];
}

function NearestPlaces({ nearestPlaces }: NearestPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          nearestPlaces.map((nearestPlace: Place) => (
            <PlaceCard
              place={nearestPlace}
              placeType={PlaceType.nearPlaces}
              key={nearestPlace.id}
            />
          ))
        }
      </div>
    </section>
  );
}

export default NearestPlaces;
