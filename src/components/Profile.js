import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LibraryFilm from './Library/LibraryFilm'
import LibraryDetailFilm from './Library/LibraryDetailFilm'
import ReviewedFilm from './Review/ReviewedFilm'
import EditReview from './Review/EditReview'

const Profile = () => {
  const { myLibrary } = useSelector((state) => state.library)
  const filmsToWatch = myLibrary.filter((item) => item.status === 'want')
  const filmsToReview = myLibrary.filter((item) => item.status === 'watched')
  const filmsReviews = myLibrary.filter((item) => item.status === 'reviewed')
  const filmsInLibrary = myLibrary.filter((item) => item.status !== 'reviewed')

  return (
    <ProfilePage>
      <Sidebar />
      <Switch>
        <Route path='/profile/wishlist'>
          <ProfileContent>
            {filmsToWatch && (
              <FilmsWrapper>
                {filmsToWatch.map((film) => (
                  <LibraryFilm key={film.id} {...film} />
                ))}
              </FilmsWrapper>
            )}

            {filmsToWatch.length === 0 && (
              <div>вы не добавили ни одного фильма в список ЖЕЛАЕМОГО</div>
            )}
          </ProfileContent>
        </Route>

        <Route path='/profile/to-review'>
          <ProfileContent>
            {filmsToReview && (
              <FilmsWrapper>
                {filmsToReview.map((film) => (
                  <LibraryFilm key={film.id} {...film} />
                ))}
              </FilmsWrapper>
            )}

            {filmsToReview.length === 0 && (
              <div>вы не добавили ни одного фильма в список ЖЕЛАЕМОГО</div>
            )}
          </ProfileContent>
        </Route>

        <Route path='/profile/reviews'>
          <ProfileContent>
            {filmsReviews && (
              <FilmsWrapperReview>
                {filmsReviews.map((film) => (
                  <ReviewedFilm key={film.id} {...film} />
                ))}
              </FilmsWrapperReview>
            )}

            {filmsReviews.length === 0 && (
              <div>вы не оставили ни одного отзыва</div>
            )}
          </ProfileContent>
        </Route>

        <Route path='/profile/edit-review/:id'>
          <EditReview />
        </Route>

        <Route path='/profile/:id'>
          <LibraryDetailFilm />
        </Route>

        <Route path='/profile'>
          <ProfileContent>
            {filmsInLibrary && (
              <FilmsWrapper>
                {filmsInLibrary.map((film) => (
                  <LibraryFilm key={film.id} {...film} />
                ))}
              </FilmsWrapper>
            )}

            {filmsInLibrary.length === 0 && (
              <div>вы не добавили ни одного фильма в ИЗБРАННОЕ</div>
            )}
          </ProfileContent>
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
  @media (max-width: 768px) {
    display: flex;
  }
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FilmsWrapperReview = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`

export default Profile
