import { useState, useEffect } from 'react';
import Places from '../../components/places/places';
import Map from '../../components/map/map';
import Locations from '../../components/locations/locations';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks/index';
import { fetchPlaceAction } from '../../store/api-actions';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppDispatch } from '../../hooks/index';


function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isMainPageReady } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPlaceAction());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [placeId, setPlaceId] = useState<number | null>(null);
  const activeCityName = useAppSelector((state) => state.city);
  const places = useAppSelector((state) => state.places);
  const placesByCities = places.filter((place) => place.city.name === activeCityName);

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
              places={placesByCities}
              onCardMouseOver={setPlaceId}
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
