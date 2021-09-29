import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LibraryFilm from './LibraryFilm'
import LibraryDetailFilm from './Library/LibraryDetailFilm'

const Profile = () => {
  const { myLibrary } = useSelector((state) => state.library)
  const { wishList } = useSelector((state) => state.wishlist)

  return (
    <ProfilePage>
      <Sidebar />
      <Switch>
        <Route path='/profile/wishlist'>
          <ProfileContent>
            {wishList && (
              <FilmsWrapper>
                {wishList.map((film) => {
                  return <LibraryFilm key={film.id} {...film} />
                })}
              </FilmsWrapper>
            )}

            {wishList.length === 0 && (
              <div>1вы не добавили ни одного фильма в список</div>
            )}
          </ProfileContent>
        </Route>

        <Route path='/profile'>
          <ProfileContent>
            {myLibrary && (
              <FilmsWrapper>
                {myLibrary.map((film) => {
                  return <LibraryFilm key={film.id} {...film} />
                })}
              </FilmsWrapper>
            )}

            {myLibrary.length === 0 && (
              <div>вы не добавили ни одного фильма в список</div>
            )}
          </ProfileContent>
        </Route>

        <Route path='/profile/:id'>
          <LibraryDetailFilm />
        </Route>
      </Switch>
    </ProfilePage>
  )
}

const ProfilePage = styled.section`
  display: grid;
  grid-template-columns: 2fr 7fr;
  gap: 15px;
  background: #fff;

  a {
    text-decoration: none;
  }
`

const ProfileContent = styled.section`
  padding: 15px 25px;

  background: #fbfbfb;
  border-radius: 5px;
`

const FilmsWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`

export default Profile
