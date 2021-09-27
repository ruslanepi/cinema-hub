import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import LibraryFilm from './LibraryFilm'

const Profile = () => {
  const { myLibrary } = useSelector((state) => state.library)

  if (myLibrary) {
    return <div>вы не добавили ни одного фильма в список</div>
  } else {
    return (
      <FilmsWrapper>
        {myLibrary.map((film) => {
          return <LibraryFilm key={film.id} {...film} />
        })}
      </FilmsWrapper>
    )
  }
}

const FilmsWrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default Profile
