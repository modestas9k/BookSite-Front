import styled from "styled-components";

export const H1 = styled.h1`
  color: #454545;
`;

export const ViewCont = styled.div`
  box-shadow: 5px 5px 32px 0px rgba(68, 68, 68, 0.69);
  border-radius: 10px;
  padding: 2em;
  color: #454545;
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 3px;
  &:nth-child(even) {
    background-color: #eee;
  }
`;

export const Column = styled.h4`
  width: 100%;
  font-weight: 500;
  padding-left: 1em;
`;
export const Center = styled.div`
  display: flex;
  max-width: 300px;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
`;
