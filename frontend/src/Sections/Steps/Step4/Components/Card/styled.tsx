import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div<{ isLoading: Boolean }>`
  width: 30%;
  background-color: var(--background-color-light);
  margin: 10px 0;
  padding: ${(props) => !props.isLoading && "20px"};
  border-radius: 5px;
  min-height: 100px;

  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--background-color);
    padding: 0 0 10px;
    margin-bottom: 10px;
    align-items: center;
  }

  h3 {
    text-transform: capitalize;
  }
`;

export const CardBody = styled.div`
  p {
    text-transform: capitalize;
    font-size: 14px;
  }
`;

export const PlayButton = styled.button`
  color: white;
  background-color: var(--primary-color);
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid transparent;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2px 1px 2px 4px;
  img {
    width: 20px;
    fill: white;
  }
`;

const loading = keyframes`
  0% {
    transform: translateX(-150%) skewX(-35deg);
  };
  50% {
    transform: translateX(-60%) skewX(-35deg);
  }
  100% {
    transform: translateX(150%) skewX(-35deg);
  }
`;

export const SkeletonCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow-x: hidden;

  div {
    width: 50%;
    height: 100%;
    background-color: var(--background-color);
    transform: skewX(-35deg);
    animation: ${loading} 1.5s infinite;
  }
`;
