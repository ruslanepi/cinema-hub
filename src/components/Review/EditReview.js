import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../redux/actions/filmsAction'
import { addReview } from '../../redux/actions/filmsAction'

const EditReview = () => {
  const { id } = useParams()
  const { title, vote_average, overview, tagline, budget } = useSelector(
    (state) => state.details.filmDetails
  )

  const [isEdited, setIsEdited] = useState(false)
  const { backdrops } = useSelector((state) => state.details.filmScreens)
  const { isLoading } = useSelector((state) => state.details)

  const { myLibrary } = useSelector((state) => state.library)
  const currentFilm = myLibrary.find((item) => item.id == id)

  const dispatch = useDispatch()
  const textarea = useRef(null)
  const voteRating = useRef(null)

  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch, id])

  const addReviewHandler = (e) => {
    e.preventDefault()

    const review = {
      id: Number(id),
      review: textarea.current.value,
      voteRating: voteRating.current.value,
    }
    dispatch(addReview(review))
  }

  const addReviewHandlerWithCleaner = (e) => {
    e.preventDefault()

    const review = {
      id: Number(id),
      review: textarea.current.value,
      voteRating: voteRating.current.value,
    }
    dispatch(addReview(review))
    setIsEdited(true)
  }

  return (
    <>
      {!isLoading && (
        <FilmWrapper>
          <div className='title'>{title}</div>
          <span>{tagline}</span>
          <div>Бюджет {budget}</div>
          <div>Оценка: {vote_average} / 10</div>
          <p className='content'>{overview}</p>

          <form
            className='review-form'
            onSubmit={(e) => addReviewHandlerWithCleaner(e)}
          >
            <textarea
              ref={textarea}
              rows='8'
              required='required'
              value={currentFilm.review ? currentFilm.review : ''}
              onChange={addReviewHandler}
            ></textarea>
            <ButtonsWrapper>
              <div className='rating-wrapper'>
                <span className='rating'>Моя оценка</span>
                <input
                  type='number'
                  ref={voteRating}
                  required='required'
                  min='1'
                  max='10'
                  placeholder={
                    currentFilm.voteRating ? currentFilm.voteRating : ''
                  }
                />
              </div>
              <button
                className={isEdited ? 'disable' : ''}
                onClick={(e) => addReviewHandlerWithCleaner(e)}
              >
                Редактировать
              </button>
            </ButtonsWrapper>
          </form>

          <GalleryWrapper>
            {backdrops.map((image, index) => (
              <img
                src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                id={index}
                key={image.file_path}
              ></img>
            ))}
          </GalleryWrapper>
        </FilmWrapper>
      )}
    </>
  )
}

const FilmWrapper = styled.div`
  width: 100%;

  .review-form {
    textarea {
      width: 100%;
      padding: 15px;
      background: #f1f1f1;
      border-radius: 15px;
      border: none;
      margin: 15px 0px 5px 0px;
    }

    button {
      padding: 4px 18px 6px 18px;
      border: none;
      background-color: #015595;
      border-radius: 5px;
      font-size: 18px;
      line-height: 30px;
      font-weight: normal;
      color: #fff;

      &.disable {
        background: #ccc;
        pointer-events: none;
        cursor: auto;
      }
      @media (max-width: 768px) {
        padding: 6px 16px;
        font-size: 14px;
      }
    }
  }

  .content {
    margin-bottom: 15px;
  }
`
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
  .rating-wrapper {
    padding: 5px 20px;
    margin-right: 30px;

    border-radius: 5px;

    @media (max-width: 768px) {
      padding: 3px 8px;
      font-size: 14px;
      margin-right: 0px;
    }
  }

  .rating {
    margin-right: 10px;
    font-family: 'Russo One', sans-serif;
  }
  input {
    padding: 4px 11px;
    width: 67px;

    background-color: #f1f1f1;
    border-radius: 5px;
    border: none;
    font-size: 18px;
  }
`

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  img {
    margin-bottom: 10px;
  }
`

export default EditReview
