import styled, { StyledComponent } from "@emotion/styled";

interface Props {
  cols?: number;
}

export const Grid = styled("div")<Props>`
  display: grid;
  grid-template-columns: repeat(${({ cols = 4 }) => cols}, 1fr);
  /* grid-gap: 20px; */
  column-gap: 20px;

  /* @media (min-width: 500px) {
    grid-template-columns: repeat(2, 20px 1fr);
  }
  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 20px 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 20px 1fr);
  } */
`;

export const Two = styled("div")`
  grid-column: span 2;
`;

export const Four = styled("div")`
  grid-column: span 4;
`;
