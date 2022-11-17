import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  perspective: 1000px;
  -webkit-perspective: 1000px;
  transform-style: preserve-3d;
  position: relative;
  transition: transform 1s;
  width: 500px;
  z-index: 0;

  &.flipped {
    z-index: 1;
  }
`;

export const CardInner = styled.div`
  transition: transform 1s;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }
`;

const Card = css`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  background-color: var(--background-color);
`;

export const FrontCard = styled.div`
  ${Card}
`;

export const BackCard = styled.div`
  ${Card}
  transform: rotateY(180deg) translate(100%, 0)
`;
