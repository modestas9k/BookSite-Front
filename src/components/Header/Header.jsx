import React, { useContext } from "react";
import * as S from "./Header.style";
import { Section, Button } from "../../components";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Header() {
  const AuthToken = useContext(AuthContext);
  const history = useHistory();

  return (
    <Section>
      <S.Header>
        <S.StyledLink to="/">
          <S.Logo>BookSite</S.Logo>
        </S.StyledLink>
        <S.Actions>
          {AuthToken.token === "" && (
            <>
              <S.StyledLink to="/">Login</S.StyledLink>
              <S.StyledLink to="/register">Register</S.StyledLink>
            </>
          )}
          {AuthToken.token && (
            <>
              <S.StyledLink to="/viewbooks">ViewBooks</S.StyledLink>
              <S.StyledLink to="/addbooks">AddBooks</S.StyledLink>
              <Button
                handleClick={() => {
                  AuthToken.setToken("");

                  history.push("/login");
                }}
              >
                Logout
              </Button>
            </>
          )}
        </S.Actions>
      </S.Header>
    </Section>
  );
}

export default Header;
