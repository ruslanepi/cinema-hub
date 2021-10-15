import FilmsList from "./components/DefaultPage/FilmsList";

import Nav from "./components/Nav";

import Profile from "./components/Profile";
import ActorsPage from "./components/Actors/ActorsPage";
import SearchedList from "./components/SearchedList";

import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActorDetails from "./components/Actors/ActorDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <HeaderWrapper>
          <Header>
            <Nav />
          </Header>
        </HeaderWrapper>

        <ContentWrapper>
          <Switch>
            <Route exact path="/">
              <FilmsList />
            </Route>
            <Route path="/search/:query">
              <SearchedList />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/actors">
              <ActorsPage />
            </Route>
          </Switch>
        </ContentWrapper>
      </Router>
    </div>
  );
}

const HeaderWrapper = styled.header`
  margin-bottom: 15px;
  background: #f9f9f9;
  padding: 10px 0px;

  @media (max-width: 767px) {
    padding: 0px 15px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  max-width: 1400px;
  margin: 0 auto;

  padding: 0px 15px;
`;

const ContentWrapper = styled.header`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0px 15px;

  @media (max-width: 767px) {
    padding: 0px 15px;
  }
`;

export default App;
