import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import DetailSlider from './DetailSlider'
import { useDispatch } from 'react-redux'
import { toggleDetail } from '../../actions/filmsAction'

const DetailFilm = () => {
  //проверяем загрузились ли данные
  const { isLoading, isShow } = useSelector((state) => state.details)

  const dispatch = useDispatch()

  // получаем данные
  const { vote_average, title, overview, genres } = useSelector(
    (state) => state.details.filmDetails
  )

  const closeDetailHandler = (e) => {
    if (e.target.classList.contains('shadow')) {
      dispatch(toggleDetail())
    }
  }

  return (
    <>
      {!isLoading && isShow && (
        <Overlay className='shadow' onClick={closeDetailHandler}>
          <DetailWrapper>
            <FilmHeader>
              <h2>{title}</h2>

              <FilmAttributes>
                <span>{vote_average} / 10</span>
                <ul>
                  {genres.map((genre) => {
                    return <li key={genre.id}>{genre.name}</li>
                  })}
                </ul>
              </FilmAttributes>
            </FilmHeader>
            <FilmContent>
              <div>{overview}</div>
            </FilmContent>
            <SliderWrapper>
              <DetailSlider />
            </SliderWrapper>
          </DetailWrapper>
        </Overlay>
      )}
    </>
  )
}

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`

const DetailWrapper = styled.div`
  position: absolute;
  width: 80%;
  left: 10%;
  top: 10%;
  max-width: 800px;

  z-index: 10;
  background: #ccc;
`

const FilmHeader = styled.div`
  padding: 25px 50px;
  display: flex;
  flex-direction: column;

  background: #f1f1f1;

  h2 {
    margin: 0;
    font-size: 22px;
    margin-bottom: 10px;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin-right: 10px;
      background: #e2e2e2;
      border-radius: 10px;
      padding: 2px 12px;
      font-size: 14px;

      &:last-child {
        margin: 0;
      }
    }
  }
`

const FilmAttributes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FilmContent = styled.div`
  padding: 25px 50px;
`

const SliderWrapper = styled.div`
  padding: 0px 50px;
  height: 420px;
`

export default DetailFilm
