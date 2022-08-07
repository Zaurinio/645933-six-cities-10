import { Icon, Marker, LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Place } from '../../types/places';

type MapProps = {
  places: Place[];
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


function Map({ places, placeId }: MapProps): JSX.Element {

  const city = places[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    if (map) {
      const markersLayer = new LayerGroup();
      markersLayer.addTo(map);

      places.forEach((place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });

        marker
          .setIcon(place.id === placeId ? currentCustomIcon : defaultCustomIcon)
          .addTo(markersLayer);
      });
      return () => {
        markersLayer.remove();
      };
    }
  }, [map, placeId, places]);

  useEffect(() => {
    if (map) {
      map.flyTo([city.location.latitude, city.location.longitude], city.location.zoom, {
        animate: true,
        duration: 0.9
      });
    }
  }, [map, city]);

  return (
    <div
      style={{ height: '100%', width: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
