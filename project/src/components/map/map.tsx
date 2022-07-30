import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Place } from '../../types/places';
import { City } from '../../types/city';

type MapProps = {
  places: Place[];
  city: City;
  placeId: number | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});


function Map(props: MapProps): JSX.Element {
  const { city, places, placeId } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    if (map) {
      places.forEach((place) => {
        const marker = new Marker({
          lat: place.coordinations.lat,
          lng: place.coordinations.lng,
        });

        marker
          .setIcon(place.id === placeId ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, placeId, places]);

  return (
    <div
      style={{ height: '100%', width: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
