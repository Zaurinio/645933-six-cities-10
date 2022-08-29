
import { Place } from '../../types/places';
import { Link } from 'react-router-dom';
import { PlaceType, AuthorizationStatus, AppRoute } from '../../const';
import { memo } from 'react';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';

type PlaceCardProps = {
  place: Place;
  placeType?: PlaceType,
  onCardMouseOver?: (id: number | null) => void;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { place, placeType, onCardMouseOver } = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const imageWidth = placeType === PlaceType.favorites ? 150 : 260;
  const imageHeight = placeType === PlaceType.favorites ? 110 : 200;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const checkMouseOver = () => {
    if (onCardMouseOver) {
      onCardMouseOver(place.id);
    }
  };

  const checkMouseLeave = () => {
    if (onCardMouseOver) {
      onCardMouseOver(null);
    }
  };

  const handleFavoriteStatusChange = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth || authorizationStatus === AuthorizationStatus.Unknown) {
      navigate(AppRoute.Login);
    } else {
      dispatch(changeFavoriteStatusAction({ placeId: place.id, status: !place.isFavorite ? 1 : 0 }));
    }
  };

  return (
    <article className={`${placeType}__card place-card`} onMouseOver={checkMouseOver} onMouseLeave={checkMouseLeave}>
      {(placeType === PlaceType.cities && place.isPremium) ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className={`${placeType}__image-wrapper place-card__image-wrapper`}>
        <a href={`/room/${place.id}`}>
          <img className="place-card__image" src={place.previewImage} width={imageWidth} height={imageHeight} alt="Place" />
        </a>
      </div>
      <div className={`${placeType}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={handleFavoriteStatusChange} className={`place-card__bookmark-button${place.isFavorite ? '--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/room/${place.id}`}>{place.title}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article >
  );
}

export default memo(PlaceCard);

