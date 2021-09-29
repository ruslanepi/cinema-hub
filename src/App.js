import FilmsList from './components/DefaultPage/FilmsList'

import Logo from './components/Logo'
import Nav from './components/Nav'

import Profile from './components/Profile'
import Actors from './components/Actors/Actors'
import SearchedList from './components/SearchedList'

import styled from 'styled-components'
import GlobalStyles from './components/GlobalStyles'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <GlobalStyles />
        <HeaderWrapper>
          <Header>
            <Logo />
            <Nav />
          </Header>
        </HeaderWrapper>

        <ContentWrapper>
          <Switch>
            <Route exact path='/'>
              <FilmsList />
            </Route>
            <Route path='/search/:query'>
              <SearchedList />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/actors'>
              <Actors />
            </Route>
          </Switch>
        </ContentWrapper>
      </Router>
    </div>
  )
}

const HeaderWrapper = styled.header`
  margin-bottom: 15px;
  background: #fbfbfb;

  @media (max-width: 767px) {
    padding: 15px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 12vh;
  max-width: 1400px;
  margin: 0 auto;
`

const ContentWrapper = styled.header`
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: 0px 15px;
  }
`

export default App
