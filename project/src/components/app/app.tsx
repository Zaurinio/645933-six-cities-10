import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import Room from '../../pages/Room/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Place } from '../../types/places';

type AppScreenProps = {
  places: Place[];
}

function App({ places }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route
            index
            element={<MainScreen places={places} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesScreen places={places} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Room}
            element={<Room places={places} />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
