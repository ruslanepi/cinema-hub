import React from 'react'
import styled from 'styled-components'
import profileLogo from '../images/logo-profile2.png'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <ProfileWrapper>
        <img src={profileLogo} alt='' />

        <div className='nickname'>Ruslan Epishin</div>
      </ProfileWrapper>

      <NavWrapper>
        <a href='/' className='button'>
          Жду выхода (6)
        </a>
        <a href='/' className='button'>
          Просмотренное (2)
        </a>
        <a href='/' className='button'>
          Ожидает отзыва (1)
        </a>
      </NavWrapper>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.aside`
  height: 100vh;
  padding: 25px 15px;

  background: #fbfbfb;
  border-radius: 5px;
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 26px;
  img {
    width: 60%;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .nickname {
    font-family: 'Russo One', sans-serif;
    font-size: 20px;
  }
`

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;

  .button {
    display: block;

    margin-bottom: 15px;
    text-align: left;

    font-family: 'Russo One', sans-serif;
    color: #565656;
    font-size: 14px;
    text-decoration: none;
    transition: margin-left ease 0.3s;
    &:hover {
      margin-left: 5px;
    }
  }
`

export default Sidebar
