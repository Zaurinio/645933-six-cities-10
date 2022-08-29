import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { postCommentAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { getCommentFormSubmitStatus } from '../../store/comments-data/selectors';

type CommentFormProps = {
  placeId: number;
}

function CommentForm({ placeId }: CommentFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const commentFormSubmitStatus = useAppSelector(getCommentFormSubmitStatus);

  const placeRaiting = [
    { rating: '5', value: 'perfect' },
    { rating: '4', value: 'good' },
    { rating: '3', value: 'not bad' },
    { rating: '2', value: 'badly' },
    { rating: '1', value: 'terribly' },
  ];

  const [formData, setData] = useState({
    rating: null,
    comment: '',
  });

  const [disableStatus, setDisableStatus] = useState(false);

  const handleInputRating = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setData({ ...formData, [name]: Number(value) });
  };

  const handleTextareaText = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setData({ ...formData, comment: value });
  };

  const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setDisableStatus(true);
    await dispatch(postCommentAction({ formData, placeId }));
    setData({ ...formData, rating: null, comment: '' });
    if (formRef.current !== null) {
      formRef.current.reset();
    }
  };

  useEffect(() => {
    !commentFormSubmitStatus ? setDisableStatus(false) : setDisableStatus(true);
  }, [commentFormSubmitStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  const commentsLengthCheck = formData.comment.length >= 50 && formData.comment.length <= 300;

  const submitButtonDisableStatus = !(formData.rating && formData.comment && commentsLengthCheck && !disableStatus);

  return (
    <form ref={formRef} onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          placeRaiting.map((item, index) => (
            <React.Fragment key={`${item.value}-key`}>
              < input
                className="form__rating-input visually-hidden"
                name="rating"
                checked={Number(item.rating) === formData.rating}
                value={item.rating}
                id={`${item.rating}-stars`}
                type="radio"
                onChange={handleInputRating}
                disabled={disableStatus}
              />
              <label
                htmlFor={`${item.rating}-stars`}
                className="reviews__rating-label form__rating-label"
                title={String(placeRaiting.length - index)}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextareaText}
        disabled={disableStatus}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={submitButtonDisableStatus}>Submit</button>
      </div>
    </form >
  );
}
export default CommentForm;
