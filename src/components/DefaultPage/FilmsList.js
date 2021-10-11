import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFilms, setShowModeList } from '../../actions/filmsAction'
import styled from 'styled-components'
import DetailFilm from '../Detail/DetailFilm'

import Film from './Film'
import FilmRow from './FilmRow'

const FilmsList = () => {
  const dispatch = useDispatch()
  const { popularFilms, newFilms } = useSelector((state) => state.films)
  const { showMode } = useSelector((state) => state.elements)

  useEffect(() => {
    dispatch(loadFilms(28))
  }, [dispatch])

  const filterHandler = (e) => {
    dispatch(loadFilms(e.target.value))
  }

  const showModeHandler = () => {
    dispatch(setShowModeList())
  }

  return (
    <section>
      <SortPanel>
        <p className='title'>Популярные сейчас:</p>
        <div onClick={showModeHandler}>Клик</div>
        <select onChange={filterHandler}>
          <option value='28'>Экшены</option>
          <option value='12'>Приключения</option>
          <option value='16'>Мультфильмы</option>
          <option value='35'>Комедии</option>
          <option value='18'>Драма</option>
          <option value='14'>Фэнтези</option>
          <option value='53'>Триллер</option>
        </select>
      </SortPanel>

      {showMode ? (
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
      )}

      <hr />
      <h2 className='section-title'>Скоро выйдут</h2>

      <FilmsWrapperRow>
        <DetailFilm />
        {newFilms.map((film) => (
          <FilmRow key={film.id} {...film} />
        ))}
      </FilmsWrapperRow>
    </section>
  )
}

const FilmsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const FilmsWrapperRow = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
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

  .title {
    font-size: 22px;
    line-height: 150%;
    margin-right: 30px;
    font-family: 'Russo One', sans-serif;

    @media (max-width: 767px) {
      font-size: 16px;
      margin-right: 0px;
    }
  }

  select {
    padding: 8px 16px;
    border: none;
    border-radius: 10px;
    outline: none;
    background: #f1f1f1;
    color: #0c0c0c;
    font-family: 'Russo One', sans-serif;

    @media (max-width: 767px) {
      padding: 5px 10px;
    }
  }
`

export default FilmsList
