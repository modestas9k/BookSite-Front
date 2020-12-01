import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

export const Logo = styled.h1`
  text-decoration: none;
  margin: 0;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  font-size: 1.2em;
  color: #222;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 25px;
  }
  &:active {
    text-decoration: underline;
  }
`;
