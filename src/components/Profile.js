import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

import LibraryFilm from "./LibraryFilm";

const Profile = () => {
  const { myLibrary } = useSelector((state) => state.library);

  return (
    <ProfilePage>
      <Sidebar />
      <ProfileContent>
        {myLibrary && (
          <FilmsWrapper>
            {myLibrary.map((film) => {
              return <LibraryFilm key={film.id} {...film} />;
            })}
          </FilmsWrapper>
        )}

        {myLibrary.length === 0 && (
          <div>вы не добавили ни одного фильма в список</div>
        )}
      </ProfileContent>
    </ProfilePage>
  );
};

const ProfilePage = styled.section`
  display: grid;
  grid-template-columns: 2fr 7fr;
  gap: 15px;
  background: #fff;
`;

const ProfileContent = styled.section`
  padding: 15px 25px;

  background: #fbfbfb;
  border-radius: 5px;
`;

const FilmsWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

export default Profile;
