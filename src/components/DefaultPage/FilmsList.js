import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFilms } from '../../actions/filmsAction'
import styled from 'styled-components'
import DetailFilm from '../Detail/DetailFilm'

import Film from './Film'

const FilmsList = () => {
  const dispatch = useDispatch()
  const { popularFilms, newFilms } = useSelector((state) => state.films)

  useEffect(() => {
    dispatch(loadFilms(28))
  }, [dispatch])

  const filterHandler = (e) => {
    dispatch(loadFilms(e.target.value))
  }

  return (
    <Content>
      <SortPanel>
        <p className='title'>Популярные сейчас:</p>
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

      <FilmsWrapper>
        <DetailFilm />
        {popularFilms.map((film) => {
          return <Film key={film.id} {...film} />
        })}
      </FilmsWrapper>
      <hr />
      <div>
        <p>Скоро выйдут</p>
        <FilmsWrapper>
          <DetailFilm />
          {newFilms.map((film) => {
            return <Film key={film.id} {...film} />
          })}
        </FilmsWrapper>
      </div>
    </Content>
  )
}

const Content = styled.section``

const FilmsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const SortPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;

  .title {
    font-size: 22px;
    line-height: 150%;
    margin-right: 30px;

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  select {
    padding: 5px 15px;
    border: none;
    border-radius: 10px;
    outline: none;
  }
`

export default FilmsList
