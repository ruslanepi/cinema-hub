import FilmsList from './components/FilmsList'
import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Profile from './components/Profile'

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
        <div className='header'>
          <Container>
            <Row>
              <Col lg='2'>
                <Logo />
              </Col>
              <Col lg='10'>
                <Nav />
              </Col>
            </Row>
          </Container>
        </div>
        <Container className='main'>
          <Row>
            <Col lg='2'>
              <SidebarStyles>
                <Sidebar />
              </SidebarStyles>
            </Col>

            <Col lg='10'>
              <Switch>
                <Route exact path='/'>
                  <FilmsList />
                </Route>
                <Route path='/profile'>
                  <Profile />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
    </div>
  )
}
const SidebarStyles = styled.div`
  background: #ccc;
  width: 100%;
`

export default App
