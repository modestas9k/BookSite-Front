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
  padding: 0.7em 2em;
  transition: all 0.8s;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    background: ${(props) =>
      props.color === "primary"
        ? "linear-gradient(180deg, rgba(253,29,29, 1) 0%, rgba(252,125,69, 1) 100%)"
        : props.theme.secondary.hover.background};
    color: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.color
        : props.theme.secondary.hover.color};
  }
  &:focus {
    background: ${(props) =>
      props.color === "primary"
        ? "linear-gradient(90deg, rgb(159, 0, 31) 0%, rgba(252,125,69, 1) 100%)"
        : props.theme.secondary.focus.background};
  }
`;
