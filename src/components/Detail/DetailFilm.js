import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import DetailSlider from './DetailSlider'
import { useDispatch } from 'react-redux'
import { toggleDetail } from '../../redux/actions/filmsAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const DetailFilm = () => {
  //проверяем загрузились ли данные
  const { isLoading, isShow } = useSelector((state) => state.details)
  const dispatch = useDispatch()

  // получаем данные
  const { vote_average, title, overview, genres } = useSelector(
    (state) => state.details.filmDetails
  )

  const closeDetailHandler = (e) => {
    console.log(e.currentTarget.classList)
    if (e.target.classList.contains('shadow')) {
      dispatch(toggleDetail())
    }

    if (e.currentTarget.classList.contains('close-icon')) {
      dispatch(toggleDetail())
    }
  }

  return (
    <>
      {!isLoading && isShow && (
        <Overlay className='shadow' onClick={closeDetailHandler}>
          <DetailWrapper>
            <FilmHeader>
              <div className='close-icon' onClick={closeDetailHandler}>
                <FontAwesomeIcon icon={faTimes}>close</FontAwesomeIcon>
              </div>
              <h2>{title}</h2>

              <FilmAttributes>
                <span class='votes'>Оценка: {vote_average} / 10</span>
                <div class='genres'>
                  <ul>
                    {genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
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

  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
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
  left: 0%;
  top: 0%;
  max-width: 900px;
  height: 100vh;

  z-index: 10;
  background: #fff;

  @media (max-width: 1200px) {
    width: 80%;
    left: 10%;
    top: 10%;
  }

  @media (max-width: 767px) {
    width: 100%;
    left: 0%;
    top: 0%;
    overflow: scroll;
  }
`

const FilmHeader = styled.div`
  padding: 25px 50px;
  display: flex;
  flex-direction: column;

  background: #f1f1f1;

  button {
    position: absolute;
    right: 0;
    top: 0;
  }

  h2 {
    margin: 0;
    font-size: 22px;

    margin-bottom: 10px;
    padding-right: 30px;
  }

  .close-icon {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    display: block;
    line-height: 20px;
    padding: 5px;
    cursor: pointer;
  }
  .votes {
    @media (max-width: 767px) {
      margin-bottom: 12px;
    }
  }

  .genres {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 767px) {
      width: 100%;
      overflow: scroll;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;

    align-items: center;
    list-style: none;

    position: relative;

    li {
      margin-right: 10px;
      background: #015595;
      color: #fff;
      border-radius: 10px;
      padding: 2px 12px;
      font-size: 14px;

      &:last-child {
        margin-right: 0;
      }

      @media (max-width: 767px) {
        margin-bottom: 7px;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 15px;
  }
`

const FilmAttributes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const FilmContent = styled.div`
  padding: 25px 50px;
  @media (max-width: 767px) {
    padding: 15px;
  }
`

const SliderWrapper = styled.div`
  padding: 0px 50px;

  @media (max-width: 767px) {
    padding: 25px 15px 25px 15px;
  }
`

export default DetailFilm
