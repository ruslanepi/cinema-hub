import React from 'react'
import { useSelector } from 'react-redux'
import Film from './Film'
import DetailFilm from './Detail/DetailFilm'
import styled from 'styled-components'

const SearchedList = () => {
  const { searchedFilms, isSearching } = useSelector((state) => state.films)

  return (
    <div>
      {!isSearching && (
        <FilmsWrapper>
          <DetailFilm />
          {searchedFilms.map((film) => {
            return <Film key={film.id} {...film} />
          })}
        </FilmsWrapper>
      )}
    </div>
  )
}

const FilmsWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export default SearchedList
