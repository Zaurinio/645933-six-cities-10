import { MouseEvent, useState } from 'react';
import { SortType } from '../../const';
import { useAppDispatch } from '../../hooks/index';
import { changeSorting } from '../../store/places-data/places-data';

function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();

  const [sortMenuState, setSortMenuState] = useState<boolean>(false);

  const [sortName, setSortName] = useState<string>('Popular');

  const toggleSortMenu = () => setSortMenuState(!sortMenuState);

  const handleSortType = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    toggleSortMenu();

    switch (evt.currentTarget.dataset.sortType) {
      case SortType.priceLowToHigh:
        dispatch(changeSorting(SortType.priceLowToHigh));
        setSortName('Price: low to high');
        break;
      case SortType.priceHighToLow:
        dispatch(changeSorting(SortType.priceHighToLow));
        setSortName('Price: high to low');
        break;
      case SortType.rating:
        dispatch(changeSorting(SortType.rating));
        setSortName('Top rated first');
        break;
      case SortType.default:
        dispatch(changeSorting(SortType.default));
        setSortName('Popular');
        break;
    }
  };


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={toggleSortMenu} className="places__sorting-type" tabIndex={0}>
        {sortName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options${sortMenuState ? '--opened' : '--closed'}`}>
        <li onClick={handleSortType} data-sort-type='default' className={`places__option ${sortName === 'Popular' ? 'places__option--active' : ''}`} tabIndex={0}>Popular</li>
        <li onClick={handleSortType} data-sort-type='price-low-to-high' className={`places__option ${sortName === 'Price: low to high' ? 'places__option--active' : ''}`} tabIndex={0}>Price: low to high</li>
        <li onClick={handleSortType} data-sort-type='price-high-to-low' className={`places__option ${sortName === 'Price: high to low' ? 'places__option--active' : ''}`} tabIndex={0}>Price: high to low</li>
        <li onClick={handleSortType} data-sort-type='rating' className={`places__option ${sortName === 'Top rated first' ? 'places__option--active' : ''}`} tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}

export default Sorting;
