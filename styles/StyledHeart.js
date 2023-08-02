import styled from "styled-components";

const StyledHeart = styled.svg`
  width: 20px;
  height: 20px;

  path {
    stroke: black;
    fill: ${({ isFilled }) => (isFilled ? "black" : "transparent")};
  }
  stroke-width: 0.5;
`;

export default StyledHeart;
