import React from 'react'
import { useSelector } from 'react-redux'
import Film from '../FilmsPage/Film'
import DetailFilm from '../Detail/DetailFilm'
import styled from 'styled-components'

const SearchedList = () => {
  const { searchedFilms, isSearching } = useSelector((state) => state.search)

  return (
    <div>
      {!isSearching && (
        <FilmsWrapper>
          <DetailFilm />
          {searchedFilms.map((film) => (
            <Film key={film.id} {...film} />
          ))}
        </FilmsWrapper>
      )}
    </div>
  )
}

const FilmsWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default SearchedList
