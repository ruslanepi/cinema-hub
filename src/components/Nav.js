import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { searchFilm } from '../actions/filmsAction'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router'

const Nav = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')

  const searchFormHandler = (e) => {
    e.preventDefault()
    dispatch(searchFilm(searchValue))
    history.push(`/search/${searchValue}`)
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
        <form onSubmit={(e) => searchFormHandler(e)}>
          <input
            type='text'
            placeholder='Введите название'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </LinkWrapper>
    </div>
  )
}

const LinkWrapper = styled.div`
  display: inline-block;
  margin-right: 30px;

  &:last-child {
    margin-right: 0px;
  }

  a {
    font-family: 'Russo One', sans-serif;
    text-decoration: none;
    color: #464642;
  }

  input {
    border-radius: 10px;
    border: 1px solid #f3f3f3;
    background: #fff;
    padding: 5px 10px 5px 20px;
    font-size: 16px;
    letter-spacing: 0.5px;
    &:active,
    &:focus {
      outline: none;
    }
  }
`

export default Nav
