import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    letter-spacing: 1px;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 25%;

  header {
    padding: 10px 0 15px;
    border-bottom: 1px solid var(--background-color);
    font-weight: 600;

    span {
      background-color: var(--primary-color);
      padding: 5px 10px;
      color: white;
      border-radius: 50px;
      margin-right: 15px;
    }
  }
`;

export const CardBody = styled.div`
  padding: 10px 5px;
  font-size: 16px;
  line-height: 25px;
`;

export const Arrow = styled.div`
  font-size: 60px;
  color: var(--primary-color);
`;
