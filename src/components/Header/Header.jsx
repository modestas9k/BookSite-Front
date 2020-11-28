import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { Section } from "../../components";

function Header() {
  return (
    <Section>
      <S.Header>
        <Link to="/">
          <S.Logo src={logoImg} alt="Logo" />
        </Link>
        <S.Actions>
          <S.StyledLink to="/">Login</S.StyledLink>
          <S.StyledLink to="/register">Register</S.StyledLink>
          <S.StyledLink to="/viewbooks">ViewBooks</S.StyledLink>
          <S.StyledLink to="/addbooks">AddBooks</S.StyledLink>
        </S.Actions>
      </S.Header>
    </Section>
  );
}

export default Header;
