import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.color === "primary"
      ? "linear-gradient(90deg, rgba(253,29,29, 1) 0%, rgba(252,125,69, 1) 100%)"
      : props.theme.secondary.background};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
  outline: none;
  border: none;
  border-radius: 5px;
  letter-spacing: 1px;
  margin-top: 20px;
  padding: 0.7em 2em;
  transition: all 0.8s;
  cursor: pointer;
  &:hover {
    transition: all 2s;
    background: ${(props) =>
      props.color === "primary"
        ? "linear-gradient(180deg, rgba(253,29,29, 1) 0%, rgba(252,125,69, 1) 100%)"
        : props.theme.secondary.hover.background};
  }
  &:focus {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.focus.background
        : props.theme.secondary.focus.background};
  }
`;
