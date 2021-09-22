import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = () => {
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
    </div>
  )
}

const LinkWrapper = styled.div`
  display: inline-block;
  margin-right: 30px;
`

export default Nav
