import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { searchFilm } from '../actions/filmsAction'
import { useDispatch } from 'react-redux'

const Nav = () => {
  const dispatch = useDispatch()
  const searchFormHandler = (e) => {
    dispatch(searchFilm(e.target.value))
    e.preventDefault()
  }

  return (
    <div>
      <LinkWrapper>
        <Link to='/'>Главная</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to='/profile'>Личный кабинет</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to='/actors'>Кино в лицах</Link>
      </LinkWrapper>

      <LinkWrapper>
        <p> Поиск фильма</p>
        <div>
          <form onSubmit={searchFormHandler}>
            <input type='text' placeholder='поиск фильма по названию' />
          </form>
        </div>
      </LinkWrapper>
    </div>
  )
}

const LinkWrapper = styled.div`
  display: inline-block;
  margin-right: 30px;
`

export default Nav
