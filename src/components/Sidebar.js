import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import profileLogo from '../images/logo-profile2.png'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const { myLibrary } = useSelector((state) => state.library)
  const { wishList } = useSelector((state) => state.wishlist)

  return (
    <SidebarWrapper>
      <ProfileWrapper>
        <img src={profileLogo} alt='logo' />

        <div className='nickname'>Ruslan Epishin</div>
      </ProfileWrapper>

      <NavWrapper>
        <Link to='/profile/wishlist' className='button'>
          Жду выхода ({wishList.length})
        </Link>
        <Link to='/profile' className='button'>
          Просмотренное ({myLibrary.length})
        </Link>
        <Link to='/2ishlist' className='button'>
          Ожидает отзыва (1)
        </Link>
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
