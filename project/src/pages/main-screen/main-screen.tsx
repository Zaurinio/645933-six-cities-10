import { useState, useEffect, useCallback } from 'react';
import Places from '../../components/places/places';
import Map from '../../components/map/map';
import Locations from '../../components/locations/locations';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks/index';
import { fetchPlaceAction } from '../../store/api-actions';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppDispatch } from '../../hooks/index';
import { sortPlacesByPriceLowToHigh, sortPlacesByPriceHighToLow, sortPlacesByRating } from '../../utils';
import { SortType } from '../../const';
import { getPlaces, getMainPageReadyStatus, getSortType, getCity } from '../../store/places-data/selectors';


function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const isMainPageReady = useAppSelector(getMainPageReadyStatus);


  useEffect(() => {
    dispatch(fetchPlaceAction());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const sortType = useAppSelector(getSortType);

  const [placeId, setPlaceId] = useState<number | null>(null);
  const activeCityName = useAppSelector(getCity);
  const places = useAppSelector(getPlaces);

  const placesByCities = places.filter((place) => place.city.name === activeCityName);

  let sortedPlacesByCities = placesByCities;

  switch (sortType) {
    case SortType.priceLowToHigh:
      sortedPlacesByCities.sort(sortPlacesByPriceLowToHigh);
      break;
    case SortType.priceHighToLow:
      sortedPlacesByCities.sort(sortPlacesByPriceHighToLow);
      break;
    case SortType.rating:
      sortedPlacesByCities.sort(sortPlacesByRating);
      break;
    case SortType.default:
      sortedPlacesByCities = placesByCities;
      break;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const checkMouseOver = useCallback((value: number | null) => setPlaceId(value), []);

  if (!isMainPageReady) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <Locations activeCity={activeCityName} />
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Places
              places={sortedPlacesByCities}
              onCardMouseOver={checkMouseOver}
              activeCity={activeCityName}
            />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map places={placesByCities} placeId={placeId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
