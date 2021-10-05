import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { searchFilm } from "../actions/filmsAction";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import { useHistory } from "react-router";
import burger from "../images/burger.png";

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    setActiveMenu(false);
  }, []);

  const searchFormHandler = (e) => {
    e.preventDefault();
    setActiveMenu(false);
    dispatch(searchFilm(searchValue));
    setSearchValue("");
    history.push(`/search/${searchValue}`);
  };

  //classNames
  const burgerClasses = classNames({
    burger: true,
    active: activeMenu,
  });
  const menuClasses = classNames({ active: activeMenu });
  const activeMenuClass = {
    color: "#015595",
    borderBottom: "1px solid #ffbc00",
  };

  return (
    <>
      <LogoWrapper onClick={() => setActiveMenu(false)}>
        <NavLink to="/">
          <LogoImg>
            <div className="logo">Cinema-Hub</div>
          </LogoImg>
        </NavLink>
      </LogoWrapper>

      <NavMenu>
        <NavWrapper className={menuClasses}>
          <LinkWrapper onClick={() => setActiveMenu(false)}>
            <NavLink activeStyle={activeMenuClass} exact to="/">
              Новинки
            </NavLink>
          </LinkWrapper>
          <LinkWrapper onClick={() => setActiveMenu(false)}>
            <NavLink activeStyle={activeMenuClass} to="/profile">
              Мои фильмы
            </NavLink>
          </LinkWrapper>
          <LinkWrapper onClick={() => setActiveMenu(false)}>
            <NavLink activeStyle={activeMenuClass} to="/actors">
              Актеры
            </NavLink>
          </LinkWrapper>

          <LinkWrapper>
            <form onSubmit={(e) => searchFormHandler(e)}>
              <input
                type="text"
                placeholder="Поиск по фильмам"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
          </LinkWrapper>
        </NavWrapper>
        <img
          src={burger}
          className={burgerClasses}
          onClick={() => setActiveMenu(!activeMenu)}
          alt="burger"
        />
      </NavMenu>
    </>
  );
};

const LogoWrapper = styled.div`
  a {
    display: block;
    text-decoration: none;
  }
`;

const LogoImg = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 55px;
    margin-right: 20px;
  }

  .logo {
    font-family: "Russo One", sans-serif;
    font-size: 24px;
    color: #015595;
    line-height: 25px;
    border-bottom: 2px solid #ffbc00;
    transition: all ease 0.2s;

    :hover {
      border-bottom: 8px solid #ffbc00;
      line-height: 22px;
    }
  }
`;

const NavMenu = styled.div`
  .burger {
    display: none;

    @media (max-width: 767px) {
      display: block;
      width: 30px;
      position: relative;
      transition: transform ease 0.3s;

      &.active {
        transform: rotate(-30deg);
      }
    }
  }

  a {
    font-size: 18px;
  }
`;

const NavWrapper = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    left: 0;
    top: 0vh;

    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;

    visibility: hidden;
    opacity: 0;

    background: #fff;
    transition: all ease 0.3s;

    &.active {
      visibility: visible;
      opacity: 1;
      left: 0;
      top: 12vh;
      background: #fff;
      z-index: 999;
    }
  }
`;

const LinkWrapper = styled.div`
  display: inline-block;
  margin-right: 30px;

  &:last-child {
    margin-right: 0px;
  }

  a {
    font-family: "Russo One", sans-serif;
    text-decoration: none;
    color: #464642;
  }

  input {
    border-radius: 10px;
    border: 1px solid #f3f3f3;
    background: #fff;
    padding: 5px 10px 5px 20px;
    font-size: 16px;
    letter-spacing: 0.5px;
    &:active,
    &:focus {
      outline: none;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
`;

export default Nav;
