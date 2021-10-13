import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFilms, setShowMode, setShowList } from '../../actions/filmsAction'
import styled from 'styled-components'
import DetailFilm from '../Detail/DetailFilm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faStream } from '@fortawesome/free-solid-svg-icons'

import Film from './Film'
import FilmRow from './FilmRow'

const FilmsList = () => {
  const dispatch = useDispatch()
  const { popularFilms, newFilms } = useSelector((state) => state.films)
  const { showMode, showList } = useSelector((state) => state.elements)

  useEffect(() => {
    dispatch(loadFilms(28))
  }, [dispatch])

  const filterHandler = (e) => {
    dispatch(loadFilms(e.target.value))
  }

  const showModeHandler = (e) => {
    const target = e.currentTarget.className
    if (target === 'cells') {
      dispatch(setShowMode('cells'))
    } else {
      dispatch(setShowMode('rows'))
    }
  }

  const showListHandler = (e) => {
    const target = e.currentTarget.classList
    console.log(target)
    target.toggle('active')
    dispatch(setShowList())
  }

  return (
    <section>
      <SortPanel>
        <div
          className={`${
            showList ? 'active category-toggler' : 'category-toggler'
          }`}
          onClick={showListHandler}
        >
          <span className='category-toggler__item'>Популярные</span>
          <span className='category-toggler__item'>Скоро выйдут</span>
        </div>

        <div className='right-side'>
          <div className='showmode-toggler'>
            <div
              className={showMode === 'cells' ? 'active cells' : 'cells'}
              onClick={showModeHandler}
            >
              <FontAwesomeIcon icon={faBorderAll} />
            </div>
            <div
              className={showMode === 'rows' ? 'active rows' : 'rows'}
              onClick={showModeHandler}
            >
              <FontAwesomeIcon icon={faStream} />
            </div>
          </div>

          <select onChange={filterHandler}>
            <option value=''>Все</option>
            <option value='28'>Экшены</option>
            <option value='12'>Приключения</option>
            <option value='16'>Мультфильмы</option>
            <option value='35'>Комедии</option>
            <option value='18'>Драма</option>
            <option value='14'>Фэнтези</option>
            <option value='53'>Триллер</option>
          </select>
        </div>
      </SortPanel>

      {!showList &&
        (showMode === 'cells' ? (
          <FilmsWrapper>
            <DetailFilm />

            {popularFilms.map((film) => (
              <Film key={film.id} {...film} />
            ))}
          </FilmsWrapper>
        ) : (
          <FilmsWrapperRow>
            <DetailFilm />
            {popularFilms.map((film) => (
              <FilmRow key={film.id} {...film} />
            ))}
          </FilmsWrapperRow>
        ))}

      {showList &&
        (showMode === 'cells' ? (
          <FilmsWrapper>
            <DetailFilm />
            {newFilms.map((film) => (
              <Film key={film.id} {...film} />
            ))}
          </FilmsWrapper>
        ) : (
          <FilmsWrapperRow>
            <DetailFilm />
            {newFilms.map((film) => (
              <FilmRow key={film.id} {...film} />
            ))}
          </FilmsWrapperRow>
        ))}
    </section>
  )
}

const FilmsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const FilmsWrapperRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;

  h2 {
    margin-bottom: 15px;
    display: block;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SortPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    margin-bottom: 10px;
  }

  .category-toggler {
    border-radius: 12px;
    padding: 12px;
    position: relative;
    box-shadow: inset 0px 0px 4px 0px #ccc;
    transition: all ease 0.3s;
    cursor: pointer;

    @media (max-width: 767px) {
      margin-bottom: 0px;
      display: flex;
      justify-content: space-between;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 10px;
      left: 10px;
      width: 110px;
      height: 29px;
      background: #f1f1f1;
      border-radius: 5px;
      transition: all ease 0.3s;
      box-shadow: 0px 0px 3px #c3c3c3;
    }
    &.active::before {
      transition: all ease 0.3s;
      left: 130px;

      @media (max-width: 767px) {
        left: 130px;
      }
    }

    &__item {
      font-size: 14px;

      padding: 2px 12px;
      border-radius: 19px;

      &:first-child {
        margin-right: 10px;
      }
    }
  }

  .right-side {
    display: flex;

    @media (max-width: 767px) {
      width: 100%;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    .showmode-toggler {
      display: flex;
      margin-right: 15px;

      .cells,
      .rows {
        padding: 6px 12px;

        border-radius: 8px;
        background: #f1f1f1;

        cursor: pointer;
        &:first-child {
          margin-right: 5px;
        }
        &.active {
          background: #01559814;
          color: #015595;
        }
      }
    }

    select {
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      outline: none;
      background: #f1f1f1;
      color: #0c0c0c;
      font-family: 'Russo One', sans-serif;

      @media (max-width: 767px) {
        padding: 5px 10px;
      }
    }
  }
`

export default FilmsList
