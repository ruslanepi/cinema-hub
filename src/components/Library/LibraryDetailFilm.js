import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../actions/filmsAction'
import { addReview } from '../../actions/filmsAction'

const LibraryDetailFilm = () => {
  const { id } = useParams()
  const { title, vote_average, overview, tagline, budget } = useSelector(
    (state) => state.details.filmDetails
  )
  const { backdrops } = useSelector((state) => state.details.filmScreens)
  const { isLoading } = useSelector((state) => state.details)

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
    textarea.current.value = ''
    voteRating.current.value = ''
  }

  return (
    <>
      {!isLoading && (
        <FilmWrapper>
          <div className='title'>{title}</div>
          <span>{tagline}</span>
          <div>Бюджет {budget}</div>
          <div>Оценка: {vote_average} / 10</div>
          <p>{overview}</p>
          <form className='review-form'>
            <textarea ref={textarea} rows='8' required='required'></textarea>
            <ButtonsWrapper>
              <div>
                <span className='rating'>Моя оценка</span>
                <input type='number' ref={voteRating} required='required' />
              </div>
              <button onClick={(e) => addReviewHandler(e)}>
                Оставить отзыв
              </button>
            </ButtonsWrapper>
          </form>
          <GalleryWrapper>
            {backdrops.map((image, index) => {
              return (
                <img
                  src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                  id={index}
                  key={image.file_path}
                ></img>
              )
            })}
          </GalleryWrapper>
        </FilmWrapper>
      )}
    </>
  )
}

const FilmWrapper = styled.div`
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
      padding: 7px 18px;

      border: none;
      background-color: #689c96;
      border-radius: 5px;

      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }
  }
`
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;
  div {
    padding: 5px 20px;
    margin-right: 30px;

    border-radius: 5px;
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

export default LibraryDetailFilm
