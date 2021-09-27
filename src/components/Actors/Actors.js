import React, { useEffect } from 'react'
import Actor from './Actor'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'
import { loadActors } from '../../actions/filmsAction'

const Actors = () => {
  const dispatch = useDispatch()
  const { popularActors } = useSelector((state) => state.actors)

  useEffect(() => {
    dispatch(loadActors())
  }, [])

  return (
    <ActorsWrapper>
      {popularActors.map((actor) => {
        return <Actor key={actor.id} {...actor} />
      })}
    </ActorsWrapper>
  )
}

const ActorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export default Actors
