import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 45%;
  /* letter-spacing: 0.5px; */

  h1 {
    font-weight: 900;
    font-size: 48px;
    span {
      color: var(--primary-color);
    }
  }

  h2 {
    font-size: 16px;
    color: var(--text-color-light);
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 25px;
  }
`;

export const Picture = styled.div`
  width: 500px;
  height: 500px;
  background-color: var(--background-color);
  border-radius: 10px;
`;
