import React from "react";
import * as S from "./Header.style";
import { Section, Button } from "../../components";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

function Header({ logged }) {
  const Auth = useContext(AuthContext);
  const history = useHistory();

  function logOut(auth, history) {
    auth.setToken("");
    localStorage.removeItem("token");
    history.push("/");
  }
  return (
    <Section>
      <S.Header>
        <S.StyledLink to="/">
          <S.Logo>BookSite</S.Logo>
        </S.StyledLink>
        <S.Actions>
          {!logged && (
            <>
              <S.StyledLink to="/">Login</S.StyledLink>
              <S.StyledLink to="/register">Register</S.StyledLink>
            </>
          )}
          {logged && (
            <>
              <S.StyledLink to="/viewBooks">View Books</S.StyledLink>
              <S.StyledLink to="/addBooks">Add Books</S.StyledLink>
              <Button handleClick={() => logOut(Auth, history)}>Logout</Button>
            </>
          )}
        </S.Actions>
      </S.Header>
    </Section>
  );
}

export default Header;
