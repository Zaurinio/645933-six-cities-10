import Header from '../../components/header/header';
import Favorites from '../../components/favorites/favorites';
import { fetchFavoriteAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { getFavorites } from '../../store/places-data/selectors';
import { useEffect } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';

function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoritePlaces = useAppSelector(getFavorites);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (favoritePlaces.length === 0) {
      dispatch(fetchFavoriteAction());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    }
  }, [authorizationStatus]);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {favoritePlaces.length === 0 ?
              (
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              ) : <Favorites favorites={favoritePlaces} />}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
