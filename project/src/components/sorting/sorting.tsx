import { MouseEvent, useState } from 'react';
import { SortType } from '../../const';
import { useAppDispatch } from '../../hooks/index';
import { changeSorting } from '../../store/places-data/places-data';

function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();

  const [sortMenuState, setSortMenuState] = useState<boolean>(false);

  const toggleSortMenu = () => setSortMenuState(!sortMenuState);

  const handleSortType = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    toggleSortMenu();

    switch (evt.currentTarget.dataset.sortType) {
      case SortType.priceLowToHigh:
        dispatch(changeSorting(SortType.priceLowToHigh));
        break;
      case SortType.priceHighToLow:
        dispatch(changeSorting(SortType.priceHighToLow));
        break;
      case SortType.rating:
        dispatch(changeSorting(SortType.rating));
        break;
      case SortType.default:
        dispatch(changeSorting(SortType.default));
        break;
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={toggleSortMenu} className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options${sortMenuState ? '--opened' : '--closed'}`}>
        <li onClick={handleSortType} data-sort-type='default' className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li onClick={handleSortType} data-sort-type='price-low-to-high' className="places__option" tabIndex={0}>Price: low to high</li>
        <li onClick={handleSortType} data-sort-type='price-high-to-low' className="places__option" tabIndex={0}>Price: high to low</li>
        <li onClick={handleSortType} data-sort-type='rating' className="places__option" tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}

export default Sorting;
