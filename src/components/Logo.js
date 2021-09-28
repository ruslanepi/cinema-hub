import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../images/logo-profile3.png'

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to='/'>
        <LogoImg>
          <img src={logo} alt='' />
          <div class='logo'>Cinema-Hub</div>
        </LogoImg>
      </Link>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  a {
    display: block;
    text-decoration: none;
  }
`

const LogoImg = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 55px;
    margin-right: 20px;
  }

  .logo {
    font-family: 'Russo One', sans-serif;
    font-size: 24px;
    color: #c54da0;
  }
`

export default Logo
