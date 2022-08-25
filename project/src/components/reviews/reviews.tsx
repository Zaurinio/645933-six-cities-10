import { useAppSelector } from '../../hooks/index';
import { formatDateDisplayValue, formatDateAttribute, sortReviewsByDate } from '../../utils';
import { getComments } from '../../store/comments-data/selectors';

function ReviewList(): JSX.Element {

  const comments = useAppSelector(getComments);

  const sortedComments = [...comments];
  sortedComments.sort(sortReviewsByDate);

  const topComments = sortedComments.slice(0, 10);

  return (
    <ul className="reviews__list">
      {
        topComments.map((comment) => (
          < li className="reviews__item" key={comment.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {comment.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: comment.rating / 5 * 100 }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment.comment}
              </p>
              <time className="reviews__time" dateTime={formatDateAttribute(comment.date)}>{formatDateDisplayValue(comment.date)}</time>
            </div>
          </li >
        ))
      }
    </ul>
  );

}

export default ReviewList;
