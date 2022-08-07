import { useState, useEffect } from 'react';
import Places from '../../components/places/places';
import Map from '../../components/map/map';
import Locations from '../../components/locations/locations';
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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
