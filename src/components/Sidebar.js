import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

const Sidebar = () => {
  const { myLibrary } = useSelector((state) => state.library)
  const filmsToWatch = myLibrary.filter((item) => item.status === 'want')
  const filmsToReview = myLibrary.filter((item) => item.status === 'watched')
  const filmsReviewed = myLibrary.filter((item) => item.status === 'reviewed')
  const filmsInLibrary = myLibrary.filter((item) => item.status !== 'reviewed')

  const [menuOpen, setMenuOpen] = useState(false)

  const activeSidebar = classNames({
    active: menuOpen,
  })

  const activeMenuHandler = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <SidebarWrapper className={activeSidebar}>
      <div className='sidebar-toggler' onClick={activeMenuHandler}>
        <span className='sidebar-toggler__title'> Библиотека</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className='sidebar-toggler__icon'
        />
      </div>

      <NavWrapper>
        <Link
          to='/profile/wishlist'
          className='menu-item'
          onClick={activeMenuHandler}
        >
          <span class='menu-item__title'> Хочу посмотреть</span>
          <span class='menu-item__counter'>{filmsToWatch.length}</span>
        </Link>
        <Link to='/profile' className='menu-item' onClick={activeMenuHandler}>
          <span class='menu-item__title'> Мои фильмы</span>
          <span class='menu-item__counter'>{filmsInLibrary.length}</span>
        </Link>
        <span class='watched-title'>Просмотренные:</span>
        <Link
          to='/profile/to-review'
          className='menu-item'
          onClick={activeMenuHandler}
        >
          <span class='menu-item__title'> Ожидает отзыва</span>
          <span class='menu-item__counter'>{filmsToReview.length}</span>
        </Link>
        <Link
          to='/profile/reviews'
          className='menu-item'
          onClick={activeMenuHandler}
        >
          <span class='menu-item__title'> С отзывом</span>
          <span class='menu-item__counter'>{filmsReviewed.length}</span>
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

  .sidebar-toggler {
    display: none;
  }

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    transition: all ease 0.3s;
    z-index: 100;

    &.active {
      transform: translateX(-14%);
      box-shadow: 0px 0px 67px 2px #626262;
      padding: 25px 25px 15px 75px;

      .sidebar-toggler {
        background: #fbfbfb;
        right: -81px;
        padding: 10px 15px 10px 15px;
        box-shadow: inset 0px -6px 8px -4px #cfcfcf;

        transition: transform ease 0.3s;
        border: 1px solid #ccc;
        border-top: none;
        &__icon {
          font-size: 14px;
          transform: rotate(180deg);
        }
      }
    }

    .sidebar-toggler {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      position: fixed;
      right: -74px;
      top: 35vh;

      padding: 25px 15px 10px 15px;
      background: #fff;
      border-radius: 0px 0px 10px 10px;

      transform: rotate(-90deg);
      transition: all ease 0.3s;

      line-height: 10px;

      box-shadow: 0px 0px 3px 0px #565656;
      &__title {
        display: block;
        margin-right: 10px;
        margin-bottom: 4px;
        font-size: 14px;
      }

      &__icon {
        font-size: 14px;
      }
    }
  }
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 26px;
  img {
    width: 30%;
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

  .menu-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    background: #f1f1f1;
    border-radius: 6px;

    margin-bottom: 15px;

    font-family: 'Russo One', sans-serif;
    color: #565656;
    font-size: 16px;
    text-decoration: none;
    transition: margin-left ease 0.3s;

    &:hover {
      margin-left: 5px;
    }

    .menu-item__title {
      padding: 12px 16px;
    }

    .menu-item__counter {
      padding: 12px 0px;
      background-color: #ebebeb;
      width: 34px;
      text-align: center;
      border-radius: 0px 6px 6px 0px;
    }
  }

  .watched-title {
    margin: 20px 0 15px 0px;
  }
`

export default Sidebar
