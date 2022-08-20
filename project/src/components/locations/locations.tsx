import { Cities } from '../../const';
import { Link } from 'react-router-dom';
// import { selectCity } from '../../store/action';
import { useAppDispatch } from '../../hooks/index';
import { changeCity } from '../../store/places-data/places-data';

type LocationsProps = {
  activeCity: string;
}

function Locations({ activeCity }: LocationsProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCitySelect = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(Cities).map((city) => (
          <li key={city} className="locations__item">
            <Link onClick={() => handleCitySelect(city)} className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : null}`} to="/">
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
