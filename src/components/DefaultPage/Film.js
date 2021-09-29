import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  addFilm,
  removeFilm,
  getDetails,
  toggleDetail,
  addFilmToWishList,
} from '../../actions/filmsAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Film = (film) => {
  const { id, title, poster_path, vote_average, release_date } = film
  const dispatch = useDispatch()

  const [disabled, setDisabled] = useState(false)
  const [filledStar, setFilledStar] = useState(false)

  const { myLibrary } = useSelector((state) => state.library)
  const { wishList } = useSelector((state) => state.wishlist)

  useEffect(() => {
    checkFilmInLibrary()
  })

  const checkFilmInLibrary = () => {
    const checker = myLibrary.filter((item) => item.id === id)
    if (checker.length > 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const checkFilmInWishlist = (e) => {
    console.log(e.target)
    // if (e.target.classlist.contains('active')) {
    //   setFilledStar(false)
    // }

    const checker = wishList.filter((item) => item.id === id)
    console.log(checker)
    if (checker.length > 0) {
      setFilledStar(true)
    } else {
      setFilledStar(false)
    }
  }

  const addToLibraryHandler = () => {
    dispatch(addFilm({ ...film }))
    checkFilmInLibrary()
  }

  const addToWishListHandler = () => {
    dispatch(addFilmToWishList({ ...film }))
    checkFilmInWishlist()
  }

  const removeFilmFromLibrary = () => {
    dispatch(removeFilm(id))
    checkFilmInLibrary()
    checkFilmInLibrary()
  }

  const filmDetailHandler = () => {
    dispatch(getDetails(id))
    dispatch(toggleDetail())
  }

  return (
    <FilmWrapper>
      <img
        onClick={filmDetailHandler}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <IconWrapper
        className={filledStar ? 'active' : ''}
        disabled={filledStar ? 'disabled' : ''}
        onClick={addToWishListHandler}
      >
        <FontAwesomeIcon icon={faStar} />
      </IconWrapper>

      <FilmBottomContent>
        <div onClick={filmDetailHandler} className='title'>
          {title}
        </div>
        <FilmParameters>
          <div>Оценка: {vote_average} / 10</div> <div>{release_date}</div>
        </FilmParameters>

        <div>
          <button
            className={disabled ? '' : 'active'}
            disabled={disabled ? 'disabled' : ''}
            onClick={addToLibraryHandler}
          >
            Оценить
          </button>

          {disabled && (
            <button className='clear-film-btn' onClick={removeFilmFromLibrary}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
        </div>
      </FilmBottomContent>
    </FilmWrapper>
  )
}

const FilmWrapper = styled.article`
  position: relative;

  img {
    width: 100%;
    cursor: pointer;
    border-radius: 7px 7px 0px 0px;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  padding: 6px 10px;
  background: #fff;
  border-radius: 0px 5px 0px 5px;
  border-right: 1px solid #f1f1f1;
  border-top: 1px solid #f1f1f1;
  cursor: pointer;
  &:hover {
    background: #eaeaea;
    color: #c54da0;
  }

  &.active {
    background: red;
  }
`

const FilmBottomContent = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  background: #f1f1f1;
  padding: 15px;
  min-height: 180px;

  .title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    cursor: pointer;
  }

  button {
    border: none;
    border-radius: 4px;
    padding: 5px 15px;

    background: #ccc;
    color: #fff;
    margin-right: 5px;

    &.active {
      background: #c54da0;
    }

    &.clear-film-btn {
      background: #c54da0;
    }

    @media (max-width: 767px) {
      padding: 5px 10px;
      font-size: 14px;
      color: #585656;
    }
  }
`

const FilmParameters = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
`

export default Film
