import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { places } from './mocks/places';
import { CITY } from './mocks/city';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      places={places}
      city={CITY}
    />
  </React.StrictMode>,
);
