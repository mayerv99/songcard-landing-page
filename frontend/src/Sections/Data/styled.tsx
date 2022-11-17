import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Item = styled.div`
  font-size: 34px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  span {
    font-size: 18px;
  }
`;

export const Number = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  color: var(--primary-color);
  span {
    color: var(--primary-color);
    font-size: 34px;
  }
`;
