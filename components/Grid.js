import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
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
Grid.propTypes = {
  cols: PropTypes.number
};

Grid.defaultProps = {
  cols: 4
};

const Two = styled("div")`
  grid-column: span 2;
`;

const Four = styled("div")`
  grid-column: span 4;
`;

Grid.Two = Two;
Grid.Four = Four;

export default Grid;
