import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFilms } from '../actions/filmsAction'
import styled from 'styled-components'

import Film from './Film'

const FilmsList = () => {
  const dispatch = useDispatch()
  const { popularFilms, newFilms } = useSelector((state) => state.films)
  const [currentFilter, setCurrentFilter] = useState(28)

  useEffect(() => {
    dispatch(loadFilms(currentFilter))
  }, [currentFilter])

  const filterHandler = (e) => {
    setCurrentFilter(e.target.value)
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
      <div>
        <FilmsWrapper>
          {popularFilms.map((film) => {
            console.log(film)
            return <Film key={film.id} {...film} />
          })}
        </FilmsWrapper>
      </div>

      <div>
        <p>Топовые</p>
        {newFilms.map((film) => {
          return <div key={film.id}>{film.title}</div>
        })}
      </div>
    </Content>
  )
}

const Content = styled.article`
  padding: 40px 0px;
`

const FilmsWrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const SortPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0px 15px;
  margin-bottom: 20px;

  .title {
    font-size: 22px;
    line-height: 150%;
    margin-right: 30px;
  }

  select {
    padding: 5px 15px;
    border: none;
    border-radius: 10px;
    outline: none;
  }
`

export default FilmsList
