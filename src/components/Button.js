import styled from "styled-components";

export const Button = styled.a`
  font-size: 1rem;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  width: 130px;
  padding: 12px 0;
  margin: 0.5rem;
  border-radius: 50px;
  outline: none;
  border: 1px solid white;
  background: ${({ primary }) =>
    primary
      ? "linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))"
      : "white"};
  color: ${({ primary }) => (primary ? "white" : "hsl(356, 100%, 66%)")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? "white" : "hsl(355, 100%, 74%)")};
    color: ${({ primary }) => (primary ? "hsl(356, 100%, 66%)" : "white")};
    border: 1px solid
      ${({ primary }) => (primary ? "white" : "hsl(355, 100%, 74%)")};
    transition: all 0.2s ease-in-out;
  }
`;
