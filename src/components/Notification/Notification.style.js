import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => (props.color === "red" ? "red" : "green")};
  margin: 40px 0 40px 0;
`;
