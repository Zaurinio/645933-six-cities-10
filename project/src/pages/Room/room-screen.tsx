import Header from '../../components/header/header';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../../components/comment-form/comment-form';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import ReviewList from '../../components/reviews/reviews';
import { fetchCommentAction, fetchPlaceByIdAction, fetchNearestPlaceAction, changeFavoriteStatusAction } from '../../store/api-actions';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import Map from '../../components/map/map';
import NearestPlaces from '../../components/nearest-places/nearest-places';
import { AuthorizationStatus } from '../../const';
import { getPlaceById, getNearestPlaces } from '../../store/places-data/selectors';
import { getComments } from '../../store/comments-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Places } from '../../types/places';

function Room(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    if (params) {
      dispatch(fetchPlaceByIdAction(Number(params.id)));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const placeById = useAppSelector(getPlaceById);

  useEffect(() => {
    if (placeById.id) {
      dispatch(fetchCommentAction(placeById.id));
      dispatch(fetchNearestPlaceAction(placeById.id));
    }
  }, [placeById]); // eslint-disable-line react-hooks/exhaustive-deps

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const comments = useAppSelector(getComments);
  const nearestPlaces = useAppSelector(getNearestPlaces);

  let allPlacesList: Places = [];

  if (placeById.id) {
    allPlacesList = [...nearestPlaces, placeById] as Places;
  }

  const handleFavoriteStatus = () => {
    dispatch(changeFavoriteStatusAction({ placeId: placeById.id, status: !placeById.isFavorite ? 1 : 0 }));
  };

  if (!(nearestPlaces.length > 0 && comments.length > 0)) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                placeById.images.map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {placeById.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button onClick={handleFavoriteStatus} className="property__bookmark-button property__bookmark-button--active button" type="button">
                  <svg className={`property__bookmark-icon ${placeById.isFavorite ? 'place-card__bookmark-icon' : ''}`} width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${placeById ? placeById.rating / 5 * 100 : 0}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{placeById.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {placeById.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {placeById.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  {placeById.maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{placeById.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {placeById.goods.map((item) => (
                    <li key={item} className="property__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={placeById.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {placeById.host.name}
                  </span>
                  {placeById.host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {placeById.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ReviewList />
                {
                  authorizationStatus === AuthorizationStatus.Auth && <CommentForm placeId={Number(params.id)} />
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map places={allPlacesList} placeId={placeById ? placeById.id : null} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <NearestPlaces nearestPlaces={nearestPlaces} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
