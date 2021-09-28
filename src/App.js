import FilmsList from './components/FilmsList'
import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Actors from './components/Actors/Actors'
import SearchedList from './components/SearchedList'

import styled from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <GlobalStyles />
        <Header>
          <Logo />

          <Nav />
        </Header>

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
      </Router>
    </div>
  )
}

const Header = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20vh;
  padding: 15px;
  margin-bottom: 15px;

  background: #fbfbfb;
`

export default App
